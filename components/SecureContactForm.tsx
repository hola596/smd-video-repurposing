'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare } from 'lucide-react';

export default function SecureContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    videoUrl: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          videoUrl: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Ocurrió un error al enviar el formulario.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Error de red. Intenta nuevamente o contáctame directamente por WhatsApp.');
    }
  };

  return (
    <div className="vault-card p-6 sm:p-10 bg-onyx border border-graphite relative overflow-hidden">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-carbon border border-graphite text-xs text-copper font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contacto Directo</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-paper-white font-semibold">
            Solicita tu demo de 1 clip sin costo
          </h3>
          <p className="text-xs sm:text-sm text-fog mt-2">
            Envía el enlace de tu podcast, clase o webinar y te devolveré una muestra terminada con subtítulos y formato vertical.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-8 rounded-card bg-carbon border border-copper/40 text-center space-y-4 animate-in fade-in zoom-in-95">
            <div className="w-14 h-14 rounded-full bg-copper/20 text-copper mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-serif text-paper-white font-semibold">
              ¡Solicitud Recibida!
            </h4>
            <p className="text-sm text-fog">
              Alan revisará tu video y te contactará en menos de 2 horas hábiles con tu clip demo o los siguientes pasos.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 px-6 py-2.5 rounded-pill bg-paper-white text-obsidian text-xs font-semibold hover:bg-bone transition-all"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field (hidden from legitimate users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="hp_field">No llenar este campo:</label>
              <input
                id="hp_field"
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name and Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-bone mb-1.5"
                >
                  Tu Nombre <span className="text-copper">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Ej: Marcelo Rossi"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-pill bg-carbon border border-graphite text-xs sm:text-sm text-bone placeholder:text-fog/50 focus:outline-none focus:border-copper transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-bone mb-1.5"
                >
                  Correo Electrónico <span className="text-copper">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="marcelo@empresa.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-pill bg-carbon border border-graphite text-xs sm:text-sm text-bone placeholder:text-fog/50 focus:outline-none focus:border-copper transition-colors"
                />
              </div>
            </div>

            {/* WhatsApp Phone and Video Link Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-xs font-medium text-bone mb-1.5"
                >
                  WhatsApp / Teléfono
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="+54 9 11 ..."
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-pill bg-carbon border border-graphite text-xs sm:text-sm text-bone placeholder:text-fog/50 focus:outline-none focus:border-copper transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-video-url"
                  className="block text-xs font-medium text-bone mb-1.5"
                >
                  Enlace de tu video largo
                </label>
                <input
                  id="contact-video-url"
                  type="url"
                  name="videoUrl"
                  placeholder="https://youtube.com/watch?v=..."
                  value={formData.videoUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-pill bg-carbon border border-graphite text-xs sm:text-sm text-bone placeholder:text-fog/50 focus:outline-none focus:border-copper transition-colors"
                />
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-medium text-bone mb-1.5"
              >
                Comentarios o instrucciones de estilo
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                placeholder="Cuéntame de qué trata tu canal o qué estilo de subtítulos te gustaría..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-card bg-carbon border border-graphite text-xs sm:text-sm text-bone placeholder:text-fog/50 focus:outline-none focus:border-copper transition-colors resize-none"
              />
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="p-3 rounded-card bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-400">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 px-6 rounded-pill bg-paper-white hover:bg-bone text-obsidian font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:scale-[1.01]"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando solicitud segura...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar y Solicitar Demo Gratuita</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-[10px] text-fog pt-1">
              Tus datos están protegidos bajo estricto secreto profesional. Nunca compartimos tu información con terceros.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
