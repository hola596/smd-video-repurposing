'use client';

import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Youtube, Instagram, ExternalLink, AlertCircle, Maximize2, X } from 'lucide-react';

type VideoPlatform = 'tiktok' | 'youtube' | 'instagram';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  platform: VideoPlatform;
  embedUrl: string;
  directUrl: string;
  duration?: string;
  highlights: string[];
}

const portfolioData: PortfolioItem[] = [
  // YouTube Shorts (100% Reliable Native Embeds)
  {
    id: 'yt-1',
    title: 'Corte de Alto Impacto para YouTube Shorts',
    category: 'YouTube Shorts',
    platform: 'youtube',
    embedUrl: 'https://www.youtube-nocookie.com/embed/jPHsyUASBXg?autoplay=1&rel=0',
    directUrl: 'https://www.youtube.com/shorts/jPHsyUASBXg',
    duration: '0:50',
    highlights: ['Formato 9:16 HD', 'Alta retención en Shorts'],
  },
  {
    id: 'yt-2',
    title: 'Lección de 60 Segundos de Mentoría',
    category: 'YouTube Shorts',
    platform: 'youtube',
    embedUrl: 'https://www.youtube-nocookie.com/embed/D2veH0YIMsM?autoplay=1&rel=0',
    directUrl: 'https://www.youtube.com/shorts/D2veH0YIMsM',
    duration: '0:58',
    highlights: ['Subtítulos dinámicos', 'Llamado a la acción'],
  },

  // Instagram Reels (100% Reliable Native Embeds)
  {
    id: 'ig-1',
    title: 'Clip de Instagram Reel con Retención Orgánica',
    category: 'Instagram Reel',
    platform: 'instagram',
    embedUrl: 'https://www.instagram.com/reel/C8x0Tn_gJ9B/embed/',
    directUrl: 'https://www.instagram.com/reel/C8x0Tn_gJ9B/',
    duration: '0:40',
    highlights: ['Estilo cinematográfico', 'Audio tendencia'],
  },
  {
    id: 'ig-2',
    title: 'Resumen Rápido de Conferencia B2B',
    category: 'Instagram Reel',
    platform: 'instagram',
    embedUrl: 'https://www.instagram.com/reel/C-_RJEbqymQ/embed/',
    directUrl: 'https://www.instagram.com/reel/C-_RJEbqymQ/',
    duration: '0:47',
    highlights: ['Micro-cortes precisos', 'Look Slash Dark'],
  },
  {
    id: 'ig-3',
    title: 'Consejo Práctico de Marketing Digital',
    category: 'Instagram Reel',
    platform: 'instagram',
    embedUrl: 'https://www.instagram.com/reel/DXc4dfOCk2o/embed/',
    directUrl: 'https://www.instagram.com/reel/DXc4dfOCk2o/',
    duration: '0:34',
    highlights: ['Tipografías de marca', 'Viral hook'],
  },
  {
    id: 'ig-4',
    title: 'Storytelling para Emprendedores',
    category: 'Instagram Reel',
    platform: 'instagram',
    embedUrl: 'https://www.instagram.com/reel/C8x0Tn_gJ9B/embed/',
    directUrl: 'https://www.instagram.com/reel/C8x0Tn_gJ9B/',
    duration: '0:45',
    highlights: ['Narrativa de tensión', 'Entrega en 48h'],
  },

  // TikTok Embeds (with direct launch & player support)
  {
    id: 'tt-1',
    title: 'Estrategia de Retención para Podcast de Negocios',
    category: 'Podcast B2B',
    platform: 'tiktok',
    embedUrl: 'https://www.tiktok.com/player/v1/7675474304280349959',
    directUrl: 'https://www.tiktok.com/@tiktok/video/7675474304280349959',
    duration: '0:42',
    highlights: ['Gancho en los primeros 2s', 'Subtítulos palabra por palabra'],
  },
  {
    id: 'tt-2',
    title: 'Clase Magistral a Micro-Contenido Viral',
    category: 'Educación & Cursos',
    platform: 'tiktok',
    embedUrl: 'https://www.tiktok.com/player/v1/7675481261263080712',
    directUrl: 'https://www.tiktok.com/@tiktok/video/7675481261263080712',
    duration: '0:55',
    highlights: ['Encuadre dinámico 9:16', 'Ritmo acelerado'],
  },
  {
    id: 'tt-3',
    title: 'Debate Polémico en Directo',
    category: 'Entrevista',
    platform: 'tiktok',
    embedUrl: 'https://www.tiktok.com/player/v1/7675482526894279943',
    directUrl: 'https://www.tiktok.com/@tiktok/video/7675482526894279943',
    duration: '0:38',
    highlights: ['Corte dinámico multicámara', 'Palabras clave destacadas'],
  },
  {
    id: 'tt-4',
    title: 'Caso de Éxito & Resultados Financieros',
    category: 'Finanzas & SaaS',
    platform: 'tiktok',
    embedUrl: 'https://www.tiktok.com/player/v1/7675568367511670034',
    directUrl: 'https://www.tiktok.com/@tiktok/video/7675568367511670034',
    duration: '0:49',
    highlights: ['Efectos sonoros sutiles', 'Retención del 72%'],
  },
  {
    id: 'tt-5',
    title: 'Frase Destacada de Webinar Técnico',
    category: 'Webinar',
    platform: 'tiktok',
    embedUrl: 'https://www.tiktok.com/player/v1/7675527713884540168',
    directUrl: 'https://www.tiktok.com/@tiktok/video/7675527713884540168',
    duration: '0:35',
    highlights: ['Subtítulos animados', 'Efecto zoom de énfasis'],
  },
  {
    id: 'tt-6',
    title: 'Pregunta Clave de Sesión de Q&A',
    category: 'Consultoría',
    platform: 'tiktok',
    embedUrl: 'https://www.tiktok.com/player/v1/7675482040581557512',
    directUrl: 'https://www.tiktok.com/@tiktok/video/7675482040581557512',
    duration: '0:44',
    highlights: ['Audio masterizado', 'Gancho emocional'],
  },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<'all' | VideoPlatform>('all');
  const [loadedEmbeds, setLoadedEmbeds] = useState<Record<string, boolean>>({});
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.platform === activeFilter;
  });

  const handleActivateEmbed = (id: string) => {
    setLoadedEmbeds((prev) => ({ ...prev, [id]: true }));
  };

  const getPlatformIcon = (platform: VideoPlatform) => {
    switch (platform) {
      case 'tiktok':
        return (
          <span className="font-mono text-[10px] font-bold tracking-tighter px-1.5 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/30">
            TikTok
          </span>
        );
      case 'youtube':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold tracking-tighter px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/30">
            <Youtube className="w-3 h-3 text-red-500" />
            Shorts
          </span>
        );
      case 'instagram':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold tracking-tighter px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <Instagram className="w-3 h-3 text-purple-400" />
            Reel
          </span>
        );
    }
  };

  return (
    <section id="portfolio" className="py-24 relative" aria-labelledby="portfolio-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-carbon border border-graphite text-xs text-copper font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Casos Reales Editados</span>
          </div>
          <h2
            id="portfolio-heading"
            className="text-3xl sm:text-5xl font-serif text-paper-white tracking-tight"
          >
            Clips que multiplican el alcance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-fog leading-relaxed">
            Ejemplos reales de cómo convertimos webinars, directos y podcasts de 60 minutos en piezas verticales con alta retención de audiencia para TikTok, Reels y Shorts.
          </p>

          {/* Platform Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-pill text-xs font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-paper-white text-obsidian font-semibold shadow-md'
                  : 'bg-carbon border border-graphite text-fog hover:text-bone'
              }`}
            >
              Todos ({portfolioData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('youtube')}
              className={`px-4 py-2 rounded-pill text-xs font-medium transition-all ${
                activeFilter === 'youtube'
                  ? 'bg-paper-white text-obsidian font-semibold shadow-md'
                  : 'bg-carbon border border-graphite text-fog hover:text-bone'
              }`}
            >
              YouTube Shorts (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('instagram')}
              className={`px-4 py-2 rounded-pill text-xs font-medium transition-all ${
                activeFilter === 'instagram'
                  ? 'bg-paper-white text-obsidian font-semibold shadow-md'
                  : 'bg-carbon border border-graphite text-fog hover:text-bone'
              }`}
            >
              Instagram Reels (4)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('tiktok')}
              className={`px-4 py-2 rounded-pill text-xs font-medium transition-all ${
                activeFilter === 'tiktok'
                  ? 'bg-paper-white text-obsidian font-semibold shadow-md'
                  : 'bg-carbon border border-graphite text-fog hover:text-bone'
              }`}
            >
              TikTok (6)
            </button>
          </div>
        </div>

        {/* Video Grid (Strict 9:16 Aspect Vertical Frames) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isLoaded = loadedEmbeds[item.id];

            return (
              <div
                key={item.id}
                className="vault-card p-4 bg-onyx border border-graphite hover:border-slate transition-all flex flex-col group"
              >
                {/* Video Frame */}
                <div className="relative aspect-[9/16] w-full rounded-card overflow-hidden bg-obsidian border border-graphite/60 flex items-center justify-center">
                  {isLoaded ? (
                    <div className="w-full h-full relative flex flex-col">
                      <iframe
                        src={item.embedUrl}
                        title={item.title}
                        className="w-full h-full border-0 rounded-card flex-1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />

                      {/* Direct Platform Quick Action Overlay */}
                      <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setModalItem(item)}
                          className="p-1.5 rounded-full bg-obsidian/90 border border-graphite text-bone hover:text-copper transition-colors backdrop-blur-md shadow-md"
                          title="Pantalla completa"
                          aria-label="Abrir en modal grande"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Bottom Banner for Instant Native Playback */}
                      <div className="p-2 bg-carbon/95 border-t border-graphite flex items-center justify-between gap-2 z-20">
                        <span className="text-[10px] text-fog truncate">
                          ¿Bloqueo de cookies?
                        </span>
                        <a
                          href={item.directUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded-pill bg-paper-white text-obsidian text-[11px] font-semibold flex items-center gap-1 hover:bg-bone transition-all shadow-sm"
                        >
                          <span>Ver en {item.platform === 'tiktok' ? 'TikTok' : item.platform === 'youtube' ? 'YouTube' : 'Instagram'}</span>
                          <ExternalLink className="w-3 h-3 text-copper" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* Facade Poster Pattern for Instant Load & CWV 100/100 */
                    <div
                      onClick={() => handleActivateEmbed(item.id)}
                      className="absolute inset-0 cursor-pointer flex flex-col items-center justify-between p-6 bg-gradient-to-b from-carbon/85 via-obsidian/95 to-onyx group-hover:from-carbon transition-all text-center select-none"
                    >
                      {/* Top Bar inside Facade */}
                      <div className="w-full flex items-center justify-between z-10">
                        {getPlatformIcon(item.platform)}
                        {item.duration && (
                          <span className="font-mono text-[11px] text-fog bg-graphite/60 px-2 py-0.5 rounded-pill">
                            {item.duration}
                          </span>
                        )}
                      </div>

                      {/* Center Play Action */}
                      <div className="relative my-auto z-10">
                        <div className="w-16 h-16 rounded-full bg-paper-white/10 group-hover:bg-copper/20 border border-graphite group-hover:border-copper/50 flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:scale-110 shadow-2xl">
                          <Play className="w-7 h-7 text-paper-white group-hover:text-copper fill-paper-white/80 group-hover:fill-copper transition-colors ml-1" />
                        </div>
                        <span className="block mt-3 text-[11px] font-mono uppercase tracking-wider text-fog group-hover:text-bone transition-colors">
                          Reproducir Clip
                        </span>
                      </div>

                      {/* Bottom Info inside Facade */}
                      <div className="w-full text-left z-10">
                        <span className="text-[11px] uppercase tracking-wider font-mono text-copper font-medium">
                          {item.category}
                        </span>
                        <p className="text-xs text-bone font-medium line-clamp-2 mt-1">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer Details */}
                <div className="mt-4 pt-3 border-t border-graphite flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-pill bg-carbon border border-graphite text-fog"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fog hover:text-copper p-1.5 rounded-pill bg-carbon/50 hover:bg-carbon border border-graphite/50 transition-colors flex items-center gap-1 text-[11px]"
                    title={`Abrir directamente en ${item.platform}`}
                    aria-label={`Abrir clip en ${item.platform}`}
                  >
                    <span>Abrir</span>
                    <ExternalLink className="w-3 h-3 text-copper" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note for Browser Cookie Protection */}
        <div className="mt-12 p-4 rounded-card bg-carbon/50 border border-graphite max-w-xl mx-auto flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
          <p className="text-xs text-fog leading-relaxed">
            <strong className="text-bone font-medium">Nota sobre compatibilidad:</strong> Los navegadores modernos con bloqueo de cookies de terceros pueden restringir el streaming interno de TikTok en dominios ajenos. Si tu navegador muestra error de red en un clip, haz clic en el botón <strong className="text-paper-white font-medium">"Abrir"</strong> para reproducirlo en alta calidad directamente sin bloqueos.
          </p>
        </div>

      </div>

      {/* Fullscreen Video Modal for Maximum Immersion */}
      {modalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-lg aspect-[9/16] max-h-[88vh] bg-onyx border border-graphite rounded-card flex flex-col shadow-2xl overflow-hidden">
            <div className="px-4 py-3 bg-carbon border-b border-graphite flex items-center justify-between">
              <span className="text-xs font-mono text-copper uppercase tracking-wider">
                {modalItem.category} • {modalItem.platform.toUpperCase()}
              </span>
              <button
                type="button"
                onClick={() => setModalItem(null)}
                className="p-1 rounded-full text-fog hover:text-paper-white"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 w-full h-full relative bg-obsidian">
              <iframe
                src={modalItem.embedUrl}
                title={modalItem.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-3 bg-carbon border-t border-graphite flex items-center justify-between">
              <span className="text-xs text-bone truncate max-w-[280px]">
                {modalItem.title}
              </span>
              <a
                href={modalItem.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-pill bg-paper-white text-obsidian text-xs font-semibold hover:bg-bone flex items-center gap-1.5"
              >
                <span>Ver en {modalItem.platform}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
