import React from 'react';
import { Award, Trophy, Sparkles } from 'lucide-react';
import { cvData } from '../data/cvData';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-16 lg:py-20 border-b border-[#E8DDCA]/70 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#873C4D] uppercase mb-2">
            <span>Section 06</span>
            <span aria-hidden="true">·</span>
            <span>Honors & Commendations</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#873C4D] tracking-tight">
            Awards & Recognition
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#292929]/75 leading-relaxed">
            Distinguished commendations honoring sustainable leadership, keynote excellence, and green institutional stewardship.
          </p>
        </div>

        {/* Distinctive Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvData.awards.map((award, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={award.id}
                className={`relative bg-white border rounded-xl p-6 transition-all print-break-inside-avoid flex flex-col justify-between ${
                  isFeatured
                    ? 'border-[#873C4D] shadow-md md:col-span-2 lg:col-span-1 bg-gradient-to-br from-white to-[#FAF7F0]'
                    : 'border-[#E8DDCA] hover:border-[#873C4D]/40 shadow-xs hover:shadow'
                }`}
              >
                {/* Decorative Corner Marker */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-[#FAF7F0] text-[#873C4D] border border-[#E8DDCA]">
                    <Award className="w-5 h-5" />
                  </div>
                  
                  {award.year ? (
                    <span className="font-mono text-xs font-bold text-[#B86F58] bg-[#FAF7F0] px-2 py-0.5 rounded border border-[#E8DDCA]">
                      {award.year}
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-[#292929]/50 italic">
                      Special Commendation
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#873C4D] leading-snug">
                    {award.title}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-[#292929]/90">
                    {award.awardingBody}
                  </div>

                  {award.details && (
                    <p className="text-xs text-[#292929]/70 leading-relaxed pt-1">
                      {award.details}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-[#E8DDCA]/60 flex items-center justify-between text-[11px] text-[#292929]/60 font-mono">
                  <span>Award Record 0{index + 1}</span>
                  <span className="text-[#873C4D]">Verified CV entry</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
