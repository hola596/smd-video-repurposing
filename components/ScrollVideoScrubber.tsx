'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Play, Pause, RotateCcw, Sparkles } from 'lucide-react';

interface ScrollVideoScrubberProps {
  videoSrc?: string;
  fallbackSrc?: string;
}

export default function ScrollVideoScrubber({
  videoSrc = '/videos/video-scroll-3d.mp4',
  fallbackSrc = '/video portada/video portada para scroll 3D.mp4',
}: ScrollVideoScrubberProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlayingManual, setIsPlayingManual] = useState(false);
  const [hasMobileTouch, setHasMobileTouch] = useState(false);

  // Detect mobile or touch device to handle battery-saver / restricted seek
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setHasMobileTouch(isTouch);
    }
  }, []);

  // Update video currentTime based on scroll position using requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    let targetTime = 0;
    let isSeeking = false;

    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current || isPlayingManual) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the container
      // Progress starts when top of container reaches 30% of viewport and completes when bottom reaches 80%
      const totalScrollable = rect.height - windowHeight * 0.5;
      const currentScroll = -rect.top + windowHeight * 0.2;
      
      let progress = currentScroll / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      const duration = videoRef.current.duration;
      if (!isNaN(duration) && duration > 0) {
        targetTime = progress * duration;
      }
    };

    const updateVideoFrame = () => {
      const video = videoRef.current;
      if (video && !isPlayingManual && !isNaN(video.duration) && video.duration > 0) {
        // Smooth interpolation for silky 60fps scrubbing
        const diff = targetTime - video.currentTime;
        if (Math.abs(diff) > 0.03 && !isSeeking) {
          isSeeking = true;
          video.currentTime = video.currentTime + diff * 0.35;
        } else {
          isSeeking = false;
        }
      }
      animationFrameId = requestAnimationFrame(updateVideoFrame);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateVideoFrame);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlayingManual]);

  const toggleManualPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlayingManual) {
      video.pause();
      setIsPlayingManual(false);
    } else {
      video
        .play()
        .then(() => setIsPlayingManual(true))
        .catch(() => setIsPlayingManual(false));
    }
  }, [isPlayingManual]);

  const resetVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    if (!isPlayingManual) {
      setScrollProgress(0);
    }
  }, [isPlayingManual]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[140vh] md:min-h-[170vh]"
    >
      {/* Sticky presentation viewport */}
      <div className="sticky top-24 z-10 w-full flex flex-col items-center justify-center py-6">
        <div className="w-full max-w-[960px] mx-auto px-4">
          <div className="relative group rounded-card overflow-hidden border border-graphite bg-onyx shadow-2xl transition-all duration-300 hover:border-slate">
            
            {/* Top Bar with Status and Controls */}
            <div className="px-4 py-2.5 bg-carbon/80 backdrop-blur-sm border-b border-graphite flex items-center justify-between text-xs text-fog">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-copper"></span>
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-bone">
                  3D Render Engine / Interactive Scrubber
                </span>
              </div>

              {/* Scrubber progress indicator */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-fog hidden sm:inline">
                  Scroll: {Math.round(scrollProgress * 100)}%
                </span>
                
                {/* Manual control buttons */}
                <button
                  type="button"
                  onClick={toggleManualPlay}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-pill bg-graphite/60 hover:bg-slate text-bone transition-colors text-[11px]"
                  title={isPlayingManual ? "Pausar" : "Reproducir Continuo"}
                  aria-label={isPlayingManual ? "Pausar video" : "Reproducir video automáticamente"}
                >
                  {isPlayingManual ? (
                    <>
                      <Pause className="w-3 h-3 text-copper" />
                      <span>Pausar</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-paper-white" />
                      <span>Auto</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={resetVideo}
                  className="p-1 rounded-full text-fog hover:text-paper-white transition-colors"
                  title="Reiniciar video"
                  aria-label="Reiniciar video"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Video Canvas Container */}
            <div className="relative aspect-video w-full bg-obsidian flex items-center justify-center">
              <video
                ref={videoRef}
                playsInline
                muted
                preload="auto"
                loop={isPlayingManual}
                onLoadedMetadata={() => setIsVideoReady(true)}
                className="w-full h-full object-cover select-none pointer-events-none"
              >
                <source src={videoSrc} type="video/mp4" />
                <source src={fallbackSrc} type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>

              {/* Progress bar line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-graphite/50">
                <div
                  className="h-full bg-gradient-to-r from-copper to-bone transition-all duration-75"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>

              {/* Subtle hover prompt overlay */}
              {!isPlayingManual && (
                <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-pill bg-obsidian/80 border border-graphite text-[11px] text-fog backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-copper" />
                  <span>Desplaza la página hacia abajo para animar</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
