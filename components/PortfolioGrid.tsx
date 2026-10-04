'use client';

import React, { useState } from 'react';
import { 
  Eye, 
  Play, 
  Sparkles, 
  Youtube, 
  Instagram, 
  ExternalLink, 
  TrendingUp, 
  Heart, 
  Clock, 
  Flame, 
  X, 
  Maximize2,
  CheckCircle2,
  BarChart3
} from 'lucide-react';

type VideoPlatform = 'tiktok' | 'youtube' | 'instagram';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  platform: VideoPlatform;
  platformLabel: string;
  views: string;
  viewsCount: number;
  likes: string;
  retention: string;
  duration: string;
  hook: string;
  directUrl: string;
  embedUrl: string;
  thumbnailUrl?: string;
  badge?: string;
  highlights: string[];
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'tt-1',
    title: 'Velas artesanales: Genera ingresos desde casa sin experiencia',
    category: 'Emprendimiento & Cursos',
    platform: 'tiktok',
    platformLabel: 'TikTok',
    views: '2.1M',
    viewsCount: 2150000,
    likes: '145K',
    retention: '92%',
    duration: '0:42',
    hook: 'Este año descubre cómo monetizar tu creatividad desde casa de forma fácil',
    directUrl: 'https://www.tiktok.com/@tiktok/video/7675474304280349959',
    embedUrl: 'https://www.tiktok.com/player/v1/7675474304280349959',
    badge: '🔥 Más Visto (2.1M)',
    highlights: ['Gancho en 1.5s', 'Subtítulos palabra x palabra', '+18K Compartidos'],
  },
  {
    id: 'tt-2',
    title: 'Estrategia de retención para podcasts de negocios e inversión',
    category: 'Podcasts & Negocios',
    platform: 'tiktok',
    platformLabel: 'TikTok',
    views: '1.6M',
    viewsCount: 1620000,
    likes: '112K',
    retention: '86%',
    duration: '0:55',
    hook: 'El error fatal que cometen al hablar de rentabilidad y números',
    directUrl: 'https://www.tiktok.com/@tiktok/video/7675481261263080712',
    embedUrl: 'https://www.tiktok.com/player/v1/7675481261263080712',
    badge: '🔥 Viral (+1.6M)',
    highlights: ['Corte dinámico multicámara', 'Zoom de énfasis', '+9.8K Compartidos'],
  },
  {
    id: 'yt-1',
    title: 'Consiga ver los datos de uso de su equipo CPAP BMC fácilmente',
    category: 'Salud & Equipamiento B2B',
    platform: 'youtube',
    platformLabel: 'YouTube Shorts',
    views: '1.2M',
    viewsCount: 1240000,
    likes: '89K',
    retention: '88%',
    duration: '1:01',
    hook: 'Acceda fácilmente al rendimiento y métricas de su descanso',
    directUrl: 'https://www.youtube.com/shorts/jPHsyUASBXg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/jPHsyUASBXg?autoplay=1&rel=0',
    thumbnailUrl: 'https://i.ytimg.com/vi/jPHsyUASBXg/hqdefault.jpg',
    badge: '🔥 1.2M Vistas',
    highlights: ['Encuadre perfecto 9:16', 'B2B Alta Conversión', '+4.2K Compartidos'],
  },
  {
    id: 'tt-3',
    title: 'Debate en vivo: De contenido largo de 1 hora a clip vertical',
    category: 'Entrevistas & Streaming',
    platform: 'tiktok',
    platformLabel: 'TikTok',
    views: '980K',
    viewsCount: 980000,
    likes: '78K',
    retention: '85%',
    duration: '0:38',
    hook: 'Cómo sintetizar una hora de charla en 38 segundos de alto impacto',
    directUrl: 'https://www.tiktok.com/@tiktok/video/7675482526894279943',
    embedUrl: 'https://www.tiktok.com/player/v1/7675482526894279943',
    badge: 'Top Retención',
    highlights: ['Micro-cortes precisos', 'Sound design sutil', '+6.1K Compartidos'],
  },
  {
    id: 'yt-2',
    title: '¿Sabías que existe un Nebulizador Portátil para adultos y niños?',
    category: 'E-Commerce & Salud',
    platform: 'youtube',
    platformLabel: 'YouTube Shorts',
    views: '845K',
    viewsCount: 845000,
    likes: '62K',
    retention: '82%',
    duration: '0:14',
    hook: 'Diseño compacto y silencioso para llevar a cualquier parte',
    directUrl: 'https://www.youtube.com/shorts/D2veH0YIMsM',
    embedUrl: 'https://www.youtube-nocookie.com/embed/D2veH0YIMsM?autoplay=1&rel=0',
    thumbnailUrl: 'https://i.ytimg.com/vi/D2veH0YIMsM/hqdefault.jpg',
    badge: 'Top Ventas',
    highlights: ['Hook visual en 1s', 'Ritmo acelerado', '+3.8K Guardados'],
  },
  {
    id: 'tt-4',
    title: 'De webinar técnico a oferta directa con 72% de cierre',
    category: 'Consultoría & SaaS',
    platform: 'tiktok',
    platformLabel: 'TikTok',
    views: '750K',
    viewsCount: 750000,
    likes: '54K',
    retention: '76%',
    duration: '0:49',
    hook: 'El llamado a la acción exacto que multiplicó las reservas de demo',
    directUrl: 'https://www.tiktok.com/@tiktok/video/7675568367511670034',
    embedUrl: 'https://www.tiktok.com/player/v1/7675568367511670034',
    badge: 'Alta Conversión',
    highlights: ['Tipografía Slash Dark', 'Audio masterizado', '+4.3K Compartidos'],
  },
  {
    id: 'ig-1',
    title: '¿Querés ser de los que duermen bien cada noche?',
    category: 'Salud & Calidad de Vida',
    platform: 'instagram',
    platformLabel: 'Instagram Reels',
    views: '630K',
    viewsCount: 630000,
    likes: '34K',
    retention: '79%',
    duration: '0:40',
    hook: 'El hábito nocturno que transforma tu energía y rendimiento',
    directUrl: 'https://www.instagram.com/reel/C8x0Tn_gJ9B/',
    embedUrl: 'https://www.instagram.com/reel/C8x0Tn_gJ9B/embed/',
    badge: 'Salud & Vida',
    highlights: ['Gradación de color pro', 'Audio en tendencia', '+2.4K Compartidos'],
  },
  {
    id: 'ig-2',
    title: 'Resumen Ejecutivo: Cómo escalar servicios profesionales en 90 días',
    category: 'Negocios & B2B',
    platform: 'instagram',
    platformLabel: 'Instagram Reels',
    views: '490K',
    viewsCount: 490000,
    likes: '28K',
    retention: '84%',
    duration: '0:47',
    hook: '3 ajustes críticos en la oferta antes de invertir en pauta publicitaria',
    directUrl: 'https://www.instagram.com/reel/C-_RJEbqymQ/',
    embedUrl: 'https://www.instagram.com/reel/C-_RJEbqymQ/embed/',
    badge: 'Estrategia B2B',
    highlights: ['Hook de autoridad', 'Subtítulos dinámicos', '+1.9K Compartidos'],
  },
  {
    id: 'ig-3',
    title: 'Consejos de Marketing Digital para aumentar el ticket medio',
    category: 'Marketing & Ventas',
    platform: 'instagram',
    platformLabel: 'Instagram Reels',
    views: '380K',
    viewsCount: 380000,
    likes: '19K',
    retention: '81%',
    duration: '0:34',
    hook: 'No bajes el precio de tus servicios: aumenta el valor percibido',
    directUrl: 'https://www.instagram.com/reel/DXc4dfOCk2o/',
    embedUrl: 'https://www.instagram.com/reel/DXc4dfOCk2o/embed/',
    badge: 'Retención 81%',
    highlights: ['Palabras clave resaltadas', 'Entrega en 48h', '+1.5K Guardados'],
  },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'viral' | VideoPlatform>('all');
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioData.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'viral') return item.viewsCount >= 1000000;
    return item.platform === activeFilter;
  });

  const getPlatformBadge = (platform: VideoPlatform) => {
    switch (platform) {
      case 'tiktok':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-400 border border-pink-500/30">
            TikTok
          </span>
        );
      case 'youtube':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
            <Youtube className="w-3 h-3 text-red-500" />
            Shorts
          </span>
        );
      case 'instagram':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
            <Instagram className="w-3 h-3 text-purple-400" />
            Reels
          </span>
        );
    }
  };

  return (
    <section id="portfolio" className="py-24 relative" aria-labelledby="portfolio-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-pill bg-carbon border border-graphite text-xs text-copper font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resultados Comprobados & Casos Reales</span>
          </div>
          
          <h2
            id="portfolio-heading"
            className="text-3xl sm:text-5xl font-serif text-paper-white tracking-tight"
          >
            Clips con Millones de Visualizaciones
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-fog leading-relaxed max-w-2xl mx-auto">
            Cada video editado está optimizado para retener a la audiencia desde el primer segundo. Mira la cantidad real de usuarios que vieron cada pieza y accede directamente a ver el clip completo en su plataforma.
          </p>

          {/* Social Proof Global Counter Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-carbon/60 border border-graphite/80 max-w-xl mx-auto backdrop-blur-md">
            <div className="text-center">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-fog">
                Audiencia Total
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-paper-white">
                +8.9M
              </span>
              <span className="block text-[10px] text-copper font-mono">
                visualizaciones
              </span>
            </div>
            <div className="text-center border-x border-graphite/60">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-fog">
                Retención Media
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                83.7%
              </span>
              <span className="block text-[10px] text-fog font-mono">
                en videos 9:16
              </span>
            </div>
            <div className="text-center col-span-2 sm:col-span-1 pt-2 sm:pt-0">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-fog">
                Interacciones
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-paper-white">
                +620K
              </span>
              <span className="block text-[10px] text-copper font-mono">
                likes y compartidos
              </span>
            </div>
          </div>

          {/* Platform & Impact Filters */}
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
              Todos los videos ({portfolioData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('viral')}
              className={`px-4 py-2 rounded-pill text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === 'viral'
                  ? 'bg-copper text-white font-semibold shadow-md'
                  : 'bg-carbon border border-graphite text-fog hover:text-bone'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>+1 Millón de Vistas (3)</span>
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
              onClick={() => setActiveFilter('tiktok')}
              className={`px-4 py-2 rounded-pill text-xs font-medium transition-all ${
                activeFilter === 'tiktok'
                  ? 'bg-paper-white text-obsidian font-semibold shadow-md'
                  : 'bg-carbon border border-graphite text-fog hover:text-bone'
              }`}
            >
              TikTok (4)
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
              Instagram Reels (3)
            </button>
          </div>
        </div>

        {/* Video Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="vault-card p-5 bg-onyx/90 border border-graphite hover:border-copper/60 transition-all duration-300 rounded-2xl flex flex-col group shadow-xl hover:shadow-2xl hover:shadow-copper/5"
            >
              {/* TOP: Views & Retention Counter Highlight */}
              <div className="mb-4 bg-carbon/90 border border-graphite/80 rounded-xl p-3.5 flex items-center justify-between shadow-inner">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-copper uppercase tracking-wider font-semibold">
                    <Eye className="w-3.5 h-3.5 text-copper" />
                    <span>Visualizaciones</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-paper-white tracking-tight">
                      {item.views}
                    </span>
                    <span className="text-[11px] font-mono text-fog">
                      usuarios
                    </span>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end">
                  <span className="text-[10px] font-mono text-fog uppercase tracking-wider">
                    Retención
                  </span>
                  <span className="text-base font-bold font-mono text-emerald-400 mt-0.5">
                    {item.retention}
                  </span>
                  <span className="text-[10px] font-mono text-fog/80 mt-0.5">
                    ❤️ {item.likes}
                  </span>
                </div>
              </div>

              {/* CARD PREVIEW POSTER (Clean 9:16 Vertical Preview Frame) */}
              <div className="relative aspect-[9/13] w-full rounded-xl overflow-hidden bg-obsidian border border-graphite/70 flex flex-col justify-between p-4 group-hover:border-slate transition-all shadow-md">
                
                {/* Background Image / Gradient Poster */}
                {item.thumbnailUrl ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.thumbnailUrl})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/40 backdrop-blur-[1px]" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-b from-carbon via-obsidian to-onyx">
                    {/* Visual Soundwave / Ambient Glow */}
                    <div className={`absolute inset-0 opacity-20 ${
                      item.platform === 'tiktok' 
                        ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-transparent' 
                        : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent'
                    }`} />
                  </div>
                )}

                {/* Top Poster Badges */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  {getPlatformBadge(item.platform)}
                  {item.badge && (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-copper/20 text-copper border border-copper/40 backdrop-blur-sm">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Center Action (Play & Hook) */}
                <a
                  href={item.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 my-auto text-center cursor-pointer group/center block"
                  aria-label={`Entrar a ver ${item.title}`}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-paper-white/10 group-hover/center:bg-copper/30 border border-graphite group-hover/center:border-copper/70 flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover/center:scale-110 shadow-2xl">
                    <Play className="w-7 h-7 text-paper-white group-hover/center:text-copper fill-paper-white/80 group-hover/center:fill-copper transition-colors ml-1" />
                  </div>

                  <p className="mt-3 text-xs sm:text-sm font-medium text-paper-white line-clamp-2 px-3 drop-shadow-md">
                    "{item.hook}"
                  </p>

                  <span className="inline-block mt-2 text-[11px] font-mono uppercase tracking-wider text-copper group-hover/center:text-bone transition-colors underline decoration-copper/40 underline-offset-4">
                    Tocar para reproducir ↗
                  </span>
                </a>

                {/* Bottom Poster Bar */}
                <div className="relative z-10 flex items-center justify-between pt-2 border-t border-graphite/40">
                  <span className="text-[10px] font-mono text-copper font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-fog bg-carbon/80 px-2 py-0.5 rounded-full border border-graphite/50">
                    <Clock className="w-3 h-3 text-fog" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>

              {/* VIDEO TITLE & HIGHLIGHTS */}
              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-paper-white leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {item.highlights.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-carbon border border-graphite text-fog"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* PRIMARY ACTIONS: ENTER AND VIEW VIDEO */}
                <div className="mt-5 pt-3 border-t border-graphite/60 flex flex-col gap-2">
                  <a
                    href={item.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-paper-white text-obsidian font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-copper hover:text-white transition-all duration-200 shadow-md group/btn"
                  >
                    <span>Entrar y Ver en {item.platformLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-obsidian group-hover/btn:text-white transition-colors" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setModalItem(item)}
                    className="w-full py-1.5 text-center text-[11px] font-mono text-fog hover:text-copper transition-colors flex items-center justify-center gap-1"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Vista rápida en modal</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-carbon/70 border border-graphite/80 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-copper/15 border border-copper/30 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-copper" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-paper-white font-medium">
                ¿Tienes podcasts, entrevistas o webinars sin aprovechar?
              </p>
              <p className="text-[11px] text-fog">
                Multiplica tu alcance orgánico con clips listos para publicar en 48 horas.
              </p>
            </div>
          </div>

          <a
            href="#cotizador"
            className="px-5 py-2.5 rounded-pill bg-copper text-white text-xs font-semibold hover:bg-amber-600 transition-colors whitespace-nowrap shadow-md"
          >
            Cotizar Mis Videos
          </a>
        </div>

      </div>

      {/* FULLSCREEN PREVIEW MODAL */}
      {modalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-lg aspect-[9/16] max-h-[88vh] bg-onyx border border-graphite rounded-2xl flex flex-col shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-4 py-3 bg-carbon border-b border-graphite flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-copper" />
                <span className="text-xs font-mono font-bold text-paper-white">
                  {modalItem.views} visualizaciones
                </span>
                <span className="text-[10px] text-fog font-mono">
                  • {modalItem.platformLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setModalItem(null)}
                className="p-1.5 rounded-full text-fog hover:text-paper-white hover:bg-graphite/40 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Player Body */}
            <div className="flex-1 w-full h-full relative bg-obsidian">
              <iframe
                src={modalItem.embedUrl}
                title={modalItem.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer with Direct Link */}
            <div className="p-3.5 bg-carbon border-t border-graphite flex items-center justify-between gap-3">
              <div className="truncate flex-1">
                <span className="block text-xs font-medium text-bone truncate">
                  {modalItem.title}
                </span>
                <span className="text-[10px] text-copper font-mono">
                  Retención: {modalItem.retention} • ❤️ {modalItem.likes}
                </span>
              </div>
              <a
                href={modalItem.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-paper-white text-obsidian text-xs font-bold hover:bg-copper hover:text-white transition-all flex items-center gap-1.5 flex-shrink-0 shadow-sm"
              >
                <span>Abrir en {modalItem.platformLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
