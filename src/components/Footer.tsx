import React from 'react';
import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-black/60 backdrop-blur-2xl border-t border-white/[0.08] py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.08]">
          {/* Brand & Subtext */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-[#FFFFFF] tracking-tight">
                CHAMUDITHA LAKSHAN
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]" />
            </div>
            <p className="text-sm text-[#888888] mt-1 max-w-md">
              Graphic Design &amp; Office Support Specialist. Delivering visual excellence and corporate documentation for global clients.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#888888]">
            <button
              onClick={() => onNavigate('work')}
              className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              Selected Work
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('metrics')}
              className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              Track Record
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => onNavigate('hero')}
            className="p-3 bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-[#888888] hover:text-[#FFFFFF] border border-white/[0.1] rounded-md transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#E50914]" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
          <div>
            © {new Date().getFullYear()} Chamuditha Lakshan. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:chamudithalakshan264@gmail.com"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              chamudithalakshan264@gmail.com
            </a>
            <span>•</span>
            <a
              href="tel:+94769631658"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              +94 76 963 1658
            </a>
            <span>•</span>
            <span>Sri Lanka (Remote Worldwide)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
