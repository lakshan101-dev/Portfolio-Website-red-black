import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { DesignProject } from '../types';

interface ProjectModalProps {
  project: DesignProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset the slider whenever a different project is opened
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  // Use the gallery if available.
  // Otherwise, fall back to the thumbnail.
  const projectImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.thumbnailImageUrl];

  const currentImage = projectImages[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((current) =>
      current === projectImages.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((current) =>
      current === 0 ? projectImages.length - 1 : current - 1
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#141416]/85 backdrop-blur-2xl border border-white/[0.12] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(229,9,20,0.2)] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-black/60 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#E50914] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.1] shadow-xs">
              {project.coreCategory}
            </span>

            <span className="text-xs text-[#888888]">
              Project Details
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#888888] hover:text-[#FFFFFF] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-md transition-all cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex flex-col lg:flex-row gap-8">

          {/* Visual Asset Showcase */}
          <div className="lg:w-7/12 flex flex-col bg-black/60 border border-white/[0.08] rounded-xl overflow-hidden">

            {/* Main Image */}
            <div className="relative flex items-center justify-center overflow-hidden bg-black/90 max-h-[480px] min-h-[300px]">

              <img
                src={currentImage}
                alt={`${project.designName} - Image ${currentImageIndex + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[480px] object-contain"
              />

              {/* Previous Button */}
              {projectImages.length > 1 && (
                <button
                  onClick={previousImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 border border-white/[0.15] text-white hover:bg-[#E50914] transition-all"
                  title="Previous image"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* Next Button */}
              {projectImages.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 border border-white/[0.15] text-white hover:bg-[#E50914] transition-all"
                  title="Next image"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}

              {/* Image Counter */}
              {projectImages.length > 1 && (
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 border border-white/[0.1] text-[11px] text-white">
                  {currentImageIndex + 1} / {projectImages.length}
                </div>
              )}
            </div>

            {/* Slider Dots */}
            {projectImages.length > 1 && (
              <div className="flex items-center justify-center gap-1.5 px-4 py-3 bg-black/70 border-t border-white/[0.08]">
                {projectImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'w-6 bg-[#E50914]'
                        : 'w-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                    title={`View image ${index + 1}`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Asset Footer */}
            <div className="p-3 bg-black/60 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#888888]">
              <span>
                Specs: {project.dimensions || 'Vector Master Kit'}
              </span>

              <a
                href={currentImage}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFFFF] text-[#E50914] font-medium flex items-center gap-1 transition-colors"
              >
                <span>Open Full Asset</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Project Details & Metadata */}
          <div className="lg:w-5/12 flex flex-col justify-between gap-6">
            <div className="space-y-5">

              <div>
                <h3 className="text-2xl font-bold text-[#FFFFFF] tracking-tight leading-snug">
                  {project.designName}
                </h3>
              </div>

              {project.description && (
                <div className="p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                  <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                    Design Scope &amp; Brief
                  </span>

                  <p className="text-sm text-[#A3A3A3] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              )}

              <div className="border-t border-white/[0.08] pt-4">
                <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                  Software Tools Used
                </span>

                <div className="text-sm font-semibold text-[#E50914]">
                  {project.softwareTools}
                </div>
              </div>

              <div className="border-t border-white/[0.08] pt-4">
                <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                  Deliverable Impact
                </span>

                <div className="text-sm text-[#A3A3A3] flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />

                  <span>{project.impactMetric}</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="border-t border-white/[0.08] pt-5">
              <a
                href={project.liveReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#E50914] hover:bg-[#ff1e27] text-[#FFFFFF] text-sm font-semibold rounded-md transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(229,9,20,0.35)]"
              >
                <span>Review High-Resolution Files</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-[#888888] mt-2">
                External destination: Google Drive / Behance Portfolio Link
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};