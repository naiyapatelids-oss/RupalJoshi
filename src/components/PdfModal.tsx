import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { cvData } from '../data/cvData';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = cvData.contact.pdfUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs no-print">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-[#E8DDCA] overflow-hidden flex flex-col h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DDCA] bg-[#FAF7F0]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#873C4D]" />
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#873C4D] leading-none">
                Original 3-Page CV Document
              </h3>
              <p className="text-xs text-[#292929]/70 mt-0.5">
                Primary source of truth: CV_RUPAL_JOSHI.pdf
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="CV_RUPAL_JOSHI.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#873C4D] bg-white border border-[#873C4D]/30 hover:bg-[#873C4D] hover:text-[#F8F5EE] rounded-md transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Viewer Frame */}
        <div className="flex-1 bg-gray-100 p-2 sm:p-4 overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title="Original CV PDF Viewer"
            className="w-full h-full rounded border border-gray-300 bg-white"
          />
        </div>

        {/* Modal Footer note */}
        <div className="px-6 py-3 border-t border-[#E8DDCA] bg-[#FAF7F0] flex items-center justify-between text-xs text-[#292929]/70">
          <span>Every section, date, institution, award, and citation matches this source document.</span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#873C4D] hover:underline"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
