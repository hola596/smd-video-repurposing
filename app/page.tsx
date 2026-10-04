'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HowItWorks from '../components/HowItWorks';
import PortfolioGrid from '../components/PortfolioGrid';
import ServicesAndAbout from '../components/ServicesAndAbout';
import InstantQuoteCalculator from '../components/InstantQuoteCalculator';
import PricingCards from '../components/PricingCards';
import SecureContactForm from '../components/SecureContactForm';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import LegalModal from '../components/LegalModal';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  Zap,
  TrendingUp,
} from 'lucide-react';

export default function HomePage() {
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const openPrivacy = () => setLegalModalState({ isOpen: true, type: 'privacy' });
  const openTerms = () => setLegalModalState({ isOpen: true, type: 'terms' });
  const closeLegalModal = () => setLegalModalState({ isOpen: false, type: null });

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: '¿Cómo entrego mis videos largos?',
      a: 'Nos compartes el enlace de YouTube o una carpeta en Google Drive / Dropbox con tus grabaciones en 1080p o 4K.',
    },
    {
      q: '¿En cuánto tiempo recibo mis clips listos?',
      a: 'El plazo habitual de entrega es de 48 a 72 horas hábiles en tu carpeta privada de Google Drive, perfectamente organizados.',
    },
    {
      q: '¿Cómo funciona la prueba gratuita de 1 clip demo?',
      a: 'Nos envías tu video de 1 hora y te entregamos 1 clip vertical terminado con ganchos y subtítulos. Si te gusta, avanzamos; si no, no pagas nada.',
    },
    {
      q: '¿Qué estilos de subtítulos dinámicos manejan?',
      a: 'Aplicamos estilos de alta retención, tipografías minimalistas dark luxury o adaptamos los colores y fuentes exactas de tu manual de marca.',
    },
    {
      q: '¿Hay contratos de permanencia en los planes mensuales?',
      a: 'No. Todos los planes son de mes a mes sin ningún tipo de permanencia forzada. Puedes pausar o cancelar cuando desees.',
    },
  ];

  const primaryWhatsappUrl =
    'https://wa.me/5491127887093?text=Hola%20Alan,%20quiero%20probar%20un%20clip%20gratis%20de%20mi%20%C3%BAltimo%20video';

  return (
    <div className="min-h-screen bg-obsidian text-bone selection:bg-copper selection:text-obsidian relative">
      
      {/* Top Navbar */}
      <Navbar onOpenDemo={() => window.open(primaryWhatsappUrl, '_blank')} />

      {/* Main Content */}
      <main id="inicio">
        
        {/* HERO SECTION WITH ULTRA-FAST LOOPING BACKGROUND VIDEO & FIGURE-GROUND CONTRAST */}
        <section
          className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden"
          aria-label="Hero"
        >
          {/* Background Looping Video */}
          <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover scale-105 transform-gpu opacity-40 brightness-75 contrast-125 transition-opacity duration-1000"
            >
              <source src="/videos/video-scroll-3d.mp4" type="video/mp4" />
              <source src="/video portada/video portada para scroll 3D.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Figure-Ground Contrast Overlays */}
            {/* 1. Deep Obsidian Radial Vignette to keep text ultra-sharp */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(8,8,10,0.65)_0%,rgba(8,8,10,0.92)_70%,rgba(8,8,10,0.99)_100%)]" />

            {/* 2. Top-to-Bottom Darkness Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/90 via-obsidian/60 to-obsidian" />

            {/* 3. Subtle Warm Copper Ambient Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-copper/10 rounded-full blur-[120px] pointer-events-none" />
          </div>

          {/* Foreground Hero Content (Sharp Contrast) */}
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-carbon/90 border border-graphite backdrop-blur-md text-[12px] sm:text-[13px] text-copper font-sans tracking-widest uppercase mb-6 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
              <span>REPURPOSING AUDIOVISUAL & EDICIÓN ESTRATÉGICA</span>
            </div>

            {/* Main H1 Title (Didone Serif Luxury) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-paper-white tracking-tight max-w-5xl mx-auto leading-[1.12] drop-shadow-2xl">
              Transformo tus videos largos en decenas de clips virales para Reels, TikTok y YouTube Shorts.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 sm:mt-8 text-base sm:text-xl text-bone/90 max-w-3xl mx-auto font-sans font-normal leading-relaxed drop-shadow-md">
              No pierdas horas editando ni dejes tus podcasts y webinars archivados. Entrégame tus grabaciones de 1 hora y te devuelvo micro-videos con ganchos de retención, subtítulos dinámicos y formato vertical listos para publicar.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={primaryWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-pill bg-paper-white hover:bg-bone text-obsidian font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-copper"
                id="hero-primary-cta"
              >
                <Sparkles className="w-4 h-4 text-copper" />
                <span>Pedir mi prueba gratuita de 1 clip</span>
                <ArrowRight className="w-4 h-4 text-obsidian" />
              </a>

              <a
                href="mailto:hola@serviciodemarketingdigital.com"
                className="text-xs sm:text-sm text-bone hover:text-paper-white transition-colors py-2 px-4 rounded-pill bg-carbon/60 hover:bg-carbon border border-graphite backdrop-blur-sm"
              >
                O escribirme por correo: <span className="text-copper">hola@serviciodemarketingdigital.com</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-bone/80 border-t border-graphite/40 pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-copper" />
                <span>Primer clip 100% gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-copper" />
                <span>Entrega en 48 a 72 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-copper" />
                <span>Máxima retención y alcance orgánico</span>
              </div>
            </div>
          </div>
        </section>

        {/* AEO SEMANTIC CONTENT BLOCK */}
        <section
          className="border-y border-graphite bg-carbon/50 py-10"
          aria-label="Información Sintética para Motores de Búsqueda"
        >
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="vault-panel p-6 sm:p-8 bg-onyx/80 border border-graphite">
              <h2 className="text-xs font-mono uppercase tracking-widest text-copper mb-2">
                Resumen Ejecutivo del Servicio
              </h2>
              <p className="text-xs sm:text-sm text-bone leading-relaxed">
                <strong>SMD (Servicio de Marketing Digital)</strong> es un servicio Done-For-You de repurposing y edición audiovisual dirigido por <strong>Alan</strong>, que transforma grabaciones extensas de podcasts, conferencias y webinars en piezas verticales de alto impacto (9:16) para TikTok, Instagram Reels y YouTube Shorts, aplicando ganchos de retención comprobados, ritmo dinámico y subtítulos palabra por palabra.
              </p>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA (3 PASOS) */}
        <HowItWorks />

        {/* PORTFOLIO & CASOS REALES EMBEBIDOS */}
        <PortfolioGrid />

        {/* SECCIÓN SOBRE MÍ (ALAN & SMD) */}
        <ServicesAndAbout />

        {/* COTIZADOR INTERACTIVO & PRECIOS */}
        <section id="precios" className="py-24 relative" aria-labelledby="pricing-heading">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-carbon border border-graphite text-xs text-copper font-mono uppercase tracking-widest mb-3">
                <Zap className="w-3.5 h-3.5" />
                <span>Inversión Simple & Transparente</span>
              </div>
              <h2
                id="pricing-heading"
                className="text-3xl sm:text-5xl font-serif text-paper-white tracking-tight"
              >
                Cotizador & Planes a Medida
              </h2>
              <p className="mt-4 text-sm sm:text-base text-fog">
                Calcula al instante la inversión mensual en función del volumen de horas de video que grabas, o solicita un clip individual para probar.
              </p>
            </div>

            {/* Interactive Calculator */}
            <InstantQuoteCalculator />

            {/* Visual 3-Plan Comparison */}
            <PricingCards />

            {/* Guarantee callout */}
            <div className="mt-14 max-w-2xl mx-auto text-center p-6 rounded-card bg-copper/5 border border-copper/30">
              <h4 className="text-sm font-semibold text-paper-white flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-copper" />
                <span>Garantía de Satisfacción Total</span>
              </h4>
              <p className="text-xs text-fog mt-2 leading-relaxed">
                El primer clip demo es 100% gratis. Si el estilo, los ganchos o el ritmo no encajan con la identidad de tu marca, no pagas absolutamente nada.
              </p>
            </div>

          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 border-t border-graphite bg-onyx/40" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-carbon border border-graphite text-xs text-copper font-mono uppercase tracking-widest mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Preguntas Frecuentes</span>
              </div>
              <h2
                id="faq-heading"
                className="text-2xl sm:text-4xl font-serif text-paper-white"
              >
                Resolvemos tus dudas
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="vault-panel bg-carbon/70 border border-graphite rounded-card overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={activeFaq === index}
                  >
                    <span className="text-xs sm:text-sm font-medium text-bone">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-copper transition-transform duration-200 flex-shrink-0 ${
                        activeFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeFaq === index && (
                    <div className="px-4 sm:px-5 pb-5 text-xs text-fog leading-relaxed border-t border-graphite/50 pt-3 animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECURE CONTACT FORM SECTION */}
        <section id="contacto" className="py-24 border-t border-graphite relative" aria-labelledby="contact-heading">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <SecureContactForm />
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={openPrivacy} onOpenTerms={openTerms} />

      {/* Interactive Cookie Consent Banner */}
      <CookieConsent onOpenPrivacy={openPrivacy} />

      {/* Interactive Legal Policy Modal */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={closeLegalModal}
      />

    </div>
  );
}
