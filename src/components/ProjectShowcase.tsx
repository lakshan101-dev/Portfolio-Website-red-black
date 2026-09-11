import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Maximize2, X, SlidersHorizontal, Sparkles } from 'lucide-react';
import { DesignProject } from '../types';

interface ProjectShowcaseProps {
  projects: DesignProject[];
  onSelectProject: (project: DesignProject) => void;
}

const CATEGORIES = [
  'All Work',
  'Brand Identity',
  'Layout & Typography',
  'Ad Creative',
  'Office Support & Presentation',
];

const POPULAR_TOOLS = [
  'Photoshop',
  'Illustrator',
  'InDesign',
  'Microsoft Office 365',
  'PowerPoint',
  'Excel',
];

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All Work');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All Work' ||
        project.coreCategory.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        project.softwareTools.toLowerCase().includes(query) ||
        project.designName.toLowerCase().includes(query) ||
        (project.description && project.description.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="work" className="w-full py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]" />
              <span>Portfolio Index</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-[#888888] mt-2 max-w-2xl">
              A curated collection of graphic design assets, brand identity kits, promotional print posters, and corporate office documentation.
            </p>
          </div>

          <div className="text-sm text-[#888888]">
            Showing <strong className="text-[#FFFFFF]">{filteredProjects.length}</strong> of {projects.length} deliverables
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs with Glass Capsule Effects */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 cursor-pointer ${
                    active
                      ? 'bg-[#E50914] text-[#FFFFFF] shadow-[0_4px_16px_rgba(229,9,20,0.4)] font-semibold'
                      : 'bg-white/[0.04] text-[#888888] hover:text-[#FFFFFF] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 backdrop-blur-md'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Software Search with Frosted Glass Input */}
          <div className="relative min-w-[280px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by software tool (Photoshop, InDesign...)"
              className="w-full bg-white/[0.04] backdrop-blur-xl text-[#FFFFFF] placeholder-[#666666] text-xs sm:text-sm border border-white/[0.1] focus:border-[#E50914] focus:bg-white/[0.07] rounded-md py-2.5 pl-3.5 pr-10 outline-none transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#FFFFFF] cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <Search className="w-4 h-4 text-[#666666] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            )}
          </div>
        </div>

        {/* Quick Tool Tags */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#888888]">
          <span className="font-medium">Filter by tool:</span>
          {POPULAR_TOOLS.map((tool) => {
            const isSelected = searchQuery.toLowerCase().includes(tool.toLowerCase());
            return (
              <button
                key={tool}
                onClick={() => setSearchQuery(isSelected ? '' : tool)}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#E50914] text-white border-[#E50914] font-medium shadow-[0_0_12px_rgba(229,9,20,0.4)]'
                    : 'bg-white/[0.03] text-[#888888] hover:text-white border-white/[0.08] hover:border-white/20'
                }`}
              >
                {tool}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center glass-panel rounded-lg mt-10">
            <h3 className="text-lg font-bold text-[#FFFFFF]">No projects match your criteria</h3>
            <p className="text-sm text-[#888888] mt-1">Try resetting the category filter or search query.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Work');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#E50914] hover:bg-[#ff1e27] text-white text-xs font-semibold rounded transition-all shadow-md cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group glass-panel glass-panel-hover rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0A]">
                  <img
                    src={project.thumbnailImageUrl}
                    alt={project.designName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
                  
                  {/* Category Chip in corner */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/[0.12] text-xs font-medium text-[#FFFFFF] px-2.5 py-1 rounded">
                    {project.coreCategory}
                  </div>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-[#E50914] text-[#FFFFFF] text-xs font-semibold rounded flex items-center gap-1.5 shadow-[0_4px_16px_rgba(229,9,20,0.5)]">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Project Details</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#E50914] transition-colors leading-snug">
                      {project.designName}
                    </h3>

                    {/* Software Tools */}
                    <div className="mt-2 text-xs font-semibold text-[#E50914] flex items-center gap-1.5">
                      <span className="text-[#888888] font-normal">Tools:</span>
                      <span>{project.softwareTools}</span>
                    </div>

                    {/* Impact Metric */}
                    <div className="mt-2.5 text-xs text-[#A3A3A3] leading-relaxed flex items-start gap-1.5">
                      <span className="text-[#E50914] font-bold">›</span>
                      <span>{project.impactMetric}</span>
                    </div>
                  </div>

                  {/* Card Bottom Links */}
                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                    <span className="text-[#888888]">
                      {project.dimensions || 'Vector Master Kit'}
                    </span>
                    <a
                      href={project.liveReviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[#FFFFFF] hover:text-[#E50914] font-semibold transition-colors group/link"
                    >
                      <span>Live Review</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#E50914] group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
