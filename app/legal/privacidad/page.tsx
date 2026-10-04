import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | SMD - Servicio de Marketing Digital',
  description: 'Tratamiento de datos y políticas de confidencialidad para el servicio de repurposing de video de SMD y Alan.',
  robots: 'noindex, follow',
};

export default function PrivacyPolicyPage() {
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
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-serif text-paper-white font-semibold">
                Política de Privacidad
              </h1>
              <p className="text-xs text-fog mt-1">
                SMD - Servicio de Marketing Digital • Alan • videos.serviciodemarketingdigital.com
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-sm text-fog leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-paper-white">1. Responsable del Tratamiento</h2>
            <p>
              El responsable de los datos recogidos en este sitio web es Alan en representación de SMD (Servicio de Marketing Digital), con contacto directo en{' '}
              <a href="mailto:hola@serviciodemarketingdigital.com" className="text-copper hover:underline">
                hola@serviciodemarketingdigital.com
              </a>{' '}
              y WhatsApp (+54 9 11 2788-7093).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-paper-white">2. Datos Recopilados y Finalidad</h2>
            <p>
              Recopilamos únicamente información facilitada voluntariamente por el usuario a través de nuestros formularios y canales de mensajería (nombre, correo electrónico, teléfono, enlaces a material de video). La finalidad exclusiva es la cotización, prueba gratuita y posterior ejecución del servicio de edición audiovisual.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-paper-white">3. Confidencialidad y Propiedad Intelectual</h2>
            <p>
              El cliente retiene en todo momento la totalidad de los derechos de autor sobre sus grabaciones y marcas. SMD no venderá, cederá ni difundirá el material original sin la autorización explícita del cliente.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-paper-white">4. Ejercicio de Derechos</h2>
            <p>
              El usuario puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión y oposición enviando una solicitud formal a hola@serviciodemarketingdigital.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
