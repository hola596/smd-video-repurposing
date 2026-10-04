import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | SMD - Servicio de Marketing Digital',
  description: 'Condiciones de contratación y entrega del servicio de edición de video de Alan / SMD.',
  robots: 'noindex, follow',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-obsidian text-bone py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-copper hover:text-bone transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>

        <div className="border-b border-graphite pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-carbon text-copper border border-graphite">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-serif text-paper-white font-semibold">
                Términos y Condiciones del Servicio
              </h1>
              <p className="text-xs text-fog mt-1">
                SMD - Servicio de Marketing Digital • Alan • videos.serviciodemarketingdigital.com
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-sm text-fog leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-paper-white">1. Alcance del Repurposing Audiovisual</h2>
            <p>
              SMD provee un servicio integral de transformación de contenidos largos (webinars, podcasts, clases y entrevistas) a formato vertical (9:16) con ganchos, subtítulos dinámicos y adaptación de ritmo para TikTok, Reels y Shorts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-paper-white">2. Garantía y Demo Gratuita</h2>
            <p>
              El cliente tiene derecho a recibir 1 clip vertical editado como prueba sin costo. La contratación formal de los planes mensuales o individuales se efectúa únicamente tras la satisfacción con el estilo y la calidad entregada.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-paper-white">3. Tiempos de Entrega</h2>
            <p>
              Los entregables se depositan en una carpeta de Google Drive designada para el cliente en un plazo estipulado de 48 a 72 horas hábiles tras recibir el enlace o archivo de origen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-paper-white">4. Facturación y Política de Cancelación</h2>
            <p>
              Los servicios mensuales no contemplan cláusula de permanencia mínima. El cliente puede solicitar la pausa o cancelación de su suscripción en cualquier momento antes de que inicie su próximo periodo mensual de edición.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
