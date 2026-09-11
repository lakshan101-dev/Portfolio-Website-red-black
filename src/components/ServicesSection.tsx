import React from 'react';
import { Palette, FileText, Presentation, Layout, Layers, CheckCircle2, Award, Briefcase } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="w-full py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
            Services &amp; Core Expertise
          </h2>
          <p className="text-sm sm:text-base text-[#888888] mt-3 leading-relaxed">
            Combining creative visual craftsmanship with corporate documentation discipline to support companies, agencies, and event organizers globally.
          </p>
        </div>

        {/* Dual Pillar Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pillar 1: Graphic Design */}
          <div className="glass-panel glass-panel-hover p-8 sm:p-10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.12] flex items-center justify-center text-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.15)] mb-6">
                <Palette className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-[#FFFFFF] tracking-tight">
                Graphic Design &amp; Brand Systems
              </h3>
              <p className="text-sm text-[#888888] mt-2 leading-relaxed">
                Visual identities and commercial assets built to establish immediate credibility, market differentiation, and high customer conversion.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFFFFF]">Brand Identity &amp; Guidelines</h4>
                    <p className="text-xs text-[#888888] mt-0.5">Logo suites, typography systems, color architecture, and brand rulebooks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFFFFF]">Promotional &amp; Event Posters</h4>
                    <p className="text-xs text-[#888888] mt-0.5">Striking typography, festival posters, conference roll-ups, and print prepress files.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFFFFF]">Performance Ad Creatives &amp; Social Assets</h4>
                    <p className="text-xs text-[#888888] mt-0.5">High-CTR multi-variant digital ads, Instagram carousels, and display banners.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFFFFF]">Packaging &amp; Label Architecture</h4>
                    <p className="text-xs text-[#888888] mt-0.5">Retail product packaging, die-cut boxes, foil stamps, and label production files.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] text-xs text-[#888888] flex items-center gap-2">
              <span className="font-semibold text-[#FFFFFF]">Primary Software:</span>
              <span className="text-[#E50914]">Adobe Photoshop, Adobe Illustrator, Adobe InDesign</span>
            </div>
          </div>

          {/* Pillar 2: Office Support & Executive Documentation */}
          <div className="glass-panel glass-panel-hover p-8 sm:p-10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.12] flex items-center justify-center text-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.15)] mb-6">
                <Presentation className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-[#FFFFFF] tracking-tight">
                Office Support &amp; Documentation
              </h3>
              <p className="text-sm text-[#888888] mt-2 leading-relaxed">
                Elevating executive deliverables into immaculate, boardroom-ready presentations, financial reports, and structured operational tools.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFFFFF]">Executive C-Suite Presentations</h4>
                    <p className="text-xs text-[#888888] mt-0.5">Investor pitch decks, annual general meetings, and board-level PowerPoint templates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFFFFF]">Corporate Reports &amp; Publications</h4>
                    <p className="text-xs text-[#888888] mt-0.5">Multi-page annual reports, whitepapers, executive summaries, and interactive PDFs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFFFFF]">Spreadsheets &amp; Data Formatting</h4>
                    <p className="text-xs text-[#888888] mt-0.5">Excel data modeling, formatted financial schedules, and clear analytical charts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFFFFF]">Event &amp; Delegate Kits</h4>
                    <p className="text-xs text-[#888888] mt-0.5">Name badges, conference agendas, digital booklets, and attendee communications.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] text-xs text-[#888888] flex items-center gap-2">
              <span className="font-semibold text-[#FFFFFF]">Primary Software:</span>
              <span className="text-[#E50914]">Microsoft PowerPoint, Excel, Word, Office 365, Google Suite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
