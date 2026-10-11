"use client";

import React, { useState } from 'react';
import { Check, Sparkles, MessageCircle, Star, ArrowRight } from 'lucide-react';

export default function PricingCards() {
  const [currency, setCurrency] = useState<'USD' | 'ARS'>('USD');

  const plans = [
    {
      name: 'Pack Esencial',
      tagline: 'Presencia constante garantizada (3 clips por semana)',
      priceUsd: '320',
      priceArs: '390.000',
      period: currency === 'USD' ? 'USD / mes' : 'ARS / mes',
      volume: '12 Clips Verticales / mes',
      badge: 'Constancia Semanal',
      isPopular: false,
      features: [
        'Curaduría humana de 1 a 2 videos largos al mes (podcasts/webinars)',
        '12 clips verticales (9:16) con ganchos de retención comprobados',
        'Subtítulos dinámicos sin faltas ortográficas verificados a mano',
        'Encuadre cinematográfico 9:16 centrado en el orador',
        'Entregas semanales listas para publicar en Drive',
        '1 ronda de ajustes y afinaciones incluida',
        'Formato para Reels, TikTok y YouTube Shorts',
      ],
      ctaText: currency === 'USD' ? 'Elegir Pack 12 Clips ($320 USD)' : 'Elegir Pack 12 Clips ($390.000 ARS)',
      whatsappMessage: 'Hola Alan, quiero contratar el Pack Esencial de 12 clips al mes.',
    },
    {
      name: 'Pack Growth',
      tagline: 'Presencia casi diaria en redes (6 clips por semana)',
      priceUsd: '570',
      priceArs: '690.000',
      period: currency === 'USD' ? 'USD / mes' : 'ARS / mes',
      volume: '24 Clips Verticales / mes',
      badge: 'Más Elegido // Máximo Impacto',
      isPopular: true,
      features: [
        'Curaduría de hasta 4 videos largos al mes (≤ 4 horas de material)',
        '24 clips verticales de alto impacto (casi 1 clip por día)',
        'Costo ultra eficiente: ~$23 USD por clip terminado',
        'Detección de ganchos (hooks) con psicología de ventas',
        'B-rolls contextuales y efectos de sonido para sostener atención',
        'Portadas personalizadas en alta resolución para Instagram y YouTube',
        'Entregas continuas cada 48-72 horas',
        'Soporte prioritario por WhatsApp directo con Alan',
      ],
      ctaText: currency === 'USD' ? 'Elegir Pack 24 Clips ($570 USD)' : 'Elegir Pack 24 Clips ($690.000 ARS)',
      whatsappMessage: 'Hola Alan, quiero contratar el Pack Growth de 24 clips al mes. Solicito mi clip de prueba gratis.',
    },
    {
      name: 'Pack Omnipresencia B2B',
      tagline: 'Autoridad absoluta de marca y distribución multicanal',
      priceUsd: '850',
      priceArs: '990.000',
      period: currency === 'USD' ? 'USD / mes' : 'ARS / mes',
      volume: '36 a 40 Clips Verticales / mes',
      badge: 'Mejor Relación Volumen / Valor',
      isPopular: false,
      features: [
        'Curaduría exhaustiva de hasta 8 videos largos al mes',
        '36 a 40 clips terminados (cobertura diaria en todas las plataformas)',
        'Costo récord de ~$21 USD por clip terminado',
        'Estrategia de contenido: redacción de copys y hashtags para cada post',
        'Guiones sugeridos de intro/outro para tus próximas grabaciones',
        'Exportación multiformato: Vertical (9:16), Cuadrado (1:1) y Horizontal',
        'Publicación programada opcional en tus redes',
        'Soporte VIP 24/7 y canal exclusivo en Slack / WhatsApp',
      ],
      ctaText: currency === 'USD' ? 'Elegir Omnipresencia ($850 USD)' : 'Elegir Omnipresencia ($990.000 ARS)',
      whatsappMessage: 'Hola Alan, me interesa el Pack Omnipresencia B2B de 36-40 clips al mes para mi empresa.',
    },
  ];

  const officialWhatsapp = '5491127887093';

  return (
    <div className="w-full space-y-10">
      
      {/* Switch de Divisa USD / ARS */}
      <div className="flex items-center justify-center gap-3">
        <span className="text-xs font-semibold text-fog uppercase tracking-wider font-sans">Moneda:</span>
        <div className="inline-flex p-1 rounded-pill bg-carbon border border-graphite shadow-md">
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-4 py-1.5 rounded-pill text-xs font-bold transition-all ${
              currency === 'USD'
                ? 'bg-copper text-obsidian shadow-sm'
                : 'text-fog hover:text-paper-white'
            }`}
          >
            USD (Internacional / Latam / España)
          </button>
          <button
            type="button"
            onClick={() => setCurrency('ARS')}
            className={`px-4 py-1.5 rounded-pill text-xs font-bold transition-all ${
              currency === 'ARS'
                ? 'bg-copper text-obsidian shadow-sm'
                : 'text-fog hover:text-paper-white'
            }`}
          >
            ARS (Argentina)
          </button>
        </div>
      </div>

      {/* Grid de 3 Planes Base Visibles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {plans.map((p, idx) => (
          <div
            key={idx}
            className={`rounded-card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative text-left ${
              p.isPopular
                ? 'bg-carbon border-2 border-copper shadow-2xl shadow-copper/15 lg:-translate-y-2'
                : 'bg-onyx/80 border border-graphite hover:border-slate/60 shadow-lg'
            }`}
          >
            {/* Badge superior */}
            {p.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-copper text-obsidian text-[11px] font-bold font-sans uppercase tracking-widest px-3.5 py-1 rounded-pill shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <Star className="w-3 h-3 fill-obsidian" />
                <span>{p.badge}</span>
              </div>
            )}

            <div className="space-y-5">
              <div>
                {!p.isPopular && (
                  <span className="inline-block text-[11px] font-sans font-medium text-ash uppercase tracking-widest mb-1">
                    {p.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-paper-white font-sans">{p.name}</h3>
                <p className="text-xs text-fog mt-1 leading-relaxed">{p.tagline}</p>
                <div className="mt-2.5 inline-block px-3 py-1 rounded-pill bg-copper/10 border border-copper/30 text-copper text-xs font-semibold">
                  {p.volume}
                </div>
              </div>

              {/* Precio */}
              <div className="py-4 border-y border-graphite">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs text-fog font-medium">{currency === 'USD' ? 'USD $' : 'ARS $'}</span>
                  <span className="text-4xl sm:text-5xl font-serif text-paper-white font-bold tracking-tight">
                    {currency === 'USD' ? p.priceUsd : p.priceArs}
                  </span>
                </div>
                <span className="text-xs text-fog font-sans block mt-1">
                  {currency === 'USD' ? 'Factura E internacional vía Stripe / PayPal' : 'Factura C oficial deducible en AFIP'}
                </span>
              </div>

              {/* Lista de Beneficios */}
              <ul className="space-y-3 text-xs sm:text-sm text-silver">
                {p.features.map((f, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <a
                href={`https://wa.me/${officialWhatsapp}?text=${encodeURIComponent(p.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-6 rounded-pill text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  p.isPopular
                    ? 'bg-copper hover:bg-copper/90 text-obsidian shadow-lg shadow-copper/25 hover:scale-[1.02]'
                    : 'bg-carbon hover:bg-slate/40 text-paper-white border border-graphite hover:border-steel'
                }`}
              >
                <span>{p.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
