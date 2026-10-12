'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles, Film, Volume2, Play, Flame } from 'lucide-react';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Entertaining Mobile Header State (Live Studio Pulse & Soundwave)
  const [isStudioModeActive, setIsStudioModeActive] = useState(false);
  const [showFunBubble, setShowFunBubble] = useState(false);
  const [soundwaveSpeed, setSoundwaveSpeed] = useState<'normal' | 'boost'>('normal');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Estilos & Formatos', href: '#formatos-estilos', badge: 'Nuevo' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Cotizador & Precios', href: '#precios' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const whatsappDemoUrl =
    'https://wa.me/5491127887093?text=Hola%20Alan,%20quiero%20probar%20un%20clip%20gratis%20de%20mi%20%C3%BAltimo%20video';

  // Fun Mobile Header Interaction Handler
  const handleFunMobileClick = () => {
    setIsStudioModeActive(true);
    setSoundwaveSpeed('boost');
    setShowFunBubble(true);

    // Auto scroll gently to the video formats showcase if user desires
    const formatsSection = document.getElementById('formatos-estilos');
    if (formatsSection) {
      formatsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Hide bubble after 3.5s
    setTimeout(() => {
      setShowFunBubble(false);
      setSoundwaveSpeed('normal');
    }, 3500);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian/90 backdrop-blur-md border-b border-graphite py-3 shadow-2xl'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          href="#inicio"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-copper rounded-lg p-1"
          aria-label="SMD - Servicio de Marketing Digital - Volver al inicio"
        >
          <div className="relative h-8 sm:h-9 w-auto flex items-center">
            <Image
              src="/logo.png"
              alt="Logo Alan SMD - Servicio de Marketing Digital"
              width={160}
              height={36}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.2em] text-fog font-medium border-l border-graphite pl-3">
            Video Repurposing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-7 text-[13px] font-medium text-fog tracking-wide"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-paper-white transition-colors duration-200 relative py-1 focus:outline-none focus:text-paper-white flex items-center gap-1.5"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded-full bg-copper/20 text-copper border border-copper/30">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Entertaining Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* ENTERTAINING MOBILE HEADER INTERACTIVE WIDGET (Visible on mobile screens) */}
          <div className="relative md:hidden flex items-center">
            <button
              type="button"
              onClick={handleFunMobileClick}
              aria-label="Ver formatos de video interactivos en vivo"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border transition-all duration-300 active:scale-95 ${
                isStudioModeActive
                  ? 'bg-copper/20 border-copper text-paper-white shadow-gilded'
                  : 'bg-carbon/90 border-graphite hover:border-copper/50 text-bone'
              }`}
            >
              {/* Animated Soundwave Equalizer Bars */}
              <div className="flex items-end gap-[2.5px] h-3.5 px-0.5">
                <span
                  className={`w-[2.5px] bg-copper rounded-full transition-all duration-200 ${
                    soundwaveSpeed === 'boost'
                      ? 'h-3.5 animate-pulse'
                      : 'h-2 animate-[pulse_1s_ease-in-out_infinite]'
                  }`}
                />
                <span
                  className={`w-[2.5px] bg-copper rounded-full transition-all duration-200 ${
                    soundwaveSpeed === 'boost'
                      ? 'h-3 animate-bounce'
                      : 'h-3.5 animate-[pulse_0.7s_ease-in-out_infinite]'
                  }`}
                />
                <span
                  className={`w-[2.5px] bg-copper rounded-full transition-all duration-200 ${
                    soundwaveSpeed === 'boost'
                      ? 'h-3.5 animate-pulse'
                      : 'h-1.5 animate-[pulse_1.2s_ease-in-out_infinite]'
                  }`}
                />
                <span
                  className={`w-[2.5px] bg-copper rounded-full transition-all duration-200 ${
                    soundwaveSpeed === 'boost'
                      ? 'h-2 animate-bounce'
                      : 'h-3 animate-[pulse_0.9s_ease-in-out_infinite]'
                  }`}
                />
              </div>

              {/* Text Pill with Clapperboard / Sparkles */}
              <span className="text-[11px] font-mono tracking-tight text-bone font-medium flex items-center gap-1">
                <Film className="w-3 h-3 text-copper" />
                <span>Formatos</span>
              </span>

              {/* Ping micro-dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-copper" />
              </span>
            </button>

            {/* Entertaining Interactive Floating Bubble on Mobile Touch */}
            {showFunBubble && (
              <div className="absolute top-10 right-0 w-52 p-2.5 rounded-xl bg-onyx/95 border border-copper/60 text-bone text-[11px] shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 z-50">
                <div className="flex items-center gap-1.5 text-copper font-medium mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>¡Modo Studio 4K Activo!</span>
                </div>
                <p className="text-[10px] text-fog leading-snug">
                  Explorando los 4 estilos de edición y retención visual.
                </p>
              </div>
            )}
          </div>

          {/* Desktop WhatsApp Action Button */}
          <a
            href={whatsappDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wider text-obsidian bg-paper-white hover:bg-bone rounded-pill transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-copper"
            aria-label="Probar 1 Clip Gratis por WhatsApp"
          >
            <Sparkles className="w-3.5 h-3.5 text-copper" />
            <span>Probar 1 Clip Gratis</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-obsidian/70" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-fog hover:text-paper-white rounded-lg focus:outline-none focus:ring-2 focus:ring-copper active:scale-95"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-copper" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-onyx/98 backdrop-blur-2xl border-b border-graphite px-4 pt-4 pb-6 mt-3 animate-in fade-in slide-in-from-top-2 shadow-2xl">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-bone hover:text-copper py-2.5 px-3 rounded-xl hover:bg-carbon/70 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-copper/20 text-copper border border-copper/30">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}

            {/* Mobile Formats Quick Direct Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('formatos-estilos');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-copper/10 border border-copper/40 text-bone hover:bg-copper/20 transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-copper" />
                  <span>Ver Formatos & Estilos de Video</span>
                </div>
                <span className="text-[10px] font-mono text-copper">4K UHD</span>
              </button>
            </div>

            <div className="pt-3 border-t border-graphite mt-2">
              <a
                href={whatsappDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider text-obsidian bg-paper-white hover:bg-bone rounded-pill transition-all shadow-lg active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-copper" />
                <span>Probar 1 Clip Gratis (WhatsApp)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
