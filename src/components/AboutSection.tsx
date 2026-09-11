import React from 'react';
import { UserCheck, CheckCircle2, Sparkles, Laptop, Shield, HeartHandshake } from 'lucide-react';

const TOOLS = [
  { name: 'Adobe Photoshop', category: 'Graphic Design' },
  { name: 'Adobe Illustrator', category: 'Vector & Branding' },
  { name: 'Adobe InDesign', category: 'Editorial & Print' },
  { name: 'Microsoft PowerPoint', category: 'Executive Decks' },
  { name: 'Microsoft Excel', category: 'Data & Charts' },
  { name: 'Microsoft Word', category: 'Documentation' },
  { name: 'Microsoft Office 365', category: 'Cloud Collaboration' },
  { name: 'Google Workspace', category: 'Office Suite' },
];

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="w-full py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Positioning */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]" />
              <span>Professional Profile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
              Design Excellence Backed by Organizational Precision
            </h2>
            <p className="text-base text-[#A3A3A3] mt-5 leading-relaxed">
              I am <strong className="text-[#FFFFFF]">Chamuditha Lakshan</strong>, an experienced Graphic Designer and Office Support Specialist based in Sri Lanka, working seamlessly with global clients across US, European, and Asian time zones.
            </p>
            <p className="text-sm sm:text-base text-[#888888] mt-4 leading-relaxed">
              My strength lies at the intersection of creative artistry and business execution. While many designers focus solely on aesthetics, I bring strict typography rules, print production know-how, and sharp corporate office proficiency—ensuring executive presentations, investor pitches, and marketing collateral are delivered on time, perfectly formatted, and ready to publish.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 glass-panel glass-panel-hover rounded-xl">
                <div className="flex items-center gap-2 text-sm font-bold text-[#FFFFFF]">
                  <Laptop className="w-4 h-4 text-[#E50914]" />
                  <span>Remote Collaboration</span>
                </div>
                <p className="text-xs text-[#888888] mt-1.5">
                  Proficient with Slack, Zoom, Google Meet, Asana, and cloud asset handoffs.
                </p>
              </div>

              <div className="p-5 glass-panel glass-panel-hover rounded-xl">
                <div className="flex items-center gap-2 text-sm font-bold text-[#FFFFFF]">
                  <Shield className="w-4 h-4 text-[#E50914]" />
                  <span>Commercial Reliability</span>
                </div>
                <p className="text-xs text-[#888888] mt-1.5">
                  Over 4 years of proven deadline management and confidential data handling.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Toolkit Stack with Frosted Glass Container */}
          <div className="lg:col-span-5 glass-panel p-8 sm:p-10 rounded-2xl">
            <h3 className="text-lg font-bold text-[#FFFFFF] tracking-tight mb-2">
              Primary Toolkit &amp; Software
            </h3>
            <p className="text-xs text-[#888888] mb-6">
              Core technologies utilized daily for design execution and administrative deliverables:
            </p>

            <div className="space-y-3">
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:border-[#E50914]/50 hover:bg-white/[0.06] transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_6px_#E50914]" />
                    <span className="text-sm font-medium text-[#FFFFFF]">{tool.name}</span>
                  </div>
                  <span className="text-xs text-[#888888] bg-black/60 px-2 py-0.5 rounded border border-white/[0.08]">
                    {tool.category}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.08] text-center">
              <button
                onClick={onContactClick}
                className="text-xs font-semibold text-[#E50914] hover:text-[#FFFFFF] transition-colors inline-flex items-center gap-1 cursor-pointer group"
              >
                <span>Discuss a project or hire Chamuditha</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
