import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, ArrowUp, Printer, FileText, CheckCircle2 } from 'lucide-react';
import { cvData } from '../data/cvData';

interface ContactSectionProps {
  onOpenPdfModal: () => void;
  onOpenEmailCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPdfModal, onOpenEmailCvModal }) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Academic Collaboration / Inquiry');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const targetRecipientEmail = "shivaayjoshi85@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${targetRecipientEmail}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject} - from ${senderName}`
    )}&body=${encodeURIComponent(
      `From: ${senderName} (${senderEmail})\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { contact } = cvData;

  return (
    <footer id="contact" className="bg-[#FAF7F0] border-t border-[#E8DDCA] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#873C4D] uppercase mb-2">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact Details from CV (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white border border-[#E8DDCA] rounded-xl p-6 sm:p-7 shadow-xs space-y-6">
              
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#873C4D] mb-1">
                  Rupal Joshi
                </h3>
                <p className="text-xs sm:text-sm text-[#B86F58] font-medium">
                  {contact.descriptor}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#FAF7F0] text-[#873C4D] border border-[#E8DDCA] shrink-0 mt-0.5">
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
                  <div className="p-2 rounded-lg bg-[#FAF7F0] text-[#873C4D] border border-[#E8DDCA] shrink-0 mt-0.5">
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
                          className="text-sm text-[#292929] hover:text-[#873C4D] transition-colors"
                        >
                          {contact.emails[0]}
                        </a>
                      </div>
                      <div>
                        <a 
                          href={`mailto:${contact.emails[1]}`} 
                          className="text-sm text-[#292929] hover:text-[#873C4D] transition-colors"
                        >
                          {contact.emails[1]}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#FAF7F0] text-[#873C4D] border border-[#E8DDCA] shrink-0 mt-0.5">
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
                  <div className="p-2 rounded-lg bg-[#FAF7F0] text-[#873C4D] border border-[#E8DDCA] shrink-0 mt-0.5">
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
              <div className="pt-5 border-t border-[#E8DDCA]">
                <button
                  type="button"
                  onClick={onOpenEmailCvModal}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-[#873C4D] hover:bg-[#662735] text-[#F8F5EE] text-xs sm:text-sm font-semibold rounded-lg shadow-xs hover:shadow transition-all group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#873C4D] focus:ring-offset-2"
                  aria-label="Email updated academic CV to shivaayjoshi85@gmail.com"
                >
                  <Mail className="w-4 h-4 text-[#F8F5EE] group-hover:scale-110 transition-transform shrink-0" />
                  <span>Email CV to shivaayjoshi85@gmail.com</span>
                </button>
                <div className="flex items-center justify-between text-[11px] text-[#292929]/65 mt-2 px-1">
                  <span>Includes updated PDF attachment</span>
                  <span className="font-semibold text-[#873C4D]">June 2026 – Present Role</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Dispatch Inquiries (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#E8DDCA] rounded-xl p-6 sm:p-7 shadow-xs">
              <h3 className="font-editorial text-2xl font-bold text-[#873C4D] mb-1">
                Dispatch an Academic Message
              </h3>
              <p className="text-xs sm:text-sm text-[#292929]/70 mb-5">
                Prepares a structured correspondence directly dispatched to shivaayjoshi85@gmail.com.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#292929]/80 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Prof. / Dr. / Name"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F0]/50 border border-[#E8DDCA] rounded-md focus:outline-none focus:ring-1 focus:ring-[#873C4D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#292929]/80 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="colleague@institution.edu"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F0]/50 border border-[#E8DDCA] rounded-md focus:outline-none focus:ring-1 focus:ring-[#873C4D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#292929]/80 mb-1">
                    Subject Area
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F0]/50 border border-[#E8DDCA] rounded-md focus:outline-none focus:ring-1 focus:ring-[#873C4D]"
                  >
                    <option value="Academic Collaboration / Inquiry">Academic Collaboration / Joint Research</option>
                    <option value="Keynote / Guest Lecture Invitation">Keynote / Guest Lecture Invitation</option>
                    <option value="Handloom Council (WICCI) Engagement">Handloom Council (WICCI) State Engagement</option>
                    <option value="Curriculum / Examination Consultation">Curriculum / ICSE / Examination Consultation</option>
                    <option value="General Professional Inquiry">General Professional Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#292929]/80 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Details regarding your academic invitation, research proposal, or institutional inquiry..."
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F0]/50 border border-[#E8DDCA] rounded-md focus:outline-none focus:ring-1 focus:ring-[#873C4D] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#873C4D] hover:bg-[#662735] text-[#F8F5EE] text-xs sm:text-sm font-semibold rounded-md shadow-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </button>

                {sentNotice && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 text-xs rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Your email client has been launched with the structured message addressed to shivaayjoshi85@gmail.com.</span>
                  </div>
                )}
              </form>

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
              className="hover:text-[#873C4D] transition-colors font-medium"
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
