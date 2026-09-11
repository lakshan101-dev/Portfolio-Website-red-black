import React from 'react';
import { Award, Clock, Users2, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const METRICS: MetricItem[] = [
  {
    value: '4+ Years',
    label: 'Freelance Design Tenure',
    description: 'Consistent commercial experience supporting international agencies and remote businesses.',
    icon: Clock,
  },
  {
    value: '150+',
    label: 'Promotional Posters Executed',
    description: 'Delivered for music festivals, cultural events, corporate conferences, and product launches.',
    icon: Award,
  },
  {
    value: '98%',
    label: 'Client Satisfaction Rate',
    description: 'High retention and recurring contract partnerships with global founders and hiring managers.',
    icon: Users2,
  },
  {
    value: '100%',
    label: 'On-Time Remote Delivery',
    description: 'Rigorous adherence to production deadlines, file specs, and executive turnarounds.',
    icon: ShieldCheck,
  },
];

export const MetricsSection: React.FC = () => {
  return (
    <section id="metrics" className="w-full py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]" />
              <span>Proven Performance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
              Track Record &amp; Impact
            </h2>
            <p className="text-sm sm:text-base text-[#888888] mt-2 max-w-2xl">
              Delivering quantifiable value through meticulous visual standards, responsive communication, and rapid turnaround times.
            </p>
          </div>
        </div>

        {/* 4-Metric Grid with Glassmorphic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-7 rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#888888] tracking-widest">0{idx + 1}</span>
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] group-hover:border-[#E50914]/40 transition-colors">
                      <Icon className="w-5 h-5 text-[#888888] group-hover:text-[#E50914] transition-colors" />
                    </div>
                  </div>

                  <div className="text-4xl font-extrabold text-[#FFFFFF] tracking-tight group-hover:text-white transition-colors">
                    {metric.value}
                  </div>

                  <div className="text-sm font-bold text-[#FFFFFF] mt-2">
                    {metric.label}
                  </div>

                  <p className="text-xs text-[#888888] leading-relaxed mt-2.5">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-1.5 text-[11px] text-[#888888]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_6px_#E50914]" />
                  <span>Verified Client Portfolio Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
