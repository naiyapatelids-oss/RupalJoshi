import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUp, Printer, FileText } from 'lucide-react';
import { cvData } from '../data/cvData';

interface ContactSectionProps {
  onOpenPdfModal: () => void;
  onOpenEmailCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPdfModal, onOpenEmailCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { contact } = cvData;

  return (
    <footer id="contact" className="bg-[#FAF7F0] border-t border-[#E8DDCA] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#873C4D] uppercase mb-2">
            <span>Section 08</span>
            <span aria-hidden="true">·</span>
            <span>Academic Correspondence</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#873C4D] tracking-tight">
            Contact & Academic Inquiries
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#292929]/75">
            Available for university lectures, doctoral research dialogues, craft council leadership, and curriculum consultations.
          </p>
        </div>

        {/* Contact Credentials Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#E8DDCA] rounded-xl p-6 sm:p-9 shadow-xs space-y-7">
            
            <div className="text-center sm:text-left border-b border-[#E8DDCA]/70 pb-5">
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#873C4D] mb-1">
                {contact.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#B86F58] font-medium leading-relaxed">
                {contact.descriptor}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#FAF7F0] text-[#873C4D] border border-[#E8DDCA] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#873C4D]/80">
                    Telephone
                  </div>
                  <div className="mt-1 space-y-1">
                    <div>
                      <a 
                        href={`tel:${contact.phones[0].replace(/\s+/g, '')}`} 
                        className="font-mono text-sm text-[#292929] hover:text-[#873C4D] transition-colors"
                      >
                        {contact.phones[0]}
                      </a>
                    </div>
                    <div>
                      <a 
                        href={`tel:${contact.phones[1].replace(/\s+/g, '')}`} 
                        className="font-mono text-sm text-[#292929] hover:text-[#873C4D] transition-colors"
                      >
                        {contact.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#FAF7F0] text-[#873C4D] border border-[#E8DDCA] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#873C4D]/80">
                    Email Addresses
                  </div>
                  <div className="mt-1 space-y-1">
                    <div>
                      <a 
                        href={`mailto:${contact.emails[0]}`} 
                        className="text-sm text-[#292929] hover:text-[#873C4D] transition-colors truncate block"
                      >
                        {contact.emails[0]}
                      </a>
                    </div>
                    <div>
                      <a 
                        href={`mailto:${contact.emails[1]}`} 
                        className="text-sm text-[#292929] hover:text-[#873C4D] transition-colors truncate block"
                      >
                        {contact.emails[1]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#FAF7F0] text-[#873C4D] border border-[#E8DDCA] shrink-0 mt-0.5">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#873C4D]/80">
                    Professional Network
                  </div>
                  <div className="mt-1">
                    <a 
                      href={contact.linkedin.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-[#292929] hover:text-[#873C4D] transition-colors underline decoration-[#E8DDCA] underline-offset-4"
                    >
                      {contact.linkedin.display}
                    </a>
                  </div>
                </div>
              </div>

              {/* Postal Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#FAF7F0] text-[#873C4D] border border-[#E8DDCA] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#873C4D]/80">
                    Residential & Postal Address
                  </div>
                  <div className="mt-1 text-sm text-[#292929]/85">
                    {contact.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated "Email CV" Action Button */}
            <div className="pt-6 border-t border-[#E8DDCA]">
              <button
                type="button"
                onClick={onOpenEmailCvModal}
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#873C4D] hover:bg-[#662735] text-[#F8F5EE] text-xs sm:text-sm font-semibold rounded-lg shadow-xs hover:shadow transition-all group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#873C4D] focus:ring-offset-2"
                aria-label="Email updated academic CV to shivaayjoshi85@gmail.com"
              >
                <Mail className="w-4 h-4 text-[#F8F5EE] group-hover:scale-110 transition-transform shrink-0" />
                <span>Email CV to shivaayjoshi85@gmail.com</span>
              </button>
              <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#292929]/65 mt-2.5 px-1 gap-1 text-center sm:text-left">
                <span>Includes updated PDF attachment with all qualifications & publications</span>
                <span className="font-semibold text-[#873C4D]">June 2026 – Present Role</span>
              </div>
            </div>

          </div>
        </div>

        {/* Lower Footer Bar */}
        <div className="mt-14 pt-8 border-t border-[#E8DDCA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#292929]/70 no-print">
          <div>
            © {new Date().getFullYear()} Rupal Joshi · Academic & Fashion Design Curriculum Vitae.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenEmailCvModal}
              className="hover:text-[#873C4D] transition-colors font-medium text-[#873C4D]"
            >
              Email CV (PDF)
            </button>
            <span>·</span>
            <button
              onClick={onOpenPdfModal}
              className="hover:text-[#873C4D] transition-colors"
            >
              Original Source CV
            </button>
            <span>·</span>
            <button
              onClick={() => window.print()}
              className="hover:text-[#873C4D] transition-colors"
            >
              Print A4 PDF
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#873C4D] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
