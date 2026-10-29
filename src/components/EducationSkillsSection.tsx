import React from 'react';
import { GraduationCap, Award, Languages, Sparkles, CheckCircle2, BookOpen } from 'lucide-react';
import { cvData } from '../data/cvData';

export const EducationSkillsSection: React.FC = () => {
  return (
    <section id="education" className="py-16 lg:py-20 border-b border-[#E8DDCA]/70 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Section 3: Education (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#873C4D] uppercase mb-2">
              <span>Section 03</span>
              <span aria-hidden="true">·</span>
              <span>Academic Qualifications</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#873C4D] tracking-tight mb-2">
              Education & Degrees
            </h2>
            <p className="text-sm text-[#292929]/75 mb-8">
              Postgraduate, doctoral, and specialized diploma training in fashion technology, fine arts, and apparel design.
            </p>

            <div className="space-y-4">
              {cvData.education.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#E8DDCA] hover:border-[#873C4D]/40 rounded-xl p-5 sm:p-6 shadow-xs hover:shadow transition-all print-break-inside-avoid"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B86F58]">
                        <span>Qualification 0{idx + 1}</span>
                        {item.status && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#873C4D] font-bold">{item.status}</span>
                          </>
                        )}
                      </div>
                      
                      <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#873C4D]">
                        {item.degree}
                      </h3>
                      
                      <div className="text-sm sm:text-base font-medium text-[#292929]">
                        {item.institution}
                      </div>

                      {item.note && (
                        <p className="text-xs sm:text-sm text-[#292929]/70 pt-2 leading-relaxed">
                          {item.note}
                        </p>
                      )}
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#FAF7F0] text-[#873C4D] shrink-0 border border-[#E8DDCA]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Skills & Languages (5 cols) */}
          <div id="skills" className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Core Competencies from CV */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#873C4D] uppercase mb-2">
                <span>Section 04</span>
                <span aria-hidden="true">·</span>
                <span>Core Competencies</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#873C4D] tracking-tight mb-2">
                Skills & Expertise
              </h2>
              <p className="text-sm text-[#292929]/75 mb-6">
                Directly from the CV: authentic pillars of design pedagogy, sustainability, and educational leadership.
              </p>

              <div className="space-y-3">
                {cvData.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="p-4 bg-white border border-[#E8DDCA] rounded-xl hover:border-[#873C4D]/40 transition-colors shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-editorial text-lg font-bold text-[#873C4D]">
                        {skill.name}
                      </div>
                      <span className="text-xs text-[#B86F58] font-mono">
                        Pillar 0{index + 1}
                      </span>
                    </div>
                    <p className="text-xs text-[#292929]/75 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Listed in CV */}
            <div className="pt-4 border-t border-[#E8DDCA]">
              <div className="flex items-center gap-2 mb-3">
                <Languages className="w-4 h-4 text-[#873C4D]" />
                <h3 className="font-editorial text-xl font-bold text-[#873C4D]">
                  Languages
                </h3>
              </div>
              <p className="text-xs text-[#292929]/70 mb-4">
                Preserved from CV: multilingual communication supporting multi-state artisan engagement and higher education.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {cvData.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 bg-white border border-[#E8DDCA] rounded-lg shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-[#292929]">{lang.name}</div>
                      <span className="text-xs font-serif text-[#B86F58]">{lang.script}</span>
                    </div>
                    <div className="text-[11px] text-[#292929]/65 mt-1 truncate" title={lang.usage}>
                      {lang.usage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
