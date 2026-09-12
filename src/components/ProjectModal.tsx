import React, { useEffect, useState } from 'react';
import {
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
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
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Reset the slider whenever a different project is opened
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsFullScreen(false);
  }, [project?.id]);

  if (!project) return null;

  // Use the gallery if available.
  // Otherwise, fall back to the thumbnail.
  const projectImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.thumbnailImageUrl];

  const imageTitles =
    project.imageTitles && project.imageTitles.length === projectImages.length
      ? project.imageTitles
      : projectImages.map((_, index) => `${project.designName} — Image ${index + 1}`);

  const currentImage = projectImages[currentImageIndex];
  const currentTitle = imageTitles[currentImageIndex];

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
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#141416]/85 backdrop-blur-2xl border border-white/[0.12] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(229,9,20,0.2)] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-black/60 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#E50914] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.1] shadow-xs">
              {project.coreCategory}
            </span>

            <span className="text-sm text-[#FFFFFF] font-medium truncate max-w-[240px] sm:max-w-none">
              {currentTitle}
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
        <div className="overflow-y-auto p-6 sm:p-8">

          {/* Visual Asset Showcase */}
          <div className="flex flex-col bg-black/60 border border-white/[0.08] rounded-xl overflow-hidden">

            {/* Main Image */}
            <div className="relative flex items-center justify-center overflow-hidden bg-black/90 max-h-[600px] min-h-[320px]">

              <img
                src={currentImage}
                alt={currentTitle}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[600px] object-contain cursor-zoom-in"
                onClick={() => setIsFullScreen(true)}
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

              {/* Full-Screen Trigger */}
              <button
                onClick={() => setIsFullScreen(true)}
                className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 border border-white/[0.15] text-white hover:bg-[#E50914] transition-all"
                title="View full size"
                aria-label="View full size"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

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
                    title={imageTitles[index]}
                    aria-label={`View: ${imageTitles[index]}`}
                  />
                ))}
              </div>
            )}

            {/* Asset Footer */}
            <div className="p-3 bg-black/60 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#888888]">
              <span className="truncate">{currentTitle}</span>

              <a
                href={currentImage}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFFFF] text-[#E50914] font-medium flex items-center gap-1 transition-colors flex-shrink-0 ml-3"
              >
                <span>Open Full Size</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Size Viewer */}
      {isFullScreen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setIsFullScreen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFullScreen(false);
            }}
            className="absolute top-4 right-4 p-2 text-[#888888] hover:text-[#FFFFFF] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-md transition-all cursor-pointer"
            title="Close"
            aria-label="Close full-size viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {projectImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/70 border border-white/[0.15] text-white hover:bg-[#E50914] transition-all"
              title="Previous image"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <img
            src={currentImage}
            alt={currentTitle}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {projectImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/70 border border-white/[0.15] text-white hover:bg-[#E50914] transition-all"
              title="Next image"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-md bg-black/70 border border-white/[0.1] text-xs text-white">
            {currentTitle}
          </div>
        </div>
      )}
    </div>
  );
};
