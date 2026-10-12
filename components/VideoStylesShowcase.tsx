'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Layers,
  Zap,
  TrendingUp,
  Eye,
  Sliders,
  CheckCircle2,
  Film,
  Crown,
  Flame,
  ArrowRight
} from 'lucide-react';

interface FormatStyle {
  id: string;
  name: string;
  tag: string;
  startTime: number;
  description: string;
  targetPlatform: string;
  retentionScore: string;
  highlights: string[];
}

const FORMAT_STYLES: FormatStyle[] = [
  {
    id: 'hormozi',
    name: 'Estilo Dinámico & Alta Retención',
    tag: 'Reels & TikTok Virales',
    startTime: 0,
    description:
      'Subtítulos palabra por palabra con colores contrastantes, emojis animados, cortes de ritmo rápido cada 2.5s y zooms de impacto.',
    targetPlatform: 'Instagram Reels • TikTok • Shorts',
    retentionScore: '94% retención promedio',
    highlights: ['Subtitulado guiado visual', 'Zooms de énfasis punch-in', 'Efectos de sonido táctiles'],
  },
  {
    id: 'dark-luxury',
    name: 'Minimalista & Dark Luxury',
    tag: 'CEOs & Marcas High-Ticket',
    startTime: 15,
    description:
      'Tipografía editorial limpia, espaciados generosos, estética monocromática sobria y transiciones orgánicas que transmiten autoridad y estatus.',
    targetPlatform: 'LinkedIn Video • Marcas Personales B2B',
    retentionScore: '89% retención ejecutiva',
    highlights: ['Tipografía serif sobria', 'Paleta Obsidian & Copper', 'Cero elementos estridentes'],
  },
  {
    id: 'multicam',
    name: 'Multicámara & Split Podcast',
    tag: 'Entrevistas & Charlas',
    startTime: 30,
    description:
      'Reencuadre inteligente para dos o más participantes en formato 9:16 vertical, destacando automáticamente quién toma la palabra.',
    targetPlatform: 'Podcasts • Debates • Masterclasses',
    retentionScore: '91% retención en diálogos',
    highlights: ['Reencuadre facial dinámico', 'Visualizador de audio integrado', 'Transición suave de planos'],
  },
  {
    id: 'b-roll-story',
    name: 'Storytelling con B-Roll & VFX',
    tag: 'Educadores & Infoproductores',
    startTime: 45,
    description:
      'Recursos visuales cinematográficos de apoyo, capturas de pantalla con efecto 3D tilt, infografías animadas y diseño sonoro envolvente.',
    targetPlatform: 'Cursos • Webinars • Casos de Éxito',
    retentionScore: '96% comprensión de concepto',
    highlights: ['B-Roll 4K de alta estética', 'Gráficos explicativos flotantes', 'Narrativa de retención activa'],
  },
];

