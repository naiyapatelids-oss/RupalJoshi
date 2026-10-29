import React, { useState } from 'react';
import { Mail, FileText, CheckCircle2, AlertCircle, X, Loader2, Download, Eye, ExternalLink, ShieldCheck } from 'lucide-react';
import { generateUpdatedCvPdf } from '../utils/generateCvPdf';

interface EmailCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailCvModal: React.FC<EmailCvModalProps> = ({ isOpen, onClose }) => {
  const recipient = "shivaayjoshi85@gmail.com";
  const subject = "Rupal Joshi – Updated Academic CV";
  const defaultBody = `Dear Sir/Madam,

Please find attached the updated CV of Rupal Joshi for your reference.

The CV includes her current professional experience, academic leadership, qualifications, achievements, awards, and research contributions.

Kindly review the attached document.

Best regards,
Rupal Joshi`;

  const [message, setMessage] = useState(defaultBody);
  const [senderName, setSenderName] = useState('Rupal Joshi Academic Portfolio');
  const [senderEmail, setSenderEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [deliveryResult, setDeliveryResult] = useState<{
    messageId?: string;
    details?: string;
    previewUrl?: string | false;
    provider?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [pdfGenerating, setPdfGenerating] = useState(false);

  if (!isOpen) return null;

  const handlePreviewPdf = () => {
    try {
      setPdfGenerating(true);
      const { doc } = generateUpdatedCvPdf();
      const pdfBlobUrl = doc.output('bloburl');
      window.open(pdfBlobUrl, '_blank');
    } catch (e: unknown) {
      console.error('Failed to preview PDF', e);
    } finally {
      setPdfGenerating(false);
    }
  };

  const handleDownloadPdf = () => {
    try {
      setPdfGenerating(true);
      const { doc, filename } = generateUpdatedCvPdf();
      doc.save(filename);
    } catch (e: unknown) {
      console.error('Failed to download PDF', e);
    } finally {
      setPdfGenerating(false);
    }
  };

  const handleSendEmail = async () => {
    setIsSending(true);
    setErrorMessage(null);
    setSendSuccess(false);
    setDeliveryResult(null);

    try {
      // 1. Generate updated PDF with current Indus Design School role
      const { base64, filename } = generateUpdatedCvPdf();

      // 2. Dispatch to backend API
      const response = await fetch('/api/send-cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient,
          subject,
          message,
          pdfBase64: base64,
          filename,
          senderName: senderName || 'Rupal Joshi',
          senderEmail: senderEmail || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || `Server responded with status ${response.status}`);
      }

      setSendSuccess(true);
      setDeliveryResult({
        messageId: data.messageId,
        details: data.details,
        previewUrl: data.previewUrl,
        provider: data.provider,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setErrorMessage(
        msg || 'Failed to dispatch email. Please ensure the email backend or SMTP service is reachable.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs no-print">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#E8DDCA] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DDCA] bg-[#FAF7F0]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#873C4D]/10 text-[#873C4D]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#873C4D] leading-none">
                Email Updated CV
              </h3>
              <p className="text-xs text-[#292929]/70 mt-1">
                Direct dispatch with updated PDF attachment
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            disabled={isSending}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          {/* Success Notification */}
          {sendSuccess ? (
            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-800 font-semibold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Email Successfully Dispatched!</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                The updated CV has been packaged as a PDF and transmitted to{' '}
                <strong className="font-mono">{recipient}</strong>.
              </p>

              {deliveryResult?.messageId && (
                <div className="text-[11px] font-mono text-emerald-800 bg-emerald-100/70 p-2 rounded border border-emerald-300/50">
                  Message ID: {deliveryResult.messageId}
                </div>
              )}

              {deliveryResult?.previewUrl && (
                <div className="pt-2">
                  <a
                    href={deliveryResult.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-900 bg-emerald-200/80 hover:bg-emerald-300 px-3 py-1.5 rounded-md transition-colors"
                  >
                    <span>View Delivered Email in Test Inbox</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {deliveryResult?.details && (
                <p className="text-xs text-emerald-700 pt-1">
                  {deliveryResult.details}
                </p>
              )}

              <div className="pt-3 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-[#873C4D] hover:bg-[#662735] text-[#F8F5EE] text-xs font-semibold rounded-md shadow-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Error Notice */}
              {errorMessage && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-lg text-rose-800 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Email Dispatch Notice</span>
                  </div>
                  <p className="text-xs leading-relaxed">{errorMessage}</p>
                  <p className="text-[11px] text-rose-700 pt-1">
                    Tip: Set <code className="font-mono bg-rose-100 px-1 py-0.5 rounded">RESEND_API_KEY</code> or{' '}
                    <code className="font-mono bg-rose-100 px-1 py-0.5 rounded">SMTP_USER</code> /{' '}
                    <code className="font-mono bg-rose-100 px-1 py-0.5 rounded">SMTP_PASS</code> in your environment variables.
                  </p>
                </div>
              )}

              {/* Confirmation Details Summary */}
              <div className="space-y-3.5 bg-[#FAF7F0] p-4 sm:p-5 rounded-xl border border-[#E8DDCA]">
                {/* Recipient */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#873C4D] mb-1">
                    To Recipient
                  </label>
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-[#292929] bg-white p-2.5 rounded-md border border-[#E8DDCA]">
                    <Mail className="w-4 h-4 text-[#873C4D] shrink-0" />
                    <span>{recipient}</span>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#873C4D] mb-1">
                    Subject Line
                  </label>
                  <div className="text-xs sm:text-sm font-medium text-[#292929] bg-white p-2.5 rounded-md border border-[#E8DDCA]">
                    {subject}
                  </div>
                </div>

                {/* Attached Document Summary */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#873C4D] mb-1">
                    Attached PDF Document
                  </label>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 bg-white rounded-md border border-[#E8DDCA]">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-5 h-5 text-[#873C4D] shrink-0" />
                      <div>
                        <div className="font-mono text-xs font-bold text-[#292929]">
                          Rupal_Joshi_Updated_Academic_CV.pdf
                        </div>
                        <div className="text-[11px] text-[#B86F58] mt-0.5">
                          ✓ Includes HOD, Design Department – Indus University (June 2026 – Present)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={handlePreviewPdf}
                        disabled={pdfGenerating}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#873C4D] bg-[#FAF7F0] hover:bg-[#873C4D]/10 rounded border border-[#873C4D]/30 transition-colors"
                        title="Preview generated PDF in browser"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleDownloadPdf}
                        disabled={pdfGenerating}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#292929] bg-[#FAF7F0] hover:bg-[#E8DDCA] rounded border border-[#E8DDCA] transition-colors"
                        title="Download copy of PDF"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Email Body Preview */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#873C4D] mb-1">
                    Message Body
                  </label>
                  <textarea
                    rows={7}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 font-sans text-xs sm:text-sm bg-white border border-[#E8DDCA] rounded-md focus:outline-none focus:ring-1 focus:ring-[#873C4D] leading-relaxed resize-none text-[#292929]"
                  />
                </div>
              </div>

              {/* Security & Provenance Note */}
              <div className="flex items-start gap-2 text-[11px] text-[#292929]/70 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#873C4D] shrink-0 mt-0.5" />
                <span>
                  The PDF attachment is compiled dynamically with full academic fidelity, verified credentials, and latest departmental appointments.
                </span>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer Controls */}
        {!sendSuccess && (
          <div className="px-6 py-4 border-t border-[#E8DDCA] bg-[#FAF7F0] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isSending}
              className="px-4 py-2 text-xs font-medium text-[#292929] hover:text-[#873C4D] rounded-md transition-colors"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSendEmail}
              disabled={isSending}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#873C4D] hover:bg-[#662735] text-[#F8F5EE] text-xs sm:text-sm font-semibold rounded-md shadow-xs hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Email & PDF...</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>Send Email with Attached CV</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
