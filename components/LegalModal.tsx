'use client';

import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  if (!isOpen || !type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-onyx border border-graphite rounded-card flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-graphite flex items-center justify-between bg-carbon/60">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-copper" />
            ) : (
              <FileText className="w-5 h-5 text-copper" />
            )}
            <h3
              id="legal-modal-title"
              className="text-base sm:text-lg font-serif text-paper-white font-medium"
            >
              {type === 'privacy'
                ? 'Política de Privacidad y Tratamiento de Datos'
                : 'Términos y Condiciones del Servicio'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-fog hover:text-paper-white hover:bg-graphite/50 transition-colors"
            aria-label="Cerrar modal legal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-bone leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="text-fog">
                Última actualización: Octubre 2026. Responsable: <strong>Alan / SMD (Servicio de Marketing Digital)</strong>. Correo de contacto:{' '}
                <a href="mailto:hola@serviciodemarketingdigital.com" className="text-copper hover:underline">
                  hola@serviciodemarketingdigital.com
                </a>
                .
              </p>

              <h4 className="text-sm font-semibold text-paper-white pt-2">1. Información que recopilamos</h4>
              <p>
                Recopilamos únicamente los datos necesarios para brindar el servicio de repurposing de video: nombre, correo electrónico, número de WhatsApp y los enlaces o archivos de video que compartes voluntariamente para su edición.
              </p>

              <h4 className="text-sm font-semibold text-paper-white pt-2">2. Propiedad Intelectual y Confidencialidad</h4>
              <p>
                Eres el propietario absoluto y exclusivo del contenido audiovisual que nos proporcionas. No utilizamos tus grabaciones, rostros, voces o marcas para ningún fin distinto a la edición acordada, ni son compartidos con terceros sin tu consentimiento expreso previo.
              </p>

              <h4 className="text-sm font-semibold text-paper-white pt-2">3. Seguridad y Confidencialidad Técnica</h4>
              <p>
                Utilizamos software y entornos profesionales de edición bajo estrictos estándares corporativos que garantizan la confidencialidad absoluta de tus grabaciones privadas.
              </p>

              <h4 className="text-sm font-semibold text-paper-white pt-2">4. Derechos del Usuario</h4>
              <p>
                Puedes solicitar en cualquier momento la eliminación total de tus archivos brutos y editados de nuestros servidores de Google Drive escribiendo a nuestro correo de contacto o WhatsApp.
              </p>
            </>
          ) : (
            <>
              <p className="text-fog">
                Condiciones de prestación del servicio de repurposing de video de <strong>SMD - Alan</strong>.
              </p>

              <h4 className="text-sm font-semibold text-paper-white pt-2">1. Objeto del Servicio</h4>
              <p>
                SMD transforma grabaciones audiovisuales de formato horizontal en micro-videos verticales (9:16) optimizados con ganchos, subtítulos dinámicos y ritmo para plataformas como Reels, TikTok y YouTube Shorts.
              </p>

              <h4 className="text-sm font-semibold text-paper-white pt-2">2. Prueba Gratuita (Garantía de 1 Clip)</h4>
              <p>
                Ofrecemos a nuevos clientes la edición sin costo de 1 clip vertical extraído de su video para que evalúen la calidad del servicio. Si el cliente decide no contratar ningún plan posterior, no existe ningún cargo ni obligación de pago.
              </p>

              <h4 className="text-sm font-semibold text-paper-white pt-2">3. Plazos de Entrega</h4>
              <p>
                Los clips se entregan habitualmente en un plazo de 48 a 72 horas hábiles a partir de la recepción efectiva del material origen en alta resolución.
              </p>

              <h4 className="text-sm font-semibold text-paper-white pt-2">4. Pagos y Cancelación</h4>
              <p>
                Los planes mensuales se abonan por adelantado en USD. No existe permanencia mínima; puedes cancelar tu suscripción en cualquier momento antes del siguiente ciclo de facturación.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-graphite bg-carbon/40 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-1.5 rounded-pill bg-paper-white text-obsidian text-xs font-semibold hover:bg-bone transition-all"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
}
