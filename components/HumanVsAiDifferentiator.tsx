"use client";

import React from "react";
import { Brain, Cpu, CheckCircle2, XCircle, Sparkles, AlertTriangle, ShieldCheck } from "lucide-react";

export default function HumanVsAiDifferentiator() {
  const comparisons = [
    {
      title: "Selección del Momento Exacto (Curaduría)",
      aiProblem: "Corta mecánicamente donde baja el volumen o termina una frase, cortando la idea a la mitad y perdiendo el clímax emocional.",
      humanAdvantage: "Un editor senior escucha el contexto comercial e identifica la pepita de oro que despierta deseo de compra o autoridad técnica."
    },
    {
      title: "Ortografía & Vocabulario Técnico B2B",
      aiProblem: "Plagado de errores gramaticales en nombres propios, jerga médica, financiera o industrial, degradando el estatus de tu marca.",
      humanAdvantage: "Corrección ortográfica y de sintaxis humana estricta al 100%. Cada palabra y término técnico se verifica manualmente."
    },
    {
      title: "Psicología de Retención y Ganchos (Hooks)",
      aiProblem: "Coloca emojis infantiles aleatorios y transiciones genéricas sin relación con la identidad o seriedad de tu negocio.",
      humanAdvantage: "Diseño tipográfico editorial, B-roll relevante con sentido narrativo y micro-ganchos en los primeros 3 segundos para frenar el scroll."
    },
    {
      title: "Intención Comercial y Llamados a la Acción (CTA)",
      aiProblem: "Te entrega un clip aislado sin objetivo comercial. No genera leads, solo reproducciones pasivas que no pagan sueldos.",
      humanAdvantage: "Estructura pensada para conversión: remate con llamado directo a agendar llamada, escribir al WhatsApp o descargar tu recurso."
    }
  ];

  return (
    <section
      id="diferenciacion-ia"
      className="relative w-full bg-carbon py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-graphite overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-copper/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-container mx-auto space-y-14 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-obsidian border border-graphite text-[12px] font-sans tracking-widest uppercase text-copper shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-copper" />
            <span>CRITERIO EDITORIAL vs AUTOMATIZACIÓN CIEGA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-paper-white tracking-tight leading-tight">
            ¿Por qué herramientas como OpusClip o Submagic <br className="hidden sm:block" />
            <span className="text-copper italic">no consiguen clientes para tu negocio?</span>
          </h2>

          <p className="text-sm sm:text-base text-fog max-w-2xl mx-auto leading-relaxed">
            Las herramientas de IA automática son útiles para volumen genérico, pero destruyen la autoridad en marcas y servicios de alto valor. Compara la diferencia entre un algoritmo automático y un equipo con criterio editorial:
          </p>
        </div>

        {/* Tabla Comparativa en Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Columna A: Herramientas de IA sola (OpusClip / Submagic) */}
          <div className="p-7 sm:p-8 rounded-card bg-obsidian/90 border border-coral/30 space-y-6 shadow-xl relative">
            <div className="flex items-center justify-between border-b border-graphite pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-coral/10 border border-coral/30 flex items-center justify-center text-coral">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-paper-white font-sans">Herramientas de IA Sola</h3>
                  <span className="text-xs text-coral font-sans font-medium">(OpusClip, Submagic, etc.)</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-coral/15 text-coral text-xs font-bold font-sans">
                Algoritmo Ciego
              </span>
            </div>

            <div className="space-y-5">
              {comparisons.map((c, i) => (
                <div key={i} className="space-y-1.5 text-left">
                  <div className="flex items-center gap-2 text-xs font-bold text-ash uppercase font-sans">
                    <XCircle className="w-4 h-4 text-coral shrink-0" />
                    <span>{c.title}</span>
                  </div>
                  <p className="text-xs text-silver pl-6 leading-relaxed">
                    {c.aiProblem}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-coral/5 border border-coral/20 text-xs text-coral/90 text-left">
              <strong>Resultado:</strong> Videos genéricos que se ven como plantillas infantiles, ahuyentan a decisores B2B y no generan ventas.
            </div>
          </div>

          {/* Columna B: Nuestro Servicio Híbrido (Criterio Humano + IA) */}
          <div className="p-7 sm:p-8 rounded-card bg-carbon border-2 border-copper space-y-6 shadow-2xl relative shadow-copper/10">
            <div className="flex items-center justify-between border-b border-graphite pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center text-copper">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-paper-white font-sans">Nuestro Criterio Humano</h3>
                  <span className="text-xs text-copper font-sans font-medium">(Editores Profesionales + Aceleración IA)</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-copper/20 text-copper text-xs font-bold font-sans">
                Estrategia Editorial
              </span>
            </div>

            <div className="space-y-5">
              {comparisons.map((c, i) => (
                <div key={i} className="space-y-1.5 text-left">
                  <div className="flex items-center gap-2 text-xs font-bold text-copper uppercase font-sans">
                    <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                    <span>{c.title}</span>
                  </div>
                  <p className="text-xs text-bone pl-6 leading-relaxed font-medium">
                    {c.humanAdvantage}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-copper/10 border border-copper/30 text-xs text-paper-white text-left">
              <strong>Resultado:</strong> Contenido con presencia cinematográfica que preserva tu estatus, engancha al decisor y llena tu calendario de reuniones.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
