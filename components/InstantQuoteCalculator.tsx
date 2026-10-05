'use client';

import React, { useState } from 'react';
import { Minus, Plus, MessageCircle, CheckCircle2, Gift, Zap, ShieldCheck } from 'lucide-react';

export default function InstantQuoteCalculator() {
  const [videoCount, setVideoCount] = useState<number>(4);
  const [billingMode, setBillingMode] = useState<'monthly' | 'single'>('monthly');

  const increment = () => setVideoCount((prev) => Math.min(20, prev + 1));
  const decrement = () => setVideoCount((prev) => Math.max(1, prev - 1));

  // Dynamic pricing calculation
  let packageName = '';
  let packagePrice = 0;
  let packagePeriod = '';
  let clipsEstimate = 0;
  let costPerClip = 0;
  let packageDescription = '';
  let isCustom = false;

  if (billingMode === 'single') {
    packageName = 'Servicio por Video Individual';
    packagePrice = 45;
    packagePeriod = 'por video';
    clipsEstimate = 5;
    costPerClip = 9;
    packageDescription =
      'Procesamos 1 video largo de hasta 60 minutos y te entregamos hasta 5 clips verticales terminados y listos para publicar.';
  } else if (videoCount <= 7) {
    packageName = 'Paquete Creador Básico';
    packagePrice = 200;
    packagePeriod = 'USD / mes';
    clipsEstimate = 40;
    costPerClip = 5;
    packageDescription = `Procesa hasta 7 videos de 1 hora al mes (o equivalente) y recibe hasta 40 clips verticales de alto impacto.`;
  } else if (videoCount <= 16) {
    packageName = 'Paquete Escala Premium';
    packagePrice = 400;
    packagePeriod = 'USD / mes';
    clipsEstimate = 100;
    costPerClip = 4;
    packageDescription = `Procesa hasta 16 videos de 1 hora al mes y recibe hasta 100 clips verticales listos para copar tus canales.`;
  } else {
    packageName = 'Paquete Enterprise / Alto Volumen';
    packagePrice = 400 + (videoCount - 16) * 25;
    packagePeriod = 'USD / mes (Estimado)';
    clipsEstimate = Math.round(videoCount * 6.25);
    costPerClip = 4;
    packageDescription = `Capacidad a medida para producción intensiva (>16 videos/mes) con entrega prioritaria en 24-48 horas.`;
    isCustom = true;
  }

  // Dynamic WhatsApp URL
  const whatsappText =
    billingMode === 'single'
      ? encodeURIComponent(
          'Hola Alan, vi la opción de 1 video individual en la web ($45 USD). Quiero solicitar mi clip demo gratis primero.'
        )
      : encodeURIComponent(
          `Hola Alan, usé el cotizador de la web para ${videoCount} videos largos al mes. Quiero solicitar mi clip demo gratis.`
        );

  const whatsappUrl = `https://wa.me/5491127887093?text=${whatsappText}`;

  return (
    <div className="w-full max-w-[840px] mx-auto">
      <div className="vault-card p-6 sm:p-10 border border-graphite bg-onyx relative overflow-hidden shadow-2xl">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-copper/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-copper font-medium">
              Simulador de Inversión
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-paper-white mt-1">
              Cotiza tu producción en segundos
            </h3>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex p-1 rounded-pill bg-carbon border border-graphite">
            <button
              type="button"
              onClick={() => setBillingMode('monthly')}
              className={`px-4 py-1.5 rounded-pill text-xs font-medium transition-all ${
                billingMode === 'monthly'
                  ? 'bg-paper-white text-obsidian shadow-sm font-semibold'
                  : 'text-fog hover:text-bone'
              }`}
            >
              Plan Mensual
            </button>
            <button
              type="button"
              onClick={() => setBillingMode('single')}
              className={`px-4 py-1.5 rounded-pill text-xs font-medium transition-all ${
                billingMode === 'single'
                  ? 'bg-paper-white text-obsidian shadow-sm font-semibold'
                  : 'text-fog hover:text-bone'
              }`}
            >
              1 Solo Video
            </button>
          </div>
        </div>

        {/* Free Demo Prominent Banner */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-card bg-copper/10 border border-copper/30 flex items-center gap-3">
          <div className="p-2 rounded-full bg-copper/20 text-copper flex-shrink-0">
            <Gift className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-bone font-medium leading-relaxed">
            <strong className="text-paper-white font-semibold">🎁 Tu primer video DEMO es 100% GRATIS:</strong> Te entregamos 1 clip terminado sin compromiso para que evalúes el ritmo, subtítulos y calidad.
          </p>
        </div>

        {/* Interactive Controls if monthly */}
        {billingMode === 'monthly' ? (
          <div className="space-y-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label
                htmlFor="video-slider"
                className="text-sm sm:text-base font-medium text-bone"
              >
                ¿Cuántos videos largos (podcasts, webinars o clases) grabas al mes?
              </label>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-serif text-paper-white font-bold">
                  {videoCount}
                </span>
                <span className="text-xs text-fog uppercase tracking-wider">
                  {videoCount === 1 ? 'video/mes' : 'videos/mes'}
                </span>
              </div>
            </div>

            {/* Range Slider and +/- controls */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={decrement}
                disabled={videoCount <= 1}
                aria-label="Disminuir videos"
                className="w-10 h-10 rounded-pill bg-carbon border border-graphite hover:border-slate text-bone flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              >
                <Minus className="w-4 h-4" />
              </button>

              <div className="relative flex-1 py-2">
                <input
                  id="video-slider"
                  type="range"
                  min="1"
                  max="20"
                  value={videoCount}
                  onChange={(e) => setVideoCount(parseInt(e.target.value, 10))}
                  className="w-full cursor-pointer"
                  aria-valuemin={1}
                  aria-valuemax={20}
                  aria-valuenow={videoCount}
                  aria-label="Cantidad de videos largos grabados al mes"
                />
                <div className="flex justify-between text-[11px] text-fog mt-2 font-mono">
                  <span>1 video</span>
                  <span>7 (Básico)</span>
                  <span>16 (Escala)</span>
                  <span>20+</span>
                </div>
              </div>

              <button
                type="button"
                onClick={increment}
                disabled={videoCount >= 20}
                aria-label="Aumentar videos"
                className="w-10 h-10 rounded-pill bg-carbon border border-graphite hover:border-slate text-bone flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-card bg-carbon border border-graphite mb-8">
            <p className="text-sm text-bone">
              ¿Quieres probar el servicio sin recurrencia mensual? Procesamos 1 sola grabación de hasta 60 min con entrega en 48hs.
            </p>
          </div>
        )}

        {/* Dynamic Quote Result Card */}
        <div className="p-6 rounded-card bg-carbon border border-graphite space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-graphite pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-copper/15 border border-copper/30 text-[11px] font-mono text-copper mb-2">
                <Zap className="w-3 h-3" />
                <span>Recomendación Inteligente</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif text-paper-white font-semibold">
                {packageName}
              </h4>
              <p className="text-xs sm:text-sm text-fog mt-1 max-w-md">
                {packageDescription}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-3xl sm:text-4xl font-serif text-paper-white font-bold tracking-tight">
                ${packagePrice}{' '}
                <span className="text-xs sm:text-sm font-sans font-normal text-fog">
                  {packagePeriod}
                </span>
              </div>
              <div className="text-xs text-copper font-medium mt-1">
                Aprox. ~${costPerClip} USD por clip vertical final
              </div>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-bone">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-copper flex-shrink-0" />
              <span>Hasta {clipsEstimate} micro-videos verticales editados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-copper flex-shrink-0" />
              <span>Detección de ganchos de alta retención y criterio editorial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-copper flex-shrink-0" />
              <span>Subtítulos dinámicos palabra por palabra animados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-copper flex-shrink-0" />
              <span>Encuadre vertical inteligente 9:16 para orador</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-copper flex-shrink-0" />
              <span>Entrega organizada en Google Drive en 48-72h</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-copper flex-shrink-0" />
              <span>Garantía total: Si no te gusta la demo, no pagas</span>
            </div>
          </div>

          {/* Dynamic WhatsApp CTA Button */}
          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-pill bg-paper-white hover:bg-bone text-obsidian font-semibold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-200 shadow-lg hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-copper"
              id="cta-whatsapp-quote"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
              <span>
                {billingMode === 'single'
                  ? 'Pedir cotización de 1 video por WhatsApp'
                  : `Pedir cotización de ${videoCount} videos por WhatsApp`}
              </span>
            </a>
            <p className="text-center text-[11px] text-fog mt-2">
              Respuesta directa en menos de 15 minutos por Alan • Sin spam ni llamadas molestas
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
