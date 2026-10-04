import React from 'react';
import { Check, Sparkles, MessageCircle, Star } from 'lucide-react';

export default function PricingCards() {
  const plans = [
    {
      name: 'Plan Prueba',
      tagline: 'Ideal para probar sin compromisos',
      price: '45',
      period: 'pago único por video',
      badge: 'Sin Recurrencia',
      isPopular: false,
      features: [
        'Procesamiento de 1 video de hasta 60 min',
        'Hasta 5 clips verticales terminados',
        'Subtítulos dinámicos palabra por palabra',
        'Encuadre inteligente 9:16 al orador',
        'Entrega en Google Drive en 48 horas',
        '1 ronda de ajustes incluida',
      ],
      ctaText: 'Pedir Plan Prueba ($45 USD)',
      whatsappMessage: 'Hola Alan, quiero contratar el Plan Prueba de 1 video ($45 USD).',
    },
    {
      name: 'Plan Creador Básico',
      tagline: 'Para creadores con publicación constante',
      price: '200',
      period: 'USD / mes',
      badge: 'Más Elegido',
      isPopular: true,
      features: [
        'Hasta 7 videos largos (≤ 7 horas al mes)',
        'Hasta 40 clips verticales terminados',
        'Costo de ~$5 USD por clip final',
        'Detección de ganchos virales de alta retención',
        'Corrección ortográfica humana estricta',
        'Plantillas de diseño adaptadas a tu marca',
        'Entrega continua cada 48-72h',
        'Soporte prioritario por WhatsApp',
      ],
      ctaText: 'Comenzar Plan Creador ($200/mes)',
      whatsappMessage:
        'Hola Alan, quiero comenzar con el Plan Creador Básico de $200 USD/mes. Quiero mi clip demo gratis primero.',
    },
    {
      name: 'Plan Escala Premium',
      tagline: 'Para podcasters y empresas con alta frecuencia',
      price: '400',
      period: 'USD / mes',
      badge: 'Mejor Relación Valor/Precio',
      isPopular: false,
      features: [
        'Hasta 16 videos largos (≤ 16 horas al mes)',
        'Hasta 100 clips verticales terminados',
        'Costo de ~$4 USD por clip final',
        'B-Roll, efectos de sonido y zoom sutil',
        'Formatos optimizados para TikTok, Reels y Shorts',
        'Entrega en 24-48 horas prioritarias',
        'Canal privado de Slack/WhatsApp directo',
        'Garantía total de satisfacción',
      ],
      ctaText: 'Comenzar Plan Escala ($400/mes)',
      whatsappMessage:
        'Hola Alan, quiero solicitar el Plan Escala Premium de $400 USD/mes para copar mis redes con 100 clips.',
    },
  ];

  return (
    <div className="mt-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-serif text-paper-white">
          Comparativa Directa de Planes
        </h3>
        <p className="text-xs sm:text-sm text-fog mt-2">
          Precios transparentes y sin contratos de permanencia. Cancela o cambia de plan en cualquier momento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan) => {
          const whatsappUrl = `https://wa.me/5491127887093?text=${encodeURIComponent(
            plan.whatsappMessage
          )}`;

          return (
            <div
              key={plan.name}
              className={`vault-card p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-onyx border-copper shadow-gilded ring-1 ring-copper/50 -translate-y-2'
                  : 'bg-onyx border-graphite hover:border-slate'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-pill text-[10px] font-mono uppercase tracking-wider font-semibold ${
                      plan.isPopular
                        ? 'bg-copper text-obsidian'
                        : 'bg-carbon text-fog border border-graphite'
                    }`}
                  >
                    {plan.isPopular && <Star className="w-3 h-3 fill-obsidian" />}
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="border-b border-graphite pb-6 mb-6">
                  <h4 className="text-xl font-serif text-paper-white font-semibold">
                    {plan.name}
                  </h4>
                  <p className="text-xs text-fog mt-1 min-h-[32px]">
                    {plan.tagline}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-serif text-paper-white font-bold">
                      ${plan.price}
                    </span>
                    <span className="text-xs text-fog font-sans">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 text-xs text-bone">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-pill text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
                    plan.isPopular
                      ? 'bg-paper-white hover:bg-bone text-obsidian shadow-md hover:scale-105'
                      : 'bg-carbon hover:bg-graphite text-bone border border-slate'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
