import React from 'react';
import { FileText, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenPdfModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPdfModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'Profile', href: '#profile' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Awards', href: '#awards' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F8F5EE]/95 backdrop-blur-md border-b border-[#E8DDCA]/80 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#profile" 
            className="group flex flex-col text-[#292929] hover:text-[#873C4D] transition-colors whitespace-nowrap shrink-0"
          >
            <span className="font-editorial text-2xl sm:text-3xl font-semibold tracking-tight text-[#873C4D]">
              Rupal Joshi
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[#B86F58] font-medium hidden sm:inline-block">
              Fashion Design & Academic Portfolio
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#292929]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#873C4D] transition-colors relative py-1 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#873C4D] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={onOpenPdfModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#873C4D] bg-[#F8F5EE] border border-[#873C4D]/30 hover:border-[#873C4D] hover:bg-[#873C4D]/5 rounded-md transition-colors whitespace-nowrap shrink-0"
              title="View original 3-page uploaded CV"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Original PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#292929] hover:text-[#873C4D] rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#E8DDCA] bg-[#F8F5EE]">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-[#292929] hover:bg-[#E8DDCA]/50 hover:text-[#873C4D] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
