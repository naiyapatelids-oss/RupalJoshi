import { sendCvEmail, SendCvEmailRequest } from '../server/emailService';

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    // Health / Config status endpoint
    const hasResend = Boolean(process.env.RESEND_API_KEY);
    const hasSmtp = Boolean(process.env.SMTP_HOST || (process.env.SMTP_USER && process.env.SMTP_PASS));
    return res.status(200).json({
      configured: hasResend || hasSmtp,
      provider: hasResend ? 'Resend' : hasSmtp ? 'SMTP' : 'Ethereal Test SMTP',
      targetRecipient: 'shivaayjoshi85@gmail.com',
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const body = req.body || {};
    const { recipient, subject, message, pdfBase64, filename, senderName, senderEmail } = body;

    if (!recipient || !subject || !pdfBase64) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters: recipient, subject, and pdfBase64 attachment are required.',
      });
    }

    const result = await sendCvEmail({
      recipient,
      subject,
      message,
      pdfBase64,
      filename: filename || 'Rupal_Joshi_Updated_Academic_CV.pdf',
      senderName,
      senderEmail,
    });

    if (!result.success) {
      return res.status(502).json(result);
    }

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error?.message || 'Server error while sending email with attachment.',
    });
  }
}
