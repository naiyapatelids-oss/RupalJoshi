import React, { useState, useMemo } from 'react';
import { Award, Mic, Users, Landmark, Search, Sparkles } from 'lucide-react';
import { cvData, AchievementItem } from '../data/cvData';

export const AchievementsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredAchievements = useMemo(() => {
    return cvData.achievements.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.organization && item.organization.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.location && item.location.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="achievements" className="py-16 lg:py-20 border-b border-[#E8DDCA]/70 bg-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#873C4D] uppercase mb-2">
              <span>Section 05</span>
              <span aria-hidden="true">·</span>
              <span>Professional Contributions</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#873C4D] tracking-tight">
              Achievements & Appointments
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#292929]/75 max-w-2xl">
              Complete catalog of leadership appointments, keynote invitations, governance roles, examination boards, and jury panels.
            </p>
          </div>

          <div className="text-xs text-[#292929]/70 font-mono no-print">
            Total verified records: <span className="font-bold text-[#873C4D]">{cvData.achievements.length} entries</span>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 no-print">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E8DDCA] rounded-lg overflow-x-auto shadow-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              All ({cvData.achievements.length})
            </button>
            <button
              onClick={() => setSelectedCategory('leadership')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === 'leadership'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              Governance & Councils
            </button>
            <button
              onClick={() => setSelectedCategory('keynote')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === 'keynote'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              Keynotes & Speaking
            </button>
            <button
              onClick={() => setSelectedCategory('academic')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === 'academic'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              Academic & Examination
            </button>
            <button
              onClick={() => setSelectedCategory('industry')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === 'industry'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              Jury & Consulting
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search contributions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#E8DDCA] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#873C4D] text-[#292929]"
            />
          </div>
        </div>

        {/* Editorial List of Achievements */}
        <div className="bg-white border border-[#E8DDCA] rounded-xl divide-y divide-[#E8DDCA]/70 shadow-xs overflow-hidden">
          {filteredAchievements.map((item, index) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 hover:bg-[#FAF7F0]/60 transition-colors flex items-start gap-4 print-break-inside-avoid"
            >
              {/* Editorial Index Number */}
              <span className="font-mono text-xs text-[#B86F58] font-semibold mt-0.5 shrink-0 w-7">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Title & Metadata */}
              <div className="flex-1 space-y-1">
                <p className="text-sm sm:text-base font-medium text-[#292929] leading-snug">
                  {item.title}
                </p>

                <div className="flex items-center gap-2 text-xs text-[#292929]/60">
                  {item.organization && <span>{item.organization}</span>}
                  {item.location && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{item.location}</span>
                    </>
                  )}
                  {item.category && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize text-[#873C4D] font-medium">{item.category}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredAchievements.length === 0 && (
            <div className="p-8 text-center text-sm text-[#292929]/60">
              No contributions match your search filter.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
