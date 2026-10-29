import nodemailer from 'nodemailer';

export interface SendCvEmailRequest {
  recipient: string;
  subject: string;
  message: string;
  pdfBase64: string;
  filename: string;
  senderName?: string;
  senderEmail?: string;
}

export interface SendCvEmailResponse {
  success: boolean;
  messageId?: string;
  provider: 'resend' | 'smtp' | 'ethereal-test';
  previewUrl?: string | false;
  details?: string;
  error?: string;
  configured: boolean;
}

export async function sendCvEmail(data: SendCvEmailRequest): Promise<SendCvEmailResponse> {
  const { recipient, subject, message, pdfBase64, filename, senderName, senderEmail } = data;

  const resendApiKey = process.env.RESEND_API_KEY;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromEmail = process.env.SENDER_EMAIL || process.env.SMTP_USER || 'cv-delivery@resend.dev';

  const buffer = Buffer.from(pdfBase64, 'base64');

  // Strategy 1: Resend API if RESEND_API_KEY is configured
  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipient],
          reply_to: senderEmail || undefined,
          subject: subject,
          text: message,
          attachments: [
            {
              filename: filename || 'Rupal_Joshi_Updated_Academic_CV.pdf',
              content: pdfBase64,
            },
          ],
        }),
      });

      const resData = (await response.json()) as { id?: string; message?: string; error?: string };

      if (!response.ok) {
        return {
          success: false,
          configured: true,
          provider: 'resend',
          error: resData.message || resData.error || `Resend API returned status ${response.status}`,
        };
      }

      return {
        success: true,
        configured: true,
        provider: 'resend',
        messageId: resData.id,
        details: `Email successfully delivered to ${recipient} via Resend.`,
      };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        configured: true,
        provider: 'resend',
        error: `Failed to dispatch via Resend: ${msg}`,
      };
    }
  }

  // Strategy 2: Standard SMTP if SMTP_HOST or SMTP_USER & SMTP_PASS are configured
  if (smtpHost || (smtpUser && smtpPass)) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost || 'smtp.gmail.com',
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: `"${senderName || 'Rupal Joshi Academic CV'}" <${fromEmail}>`,
        to: recipient,
        replyTo: senderEmail || undefined,
        subject: subject,
        text: message,
        attachments: [
          {
            filename: filename || 'Rupal_Joshi_Updated_Academic_CV.pdf',
            content: buffer,
            contentType: 'application/pdf',
          },
        ],
      });

      return {
        success: true,
        configured: true,
        provider: 'smtp',
        messageId: info.messageId,
        details: `Email successfully transmitted to ${recipient} via SMTP server (${info.response || '250 OK'}).`,
      };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        configured: true,
        provider: 'smtp',
        error: `SMTP server error: ${msg}. Please verify your SMTP credentials.`,
      };
    }
  }

  // Strategy 3: Provision real Ethereal SMTP test transport
  // Provides authentic end-to-end SMTP dispatch with PDF attachment inspection link
  try {
    const testAccount = await nodemailer.createTestAccount();
    const testTransporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await testTransporter.sendMail({
      from: `"${senderName || 'Rupal Joshi'}" <${testAccount.user}>`,
      to: recipient,
      replyTo: senderEmail || undefined,
      subject: subject,
      text: message,
      attachments: [
        {
          filename: filename || 'Rupal_Joshi_Updated_Academic_CV.pdf',
          content: buffer,
          contentType: 'application/pdf',
        },
      ],
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);

    return {
      success: true,
      configured: false,
      provider: 'ethereal-test',
      messageId: info.messageId,
      previewUrl: previewUrl,
      details: `Email with PDF attachment processed via Ethereal SMTP test service. For direct live mailbox delivery, set RESEND_API_KEY or SMTP_USER/SMTP_PASS in environment variables.`,
    };
  } catch (testErr: unknown) {
    const msg = testErr instanceof Error ? testErr.message : String(testErr);
    return {
      success: false,
      configured: false,
      provider: 'ethereal-test',
      error: `Could not send email: ${msg}. Configure SMTP_USER and SMTP_PASS or RESEND_API_KEY in .env.`,
    };
  }
}
