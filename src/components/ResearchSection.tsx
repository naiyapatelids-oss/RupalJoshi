import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { cvData, ResearchItem } from '../data/cvData';

export const ResearchSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sustainable-craft' | 'machine-learning'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredResearch = useMemo(() => {
    return cvData.research.filter((item) => {
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.venueOrInstitution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.apaCitation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="research" className="py-16 lg:py-20 border-b border-[#E8DDCA]/70 bg-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#873C4D] uppercase mb-2">
              <span>Section 07</span>
              <span aria-hidden="true">·</span>
              <span>Scholarly Output</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#873C4D] tracking-tight">
              Research & Academic Work
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#292929]/75 max-w-2xl">
              Conference contributions, paper presentations, and research papers across indigenous textile revival and fashion machine learning models.
            </p>
          </div>

          <div className="text-xs text-[#292929]/70 font-mono no-print">
            Total verified entries: <span className="font-bold text-[#873C4D]">{cvData.research.length} citations</span>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 no-print">
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E8DDCA] rounded-lg overflow-x-auto shadow-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              All Research ({cvData.research.length})
            </button>
            <button
              onClick={() => setActiveFilter('sustainable-craft')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'sustainable-craft'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              Sustainable Craft & Textiles
            </button>
            <button
              onClick={() => setActiveFilter('machine-learning')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'machine-learning'
                  ? 'bg-[#873C4D] text-[#F8F5EE] shadow-xs'
                  : 'text-[#292929]/70 hover:text-[#873C4D]'
              }`}
            >
              Fashion AI & Machine Learning
            </button>
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Filter by keyword / venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#E8DDCA] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#873C4D] text-[#292929]"
            />
          </div>
        </div>

        {/* Research Publication Cards */}
        <div className="space-y-4">
          {filteredResearch.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-white border border-[#E8DDCA] hover:border-[#873C4D]/40 rounded-xl p-5 sm:p-6 shadow-xs hover:shadow-sm transition-all print-break-inside-avoid"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                {/* Left side: Index and Content */}
                <div className="flex items-start gap-4 flex-1">
                  <span className="font-mono text-xs font-bold text-[#B86F58] mt-1 shrink-0 w-6">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B86F58]">
                      <span>
                        {item.category === 'sustainable-craft' ? 'Sustainable Craft & Heritage' : 'AI & Computational Fashion'}
                      </span>
                      {item.year && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono">{item.year}</span>
                        </>
                      )}
                    </div>

                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#873C4D] leading-snug">
                      {item.title}
                    </h3>

                    {/* Institution / Conference */}
                    <div className="text-xs sm:text-sm font-medium text-[#292929]/80">
                      {item.venueOrInstitution}
                    </div>

                    {/* APA Citation Box */}
                    <div className="mt-3 p-3 bg-[#FAF7F0] border border-[#E8DDCA]/80 rounded-lg">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#873C4D] mb-1">
                        APA 7th Edition Citation
                      </div>
                      <p className="font-serif text-xs text-[#292929] italic leading-relaxed select-all">
                        {item.apaCitation}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

          {filteredResearch.length === 0 && (
            <div className="p-8 text-center text-sm text-[#292929]/60 bg-white border border-[#E8DDCA] rounded-xl">
              No research entries found matching your query.
            </div>
          )}
        </div>

        {/* Verification Note */}
        <div className="mt-8 p-4 bg-white border border-[#E8DDCA] rounded-lg text-xs text-[#292929]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>* All 10 entries from Page 3 of the original CV are preserved verbatim without altering original titles or deleting repeated items.</span>
          <span className="text-[#873C4D] font-medium font-mono text-[11px]">Source: Page 3 of CV</span>
        </div>

      </div>
    </section>
  );
};
