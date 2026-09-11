import React, { useEffect, useRef } from 'react';

export interface VideoConfig {
  url: string;
  name: string;
  mediaType?: 'video' | 'gif' | 'image' | 'auto';
  overlayOpacity: number; // 0.35 to 0.95
  blurAmount: number;     // 0 to 30 px
  playbackRate: number;
}

export const isAnimatedImageOrGif = (url: string, mediaType?: string): boolean => {
  if (mediaType === 'gif' || mediaType === 'image') return true;
  if (mediaType === 'video') return false;
  const lower = url.toLowerCase();
  return (
    lower.endsWith('.gif') ||
    lower.includes('.gif?') ||
    lower.includes('image/gif') ||
    lower.endsWith('.webp') ||
    lower.endsWith('.png') ||
    lower.endsWith('.jpg') ||
    lower.endsWith('.jpeg') ||
    url.startsWith('data:image/')
  );
};

export const PRESET_VIDEOS: { id: string; name: string; description: string; url: string; type: 'video' | 'gif' }[] = [
  {
    id: 'abstract-red-dark',
    name: 'Dark Red Smoke & Glow',
    description: 'Subtle deep crimson ambient smoke on charcoal background',
    url: 'https://cdn.pixabay.com/video/2020/04/17/36466-410091008_large.mp4',
    type: 'video',
  },
  {
    id: 'deep-particles',
    name: 'Floating Ambient Embers',
    description: 'Minimal slow-drifting red particles in deep space',
    url: 'https://cdn.pixabay.com/video/2019/11/04/28713-371688941_large.mp4',
    type: 'video',
  },
  {
    id: 'abstract-crimson-wave',
    name: 'Crimson Pulse Waves (GIF)',
    description: 'Minimalist pulsing red-black rhythmic scanline loop',
    url: 'https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif',
    type: 'gif',
  },
  {
    id: 'cyber-grid',
    name: 'Monochrome Dark Waves',
    description: 'Deep undulating monochrome waves with high text contrast',
    url: 'https://cdn.pixabay.com/video/2021/08/13/84970-588320499_large.mp4',
    type: 'video',
  },
];

interface VideoBackgroundProps {
  videoConfig: VideoConfig;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoConfig,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isGif = isAnimatedImageOrGif(videoConfig.url, videoConfig.mediaType);

  useEffect(() => {
    if (!isGif && videoRef.current) {
      videoRef.current.playbackRate = videoConfig.playbackRate || 0.85;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [videoConfig.url, videoConfig.playbackRate, isGif]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#060608]">
      {/* 1. Animated Visual Layer (GIF image or Video) */}
      {videoConfig.url ? (
        isGif ? (
          <img
            key={videoConfig.url}
            src={videoConfig.url}
            alt="Background Animation"
            className="absolute inset-0 w-full h-full object-cover select-none"
            style={{
              filter: `blur(${videoConfig.blurAmount}px) brightness(0.85) contrast(1.1)`,
              transform: videoConfig.blurAmount > 0 ? 'scale(1.05)' : 'scale(1)',
              willChange: 'transform, filter',
            }}
          />
        ) : (
          <video
            ref={videoRef}
            key={videoConfig.url}
            src={videoConfig.url}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: `blur(${videoConfig.blurAmount}px) brightness(0.85) contrast(1.1)`,
              transform: videoConfig.blurAmount > 0 ? 'scale(1.05)' : 'scale(1)',
              willChange: 'transform, filter',
            }}
          />
        )
      ) : (
        /* Sleek fallback placeholder when no background media is loaded */
        <div className="absolute inset-0 bg-gradient-to-br from-[#120203] via-[#070708] to-[#000000]" />
      )}

      {/* 2. Glassmorphism Tint / Dark Dimmer Overlay (Guarantees text readability) */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundColor: `rgba(6, 6, 8, ${videoConfig.overlayOpacity})`,
          backdropFilter: `blur(${Math.max(videoConfig.blurAmount, 6)}px)`,
          WebkitBackdropFilter: `blur(${Math.max(videoConfig.blurAmount, 6)}px)`,
        }}
      />

      {/* 3. Subtle Glass Specular Sheen & Light Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/60 pointer-events-none" />

      {/* 4. Fine Glass Micro Texture for authentic frosted feel */}
      <div
        className="absolute inset-0 opacity-[0.25] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* 5. Edge Vignette to keep viewport focus on central content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.6)_100%)] pointer-events-none" />
    </div>
  );
};