export default function VideoStylesShowcase() {
  const [activeStyle, setActiveStyle] = useState<FormatStyle>(FORMAT_STYLES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(60);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Desktop Mouse Parallax & 3D Tilt State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Format time helper (mm:ss)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Video time update listener
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      const matchingStyle = [...FORMAT_STYLES].reverse().find(
        (style) => video.currentTime >= style.startTime
      );
      if (matchingStyle && matchingStyle.id !== activeStyle.id) {
        setActiveStyle(matchingStyle);
      }
    };

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [activeStyle.id]);

  // Handle Desktop Mouse Move for 3D Perspective Tilt and Spotlight
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-7deg to +7deg max for elegant feel)
    const rotateY = ((x - centerX) / centerX) * 6;
    const rotateX = -((y - centerY) / centerY) * 6;

    setMousePos({ x, y, rotateX, rotateY });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  };

  // Play / Pause toggle
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    setHasInteracted(true);
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Sound toggle
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Jump to specific style timestamp
  const handleSelectStyle = (style: FormatStyle) => {
    setActiveStyle(style);
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = style.startTime;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Seek bar change
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    const video = videoRef.current;
    if (video) {
      video.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!cardRef.current) return;
    if (!document.fullscreenElement) {
      cardRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const whatsappStyleUrl = `https://wa.me/5491127887093?text=Hola%20Alan,%20me%20interesa%20aplicar%20el%20formato%20"${encodeURIComponent(
    activeStyle.name
  )}"%20a%20mis%20videos`;

  return (
    <section
      id="formatos-estilos"
      ref={containerRef}
      className="py-24 sm:py-32 relative overflow-hidden bg-obsidian border-t border-graphite"
      aria-labelledby="formats-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-copper/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-carbon/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-carbon/90 border border-graphite backdrop-blur-md text-xs text-copper font-mono uppercase tracking-widest mb-4 shadow-md">
            <Film className="w-3.5 h-3.5 text-copper" />
            <span>Formatos & Dirección Visual</span>
          </div>

          <h2
            id="formats-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-serif text-paper-white tracking-tight leading-[1.15]"
          >
            Estilos y Formatos de Edición que Disparan la Retención
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-fog max-w-2xl mx-auto leading-relaxed">
            No todas las marcas requieren el mismo lenguaje. Adaptamos subtítulos, ritmos, gráficos y ganchos según tu nicho y el canal donde quieras posicionarte.
          </p>
        </div>

        {/* MAIN INTERACTIVE SHOWCASE CONTAINER WITH 3D PERSPECTIVE ON DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT / TOP: 3D Video Player Card (7 Cols on LG) */}
          <div className="lg:col-span-7 perspective-[1200px]">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: isHovered
                  ? `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) scale3d(1.01, 1.01, 1.01)`
                  : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="relative group rounded-2xl sm:rounded-3xl overflow-hidden bg-onyx border border-graphite shadow-2xl transition-all duration-300 transform-gpu"
            >
              {/* Dynamic Spotlight Glow following mouse in Desktop */}
              {isHovered && (
                <div
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300 z-30"
                  style={{
                    background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(204, 145, 102, 0.18), transparent 70%)`,
                  }}
                />
              )}

              {/* Video Element */}
              <div className="relative aspect-video w-full bg-obsidian overflow-hidden select-none">
                <video
                  ref={videoRef}
                  src="/videos/formatos.mp4"
                  playsInline
                  muted={isMuted}
                  loop
                  autoPlay
                  preload="metadata"
                  onClick={togglePlay}
                  className="w-full h-full object-contain sm:object-cover cursor-pointer transition-transform duration-700"
                />

                {/* Subdued Dark Gradient Vignette for cinematic look */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-obsidian/90 via-transparent to-obsidian/30" />

                {/* Overlaid Floating Style Badge (Top Left) */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-pill bg-obsidian/85 backdrop-blur-md border border-copper/40 text-[11px] sm:text-xs font-mono text-copper font-medium flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-copper animate-ping" />
                    <span>{activeStyle.tag}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-pill bg-carbon/80 backdrop-blur-md border border-graphite text-[10px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>4K UHD 60fps</span>
                  </div>
                </div>

                {/* Mute/Unmute Quick Badge (Top Right) */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20">
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Activar sonido' : 'Silenciar video'}
                    className="p-2 sm:p-2.5 rounded-full bg-obsidian/80 hover:bg-carbon border border-graphite text-bone hover:text-copper transition-all shadow-md active:scale-90"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-fog" /> : <Volume2 className="w-4 h-4 text-copper" />}
                  </button>
                </div>

                {/* Center Play Overlay Icon (when paused or before initial interaction) */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-obsidian/40 backdrop-blur-[2px] cursor-pointer z-20 group/play"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-paper-white/95 text-obsidian flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-copper group-hover/play:text-paper-white">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 ml-1 fill-current" />
                    </div>
                  </div>
                )}

                {/* Bottom Custom Control Bar */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-4 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent">
                  
                  {/* Progress Slider */}
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="range"
                      min={0}
                      max={duration || 60}
                      step={0.1}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1.5 bg-graphite rounded-lg appearance-none cursor-pointer accent-copper"
                      aria-label="Progreso del video"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-fog">
                    {/* Left Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="text-bone hover:text-copper transition-colors focus:outline-none p-1"
                        aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="text-bone hover:text-copper transition-colors focus:outline-none p-1"
                        aria-label={isMuted ? 'Activar audio' : 'Silenciar'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>

                      <span className="text-[11px] text-bone/80 font-mono">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-wider text-copper hidden sm:inline-block">
                        {activeStyle.name}
                      </span>
                      <button
                        type="button"
                        onClick={toggleFullscreen}
                        className="text-bone hover:text-copper transition-colors focus:outline-none p-1"
                        aria-label="Pantalla completa"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Interactive Bar inside 3D Card */}
              <div className="p-4 sm:p-5 bg-carbon/90 border-t border-graphite flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-copper" />
                  <span className="text-paper-white font-medium">{activeStyle.name}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{activeStyle.retentionScore}</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Helper hint */}
            <p className="hidden lg:block text-center text-[11px] font-mono text-fog/60 mt-3">
              ✦ Mueve el cursor sobre el reproductor para explorar la perspectiva 3D interactiva
            </p>
          </div>

          {/* RIGHT / BOTTOM: Interactive Format Tabs & Details (5 Cols on LG) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-1">
                Haz clic para saltar al estilo
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-paper-white">
                Formatos adaptados a tus objetivos
              </h3>
            </div>

            {/* Formats List Tabs */}
            <div className="space-y-3">
              {FORMAT_STYLES.map((style) => {
                const isActive = activeStyle.id === style.id;
                return (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => handleSelectStyle(style)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative group focus:outline-none ${
                      isActive
                        ? 'bg-carbon/95 border-copper shadow-gilded'
                        : 'bg-carbon/50 border-graphite hover:border-slate/80 hover:bg-carbon/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full transition-colors ${
                              isActive ? 'bg-copper' : 'bg-graphite group-hover:bg-fog'
                            }`}
                          />
                          <h4
                            className={`text-sm sm:text-base font-semibold transition-colors ${
                              isActive ? 'text-paper-white' : 'text-bone group-hover:text-paper-white'
                            }`}
                          >
                            {style.name}
                          </h4>
                        </div>
                        <p className="text-xs text-fog leading-relaxed pl-4">
                          {style.description}
                        </p>
                      </div>

                      {/* Jump button */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-copper text-obsidian shadow-md'
                            : 'bg-graphite/40 text-fog group-hover:text-bone group-hover:bg-graphite'
                        }`}
                      >
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Highlights chips */}
                    <div className="mt-3 pt-3 border-t border-graphite/50 flex flex-wrap gap-2 pl-4">
                      {style.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-obsidian/60 border border-graphite text-bone/80"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Direct CTA with selected style */}
            <div className="pt-3">
              <a
                href={whatsappStyleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-pill bg-paper-white hover:bg-bone text-obsidian font-semibold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all duration-200 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-copper" />
                <span>Quiero editar con el estilo "{activeStyle.name.split(' ')[0]}"</span>
                <ArrowRight className="w-4 h-4 text-obsidian" />
              </a>
              <span className="text-[11px] text-center text-fog block mt-2 font-mono">
                ✓ Te entregamos 1 clip de muestra gratuito antes de cualquier pago
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
