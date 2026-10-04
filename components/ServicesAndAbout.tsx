import React from 'react';
import Image from 'next/image';
import { Award, Zap, Shield, Sparkles, Check, ArrowUpRight } from 'lucide-react';

export default function ServicesAndAbout() {
  const guarantees = [
    {
      title: 'Cero Faltas de Ortografía',
      desc: 'Revisión minuciosa y precisa de cada palabra en los subtítulos dinámicos.',
    },
    {
      title: 'Encuadre Centrado 9:16',
      desc: 'Seguimiento del rostro del orador y cortes limpios sin distorsión.',
    },
    {
      title: 'Ganchos de Alta Retención',
      desc: 'Selección de los primeros 3 segundos para capturar el scroll del usuario.',
    },
    {
      title: 'Entrega Garantizada 48-72h',
      desc: 'Flujo predecible para que nunca te quedes sin publicaciones en tu calendario.',
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 relative" aria-labelledby="about-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="vault-card p-8 sm:p-14 bg-onyx border border-graphite relative overflow-hidden">
          {/* Subtle gold flare */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-copper/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Author Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-carbon border border-graphite text-xs text-copper font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sobre Mí & SMD</span>
              </div>

              <h2
                id="about-heading"
                className="text-3xl sm:text-5xl font-serif text-paper-white tracking-tight"
              >
                Detrás de la edición
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-bone font-normal leading-relaxed">
                <p>
                  Soy <strong className="text-paper-white font-semibold">Alan</strong>, fundador de{' '}
                  <strong className="text-paper-white font-semibold">SMD (Servicio de Marketing Digital)</strong>.
                </p>
                <p className="text-fog">
                  Ayudo a podcasters, consultores, formadores y empresas B2B a resolver el cuello de botella más común: tienen horas de contenido valioso grabado, pero no tienen tiempo ni equipo para trocearlo en piezas cortas diarias.
                </p>
                <p className="text-fog">
                  Aplico un criterio editorial de élite y técnicas avanzadas de retención para entregar piezas con impacto garantizado, subtítulos sin faltas y ritmo ágil.
                </p>
              </div>

              {/* Guarantees checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {guarantees.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-copper/20 text-copper mt-0.5 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-paper-white">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-fog mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5491127887093?text=Hola%20Alan,%20quiero%20conocer%20m%C3%A1s%20sobre%20el%20servicio%20de%20repurposing%20de%20video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-pill bg-paper-white hover:bg-bone text-obsidian text-xs font-semibold tracking-wider flex items-center gap-2 transition-all shadow-md hover:scale-105"
                >
                  <span>Conversar con Alan por WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-fog font-mono">
                  +54 9 11 2788-7093
                </span>
              </div>
            </div>

            {/* Right Column: Brand Badge / Editorial Metric Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="vault-panel p-6 sm:p-8 bg-carbon border border-graphite rounded-card text-center space-y-4">
                <div className="relative h-12 w-auto mx-auto flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Logo SMD"
                    width={180}
                    height={48}
                    className="h-10 w-auto object-contain mx-auto"
                  />
                </div>
                <div className="pt-2">
                  <div className="text-4xl font-serif text-paper-white font-bold">
                    100%
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-copper mt-1">
                    Garantía de Satisfacción
                  </div>
                  <p className="text-xs text-fog mt-2">
                    Si tu primer video demo no cumple con tus expectativas de retención y estilo, no pagas absolutamente nada.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="vault-panel p-4 bg-carbon border border-graphite rounded-card text-center">
                  <div className="text-2xl font-serif text-paper-white font-bold">
                    48-72h
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-fog mt-1">
                    Tiempo de Entrega
                  </div>
                </div>
                <div className="vault-panel p-4 bg-carbon border border-graphite rounded-card text-center">
                  <div className="text-2xl font-serif text-paper-white font-bold">
                    9:16 HD
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-fog mt-1">
                    Formato Vertical
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
