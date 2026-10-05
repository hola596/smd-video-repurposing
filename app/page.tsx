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
  Radio,
  FolderArchive,
  Plane,
  Layers,
  GraduationCap,
  Target,
  CheckCircle2,
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
      q: '¿Para qué sirve exactamente reciclar videos largos en clips cortos?',
      a: 'Sirve para no desperdiciar horas de grabación que ya hiciste. Si tienes podcasts, conferencias, webinars o cursos, los reciclamos en piezas verticales de 30 a 60 segundos para alimentar TikTok, Reels y YouTube Shorts todos los días, manteniendo tu presencia activa sin que tengas que grabar contenido nuevo constantemente.',
    },
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
              <span>RECICLADO AUDIOVISUAL & EDICIÓN ESTRATÉGICA</span>
            </div>

            {/* Main H1 Title (Didone Serif Luxury) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-paper-white tracking-tight max-w-5xl mx-auto leading-[1.12] drop-shadow-2xl">
              Reciclo videos largos en clips cortos para Reels, TikTok y YouTube Shorts.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 sm:mt-8 text-base sm:text-xl text-bone/90 max-w-3xl mx-auto font-sans font-normal leading-relaxed drop-shadow-md">
              ¿Para qué sirve? Si tienes podcasts, webinars o grabaciones de 1 hora, los reciclo en piezas verticales de 30 a 60 segundos con ganchos de retención y subtítulos dinámicos. Mantén tu presencia activa todos los días sin tener que grabar contenido nuevo.
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
                <strong>SMD (Servicio de Marketing Digital)</strong> es un servicio Done-For-You dirigido por <strong>Alan</strong>: reciclo videos largos en clips cortos (9:16) para TikTok, Instagram Reels y YouTube Shorts, resolviendo la falta de tiempo de podcasters, educadores y marcas para mantener presencia constante en redes sin grabar todos los días.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN: PARA QUÉ SIRVE & PUNTOS DE DOLOR */}
        <section className="py-24 relative bg-onyx/60 border-b border-graphite" aria-labelledby="pain-points-heading">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-pill bg-carbon border border-graphite text-xs text-copper font-mono uppercase tracking-widest mb-4">
                <Target className="w-3.5 h-3.5" />
                <span>¿Para Qué Sirve el Reciclado de Video?</span>
              </div>
              <h2
                id="pain-points-heading"
                className="text-3xl sm:text-5xl font-serif text-paper-white tracking-tight"
              >
                Resuelve los 5 grandes problemas de visibilidad de tu contenido
              </h2>
              <p className="mt-4 text-sm sm:text-base text-fog leading-relaxed">
                Ya invertiste tiempo y recursos grabando horas de gran valor. Si no las distribuyes en clips cortos, estás perdiendo el 90% de su audiencia potencial. Aquí es exactamente donde el servicio te ahorra tiempo y multiplica tu presencia:
              </p>
            </div>

            {/* 5 Pain Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* 1. Poca visibilidad orgánica de episodios completos */}
              <div className="vault-card p-6 bg-carbon/85 border border-graphite hover:border-copper/60 transition-all rounded-2xl flex flex-col justify-between group shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center text-copper mb-4 group-hover:scale-105 transition-transform">
                    <Radio className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-copper font-semibold block mb-1">
                    Punto de Dolor #1
                  </span>
                  <h3 className="text-base font-semibold text-paper-white mb-2 leading-snug">
                    Poca visibilidad orgánica de episodios completos
                  </h3>
                  <p className="text-xs text-fog leading-relaxed">
                    Subir un episodio de 45 o 60 minutos a YouTube o Spotify ya no es suficiente: los algoritmos no recomiendan videos largos a personas que no te conocen. Sin clips cortos distribuidos en TikTok y Reels, tu contenido queda atrapado solo entre quienes ya te siguen.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-graphite/60 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Solución: Clips cortos que atraen miles de nuevos espectadores</span>
                </div>
              </div>

              {/* 2. Webinars archivados en Zoom/Drive */}
              <div className="vault-card p-6 bg-carbon/85 border border-graphite hover:border-copper/60 transition-all rounded-2xl flex flex-col justify-between group shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center text-copper mb-4 group-hover:scale-105 transition-transform">
                    <FolderArchive className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-copper font-semibold block mb-1">
                    Punto de Dolor #2
                  </span>
                  <h3 className="text-base font-semibold text-paper-white mb-2 leading-snug">
                    Webinars archivados en Zoom o Drive sin generar tracción
                  </h3>
                  <p className="text-xs text-fog leading-relaxed">
                    Preparar y dictar una clase magistral en vivo toma días de esfuerzo. Al terminar el evento, la grabación queda guardada en la nube sin volver a generar un solo lead ni visualización post-evento.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-graphite/60 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Solución: Reciclado de perlas de valor en activos diarios</span>
                </div>
              </div>

              {/* 3. Dificultad para mantener presencia constante en redes */}
              <div className="vault-card p-6 bg-carbon/85 border border-graphite hover:border-copper/60 transition-all rounded-2xl flex flex-col justify-between group shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center text-copper mb-4 group-hover:scale-105 transition-transform">
                    <Plane className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-copper font-semibold block mb-1">
                    Punto de Dolor #3
                  </span>
                  <h3 className="text-base font-semibold text-paper-white mb-2 leading-snug">
                    Difícil mantener presencia mientras viajas o das cursos
                  </h3>
                  <p className="text-xs text-fog leading-relaxed">
                    Atiendes clientes, dictas clases o estás de viaje. Es humanamente imposible sentarse a grabar reels individuales todos los días. Al reciclar lo que ya grabaste, tienes publicaciones continuas en piloto automático.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-graphite/60 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Solución: 1 hora de video = semanas de presencia constante</span>
                </div>
              </div>

              {/* 4. Volumen inmanejable de horas de grabación */}
              <div className="vault-card p-6 bg-carbon/85 border border-graphite hover:border-copper/60 transition-all rounded-2xl flex flex-col justify-between group shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center text-copper mb-4 group-hover:scale-105 transition-transform">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-copper font-semibold block mb-1">
                    Punto de Dolor #4
                  </span>
                  <h3 className="text-base font-semibold text-paper-white mb-2 leading-snug">
                    Volumen inmanejable de horas para equipos pequeños
                  </h3>
                  <p className="text-xs text-fog leading-relaxed">
                    Revisar decenas de horas de video, cortar los silencios, seleccionar los mejores momentos, encuadrar en 9:16 y subtitular palabra por palabra consume cientos de horas que tu equipo o tú no pueden destinar.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-graphite/60 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Solución: Servicio Done-For-You llave en mano en 48-72h</span>
                </div>
              </div>

              {/* 5. Necesidad constante de nutrir audiencias para lanzamientos */}
              <div className="vault-card p-6 bg-carbon/85 border border-graphite hover:border-copper/60 transition-all rounded-2xl flex flex-col justify-between group shadow-lg md:col-span-2 lg:col-span-2">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center text-copper mb-4 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-copper font-semibold block mb-1">
                    Punto de Dolor #5
                  </span>
                  <h3 className="text-base font-semibold text-paper-white mb-2 leading-snug">
                    Necesidad constante de nutrir audiencias para lanzamientos de cursos
                  </h3>
                  <p className="text-xs text-fog leading-relaxed">
                    Para que una apertura de plazas o lanzamiento de infoproducto funcione con éxito, necesitas educar y derribar objeciones de tu comunidad semanas antes. Reciclamos los mejores fragmentos de tus cursos o consultorías pasadas para preparar a tus futuros alumnos sin improvisar contenido a última hora.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-graphite/60 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Solución: Audiencia educada y convencida lista para comprar tu oferta</span>
                </div>
              </div>

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
