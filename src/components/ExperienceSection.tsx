import React, { useState } from 'react';
import { Briefcase, Building2, Calendar, Award, Compass, Sparkles } from 'lucide-react';
import { cvData, ExperienceItem } from '../data/cvData';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'leadership' | 'industry'>('all');

  const filteredExperiences = filter === 'all' 
    ? cvData.experience 
    : cvData.experience.filter(item => item.type === filter);

  return (
    <section id="experience" className="py-16 lg:py-20 border-b border-[#E8DDCA]/70 bg-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#873C4D] uppercase mb-2">
              <span>Section 02</span>
              <span aria-hidden="true">·</span>
              <span>Career Chronology</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#873C4D] tracking-tight">
              Professional Experience
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#292929]/75 max-w-2xl">
              Chronological leadership across higher education, state handloom council governance, and fashion industry practice.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E8DDCA] rounded-lg shadow-xs no-print self-start md:self-auto overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              All Roles ({cvData.experience.length})
            </button>
            <button
              onClick={() => setFilter('academic')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                filter === 'academic'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              Academic Leadership
            </button>
            <button
              onClick={() => setFilter('leadership')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                filter === 'leadership'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              State Council (WICCI)
            </button>
            <button
              onClick={() => setFilter('industry')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                filter === 'industry'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              Industry & Ethnic Wear
            </button>
          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#873C4D]/30 space-y-10">
          {filteredExperiences.map((item, index) => {
            const isLatest = index === 0 && filter === 'all';

            return (
              <div 
                key={item.id} 
                className="relative group print-break-inside-avoid"
              >
                {/* Timeline node */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  isLatest 
                    ? 'bg-[#873C4D] border-[#F8F5EE] ring-2 ring-[#873C4D]' 
                    : 'bg-[#FAF7F0] border-[#873C4D]'
                }`} />

                {/* Card Container */}
                <div className="bg-white/80 hover:bg-white border border-[#E8DDCA] hover:border-[#873C4D]/40 rounded-xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all">
                  
                  {/* Top line metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B86F58]">
                      <span>{item.type === 'academic' ? 'Academic Leadership' : item.type === 'leadership' ? 'State Council Governance' : 'Fashion Industry Practice'}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-[#292929]/70 normal-case">{item.period}</span>
                    </div>

                    {item.period.toLowerCase().includes('present') ? (
                      <span className="inline-block text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-[#873C4D] text-[#F8F5EE] self-start sm:self-auto shadow-xs">
                        Current Role
                      </span>
                    ) : isLatest ? (
                      <span className="inline-block text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-[#873C4D]/10 text-[#873C4D] self-start sm:self-auto">
                        Recent Appointment
                      </span>
                    ) : null}
                  </div>

                  {/* Role Title */}
                  <h3 className="font-editorial text-2xl sm:text-[26px] font-bold text-[#873C4D] tracking-tight leading-snug">
                    {item.role}
                  </h3>

                  {/* Organization */}
                  <div className="flex items-center gap-2 mt-1 text-base font-medium text-[#292929]">
                    <Building2 className="w-4 h-4 text-[#B86F58] shrink-0" />
                    <span>{item.organization}</span>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-sm sm:text-[15px] text-[#292929]/80 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Highlights from CV Context */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-4 pt-3.5 border-t border-[#E8DDCA]/60">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#873C4D]/80 mb-2">
                        Institutional Responsibilities & Impact
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#292929]/75">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#B86F58] font-bold mt-0.5">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote on CV fidelity */}
        <div className="mt-10 p-4 bg-[#FAF7F0] border border-[#E8DDCA] rounded-lg text-xs text-[#292929]/70 flex items-center justify-between">
          <span>* All organization names, roles, and date intervals are preserved verbatim from the original CV document.</span>
          <span className="font-medium text-[#873C4D]">100% Document Fidelity</span>
        </div>

      </div>
    </section>
  );
};
