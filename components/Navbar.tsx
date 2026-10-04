'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Cotizador & Precios', href: '#precios' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const whatsappDemoUrl =
    'https://wa.me/5491127887093?text=Hola%20Alan,%20quiero%20probar%20un%20clip%20gratis%20de%20mi%20%C3%BAltimo%20video';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian/90 backdrop-blur-md border-b border-graphite py-3.5 shadow-2xl'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-copper rounded-lg p-1"
          aria-label="SMD - Servicio de Marketing Digital - Volver al inicio"
        >
          <div className="relative h-9 w-auto flex items-center">
            <Image
              src="/logo.png"
              alt="Logo Alan SMD - Servicio de Marketing Digital"
              width={160}
              height={36}
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.2em] text-fog font-medium border-l border-graphite pl-3">
            Video Repurposing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 text-[13px] font-medium text-fog tracking-wide"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-paper-white transition-colors duration-200 relative py-1 focus:outline-none focus:text-paper-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
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
            className="md:hidden p-2 text-fog hover:text-paper-white rounded-lg focus:outline-none focus:ring-2 focus:ring-copper"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-onyx/95 backdrop-blur-xl border-b border-graphite px-4 pt-4 pb-6 mt-3 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-bone hover:text-copper py-2 px-3 rounded-lg hover:bg-carbon/50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-graphite mt-1">
              <a
                href={whatsappDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider text-obsidian bg-paper-white hover:bg-bone rounded-pill transition-all"
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
