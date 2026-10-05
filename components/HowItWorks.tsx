import React from 'react';
import { UploadCloud, Film, Sparkles, Clock, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Subes tu video largo',
      description:
        'Me compartes el enlace de YouTube o archivo en Google Drive / Dropbox de tu podcast, clase magistral, entrevista o webinar grabado.',
      icon: UploadCloud,
      meta: 'Soporta 1080p y 4K',
    },
    {
      number: '02',
      title: 'Edición estratégica y curaduría de élite',
      description:
        'Identifico los momentos de mayor retención e impacto, aplico encuadre vertical dinámico 9:16 al orador y agrego subtítulos palabra por palabra con ritmo ágil.',
      icon: Film,
      meta: 'Ganchos de Retención + Subtítulos + Ritmo',
    },
    {
      number: '03',
      title: 'Recibes tus clips listos',
      description:
        'En 48 a 72 horas tienes tu lote completo de videos en tu carpeta privada de Drive, listos para publicar directamente en Reels, TikTok y YouTube Shorts.',
      icon: Sparkles,
      meta: 'Entrega en 48-72h',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 relative" aria-labelledby="how-it-works-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-copper font-medium">
            Proceso Simple y Automatizado
          </span>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-5xl font-serif text-paper-white tracking-tight mt-2"
          >
            Cómo Funciona el Servicio
          </h2>
          <p className="mt-4 text-sm sm:text-base text-fog leading-relaxed">
            Delega el trabajo técnico y repetitivo de edición. Convierte cada hora de grabación en un mes completo de contenido orgánico en 3 pasos.
          </p>
        </div>

        {/* 3 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="vault-card p-8 bg-onyx border border-graphite hover:border-slate transition-all relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header with Didone Number and Icon */}
                  <div className="flex items-baseline justify-between border-b border-graphite pb-6 mb-6">
                    <span className="font-serif text-5xl sm:text-6xl text-copper font-normal group-hover:text-bone transition-colors">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-pill bg-carbon border border-graphite group-hover:border-copper/40 transition-colors">
                      <Icon className="w-5 h-5 text-copper" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-xl font-serif text-paper-white font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-fog leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-graphite/60 flex items-center justify-between text-[11px] font-mono text-copper">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-copper" />
                    {step.meta}
                  </span>
                  <span className="text-fog">Paso {idx + 1} de 3</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
