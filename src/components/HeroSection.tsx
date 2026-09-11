import React from 'react';
import { ArrowDown, ArrowUpRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onContactClick,
}) => {
  return (
    <section id="hero" className="relative w-full pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.12] shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] mb-8 transition-all hover:bg-white/[0.08]">
          <span className="w-2 h-2 rounded-full bg-[#E50914] shadow-[0_0_10px_#E50914] animate-pulse" />
          <span className="text-xs font-semibold text-[#FFFFFF] tracking-wide">
            Available for Global Remote Roles &amp; Freelance Contracts
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFFFFF] tracking-tight leading-[1.15]">
            Crafting high-impact <span className="text-[#E50914] drop-shadow-[0_0_25px_rgba(229,9,20,0.4)]">visual identities</span>, promotional design &amp; corporate documentation.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#A3A3A3] leading-relaxed max-w-3xl">
            I am <strong className="text-[#FFFFFF]">Chamuditha Lakshan</strong>, a Graphic Designer and Office Support Specialist. I bridge creative visual storytelling with structured executive documentation—delivering print-ready posters, brand kits, ad suites, and high-stakes C-suite presentations.
          </p>
        </div>

        {/* Action Buttons & Contact Badges */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={onExploreWork}
            className="px-6 py-3.5 bg-[#E50914] hover:bg-[#ff1e27] active:scale-95 text-[#FFFFFF] font-semibold text-sm rounded-md transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(229,9,20,0.35)] hover:shadow-[0_8px_30px_rgba(229,9,20,0.55)] hover:-translate-y-0.5"
          >
            <span>View Selected Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={onContactClick}
            className="px-6 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 text-[#FFFFFF] border border-white/[0.12] hover:border-white/30 backdrop-blur-xl font-semibold text-sm rounded-md transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="hidden lg:flex items-center gap-6 ml-4 pl-6 border-l border-white/[0.1] text-xs text-[#888888]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#E50914]" />
              <a 
                href="mailto:chamudithalakshan264@gmail.com" 
                className="hover:text-[#FFFFFF] transition-colors"
              >
                chamudithalakshan264@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#E50914]" />
              <a 
                href="tel:+94769631658" 
                className="hover:text-[#FFFFFF] transition-colors"
              >
                +94 76 963 1658
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#888888]" />
              <span>Sri Lanka (Remote Worldwide)</span>
            </div>
          </div>
        </div>

        {/* Quick Highlights Strip - Glassmorphic Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/[0.08]">
          <div className="glass-panel glass-panel-hover p-5 rounded-lg">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF]">4+ Years</div>
            <div className="text-xs sm:text-sm text-[#888888] font-medium mt-1">Design Tenure</div>
          </div>
          <div className="glass-panel glass-panel-hover p-5 rounded-lg">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF]">150+</div>
            <div className="text-xs sm:text-sm text-[#888888] font-medium mt-1">Campaigns &amp; Posters</div>
          </div>
          <div className="glass-panel glass-panel-hover p-5 rounded-lg">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF]">98%</div>
            <div className="text-xs sm:text-sm text-[#888888] font-medium mt-1">Client Satisfaction</div>
          </div>
          <div className="glass-panel glass-panel-hover p-5 rounded-lg">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#E50914] drop-shadow-[0_0_12px_rgba(229,9,20,0.5)]">100%</div>
            <div className="text-xs sm:text-sm text-[#888888] font-medium mt-1">On-Time Remote Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};
