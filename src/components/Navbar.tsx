import React, { useState } from 'react';
import { Mail, Phone, Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-black/45 backdrop-blur-xl border-b border-white/[0.12] shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex flex-col text-left group cursor-pointer transition-transform duration-200 active:scale-95"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#FFFFFF] group-hover:text-[#E50914] transition-colors">
              CHAMUDITHA LAKSHAN
            </span>
            <span className="w-2 h-2 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]" />
          </div>
          <span className="text-xs text-[#888888] font-medium tracking-wide group-hover:text-[#A3A3A3] transition-colors">
            Graphic Design &amp; Office Support Specialist
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => handleNavClick('work')}
            className="text-[#A3A3A3] hover:text-[#FFFFFF] transition-all cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E50914] hover:after:w-full after:transition-all after:duration-300"
          >
            Selected Work
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="text-[#A3A3A3] hover:text-[#FFFFFF] transition-all cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E50914] hover:after:w-full after:transition-all after:duration-300"
          >
            Services &amp; Expertise
          </button>
          <button
            onClick={() => handleNavClick('metrics')}
            className="text-[#A3A3A3] hover:text-[#FFFFFF] transition-all cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E50914] hover:after:w-full after:transition-all after:duration-300"
          >
            Track Record
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="text-[#A3A3A3] hover:text-[#FFFFFF] transition-all cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E50914] hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-[#A3A3A3] hover:text-[#FFFFFF] transition-all cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E50914] hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </button>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2.5 bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-white/[0.12] text-[#A3A3A3] hover:text-[#FFFFFF] rounded-md transition-all cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          <a
            href="mailto:chamudithalakshan264@gmail.com"
            className="px-5 py-2.5 bg-[#E50914] hover:bg-[#ff1e27] active:scale-95 text-[#FFFFFF] text-sm font-semibold rounded-md transition-all shadow-[0_4px_16px_rgba(229,9,20,0.35)] hover:shadow-[0_6px_24px_rgba(229,9,20,0.5)] flex items-center gap-2"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Theme + Menu Buttons */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 text-[#A3A3A3] hover:text-[#FFFFFF] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] rounded-md transition-all"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#A3A3A3] hover:text-[#FFFFFF] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141414]/90 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-5 flex flex-col gap-4 text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavClick('work')}
            className="text-left text-[#A3A3A3] hover:text-[#FFFFFF] py-2"
          >
            Selected Work
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="text-left text-[#A3A3A3] hover:text-[#FFFFFF] py-2"
          >
            Services &amp; Expertise
          </button>
          <button
            onClick={() => handleNavClick('metrics')}
            className="text-left text-[#A3A3A3] hover:text-[#FFFFFF] py-2"
          >
            Track Record
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="text-left text-[#A3A3A3] hover:text-[#FFFFFF] py-2"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-left text-[#A3A3A3] hover:text-[#FFFFFF] py-2"
          >
            Contact
          </button>
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <a
              href="mailto:chamudithalakshan264@gmail.com"
              className="w-full py-2.5 bg-[#E50914] text-[#FFFFFF] text-center font-semibold rounded-md shadow-md"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
