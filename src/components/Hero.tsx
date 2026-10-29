import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Copy, Check, ArrowDown } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Hero: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const { contact } = cvData;

  return (
    <section id="profile" className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 border-b border-[#E8DDCA]/70 overflow-hidden">
      {/* Decorative Traditional Indian Folk Art Header Band (Derived from original CV) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="relative w-full h-16 sm:h-24 md:h-28 rounded-xl overflow-hidden border border-[#E8DDCA] bg-[#FAF7F0] shadow-xs">
          <img
            src={contact.bannerUrl}
            alt="Traditional Indian Folk Art Tree and Bird Motif from original CV"
            className="w-full h-full object-cover object-center opacity-85 filter contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5EE]/40 via-transparent to-[#F8F5EE]/40 pointer-events-none" />
          <div className="absolute bottom-2 right-3 sm:bottom-2.5 sm:right-4 bg-[#873C4D]/90 backdrop-blur-xs text-[#F8F5EE] text-[10px] sm:text-xs tracking-wider px-2.5 py-0.5 rounded uppercase font-medium">
            Handlooms & Craft Heritage
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Information & Statement (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#873C4D] uppercase">
              <span>Curriculum Vitae</span>
              <span aria-hidden="true" className="text-[#B86F58]">·</span>
              <span>Academic & Fashion Leadership</span>
            </div>

            {/* Candidate Name */}
            <div>
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#873C4D] leading-none mb-3">
                {contact.name}
              </h1>
              <p className="text-base sm:text-lg text-[#B86F58] font-medium leading-relaxed">
                {contact.descriptor}
              </p>
            </div>

            {/* Profile Statement from CV */}
            <div className="relative bg-[#FAF7F0] border-l-2 border-[#873C4D] p-5 sm:p-6 rounded-r-lg shadow-xs">
              <span className="text-xs font-bold tracking-wider uppercase text-[#873C4D] block mb-2">
                Profile
              </span>
              <p className="text-[#292929] text-base sm:text-[16.5px] leading-relaxed italic font-serif">
                "{contact.profileStatement}"
              </p>
            </div>

            {/* Contact & Location Strip */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#873C4D]/80">
                Direct Contact & Credentials
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                {/* Phone Numbers */}
                <div className="flex items-center justify-between p-2.5 bg-white/70 border border-[#E8DDCA] rounded-md hover:border-[#873C4D]/40 transition-colors">
                  <div className="flex items-center gap-2 truncate">
                    <Phone className="w-3.5 h-3.5 text-[#873C4D] shrink-0" />
                    <span className="font-mono text-xs">{contact.phones[0]}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contact.phones[0], 'phone1')}
                    className="p-1 text-gray-400 hover:text-[#873C4D] transition-colors"
                    title="Copy phone number"
                  >
                    {copiedItem === 'phone1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-white/70 border border-[#E8DDCA] rounded-md hover:border-[#873C4D]/40 transition-colors">
                  <div className="flex items-center gap-2 truncate">
                    <Phone className="w-3.5 h-3.5 text-[#873C4D] shrink-0" />
                    <span className="font-mono text-xs">{contact.phones[1]}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contact.phones[1], 'phone2')}
                    className="p-1 text-gray-400 hover:text-[#873C4D] transition-colors"
                    title="Copy secondary phone number"
                  >
                    {copiedItem === 'phone2' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email Addresses */}
                <div className="flex items-center justify-between p-2.5 bg-white/70 border border-[#E8DDCA] rounded-md hover:border-[#873C4D]/40 transition-colors">
                  <a 
                    href={`mailto:${contact.emails[0]}`} 
                    className="flex items-center gap-2 truncate text-[#292929] hover:text-[#873C4D]"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#873C4D] shrink-0" />
                    <span className="truncate">{contact.emails[0]}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(contact.emails[0], 'email1')}
                    className="p-1 text-gray-400 hover:text-[#873C4D] transition-colors"
                    title="Copy primary email"
                  >
                    {copiedItem === 'email1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-white/70 border border-[#E8DDCA] rounded-md hover:border-[#873C4D]/40 transition-colors">
                  <a 
                    href={`mailto:${contact.emails[1]}`} 
                    className="flex items-center gap-2 truncate text-[#292929] hover:text-[#873C4D]"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#873C4D] shrink-0" />
                    <span className="truncate">{contact.emails[1]}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(contact.emails[1], 'email2')}
                    className="p-1 text-gray-400 hover:text-[#873C4D] transition-colors"
                    title="Copy secondary email"
                  >
                    {copiedItem === 'email2' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* LinkedIn & Postal Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm pt-0.5">
                <a
                  href={contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 bg-white/70 border border-[#E8DDCA] rounded-md hover:border-[#873C4D] hover:text-[#873C4D] transition-colors truncate"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#873C4D] shrink-0" />
                  <span className="truncate">{contact.linkedin.display}</span>
                </a>

                <div className="flex items-center gap-2 p-2.5 bg-white/70 border border-[#E8DDCA] rounded-md text-[#292929]/80 truncate">
                  <MapPin className="w-3.5 h-3.5 text-[#873C4D] shrink-0" />
                  <span className="truncate">{contact.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Navigation Jump */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#873C4D] hover:text-[#662735] transition-colors"
              >
                <span>Explore Academic Experience</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <span className="text-[#E8DDCA]">|</span>
              <a
                href="#research"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B86F58] hover:text-[#873C4D] transition-colors"
              >
                <span>View Research Papers & Citations</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Original Portrait & Editorial Framing (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              {/* Outer decorative archival frame */}
              <div className="relative p-4 sm:p-5 bg-white rounded-2xl border border-[#E8DDCA] shadow-md">
                
                {/* Circular Portrait with fine border */}
                <div className="relative aspect-square w-full rounded-full overflow-hidden bg-[#FAF7F0] border-4 border-[#F8F5EE] shadow-inner ring-1 ring-[#873C4D]/20">
                  <img
                    src={contact.photoUrl}
                    alt="Rupal Joshi - Fashion Design Educator and Handlooms Council President"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Editorial Caption Box below portrait */}
                <div className="mt-4 text-center space-y-1">
                  <div className="font-editorial text-lg font-semibold text-[#873C4D]">
                    Rupal Joshi
                  </div>
                  <div className="text-xs text-[#292929]/75 font-medium">
                    HOD Fashion Dept. · WICCI Council President
                  </div>
                  <div className="text-[11px] text-[#B86F58]">
                    Renaissance University, Indore · WICCI MP
                  </div>
                </div>

                {/* Subtle traditional corner embellishments */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#B86F58]/50" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#B86F58]/50" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#B86F58]/50" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#B86F58]/50" />
              </div>

              {/* Verified Original CV Badge */}
              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-[#292929]/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#873C4D]" />
                <span>Original CV photograph preserved verbatim</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
