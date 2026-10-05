'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  MessageCircle, 
  ExternalLink,
  ArrowRight,
  Send
} from 'lucide-react';

export default function SecureContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    videoUrl: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Anti-spam honeypot
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim()) {
      setErrorMessage('Por favor, ingresa tu nombre.');
      setStatus('error');
      return;
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
      setErrorMessage('Por favor, ingresa al menos un método de contacto (correo o WhatsApp/teléfono).');
      setStatus('error');
      return;
    }

    // Build formatted summary message for WhatsApp
    const lines = [
      '¡Hola Alan! Vengo desde tu web y quiero solicitar mi prueba gratuita de 1 clip.',
      '',
      '📋 *RESUMEN DE MI SOLICITUD:*',
      `👤 *Nombre:* ${formData.name.trim()}`,
      `📧 *Email:* ${formData.email.trim() || 'No especificado'}`,
      `📱 *WhatsApp / Tel:* ${formData.phone.trim() || 'No especificado'}`,
      `🔗 *Video largo:* ${formData.videoUrl.trim() || 'Te lo comparto por este chat'}`,
    ];

    if (formData.message.trim()) {
      lines.push(`💬 *Comentarios / Estilo:* ${formData.message.trim()}`);
    }

    const whatsappMessage = lines.join('\n');
    const targetUrl = `https://wa.me/5491127887093?text=${encodeURIComponent(whatsappMessage)}`;
    setLastWhatsappUrl(targetUrl);

    // Backup: Send async to /api/contact in background (fails silently if offline, WhatsApp is primary)
    try {
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {});
    } catch {
      // Non-blocking
    }

    // Open WhatsApp immediately
    setStatus('success');
    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank');
    }
  };

  return (
    <div className="vault-card p-6 sm:p-10 bg-onyx border border-graphite relative overflow-hidden shadow-2xl rounded-2xl">
      <div className="max-w-xl mx-auto">
        
        {/* Section Header inside card */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-carbon border border-graphite text-xs text-copper font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contacto Directo por WhatsApp</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-paper-white font-semibold">
            Solicita tu demo de 1 clip sin costo
          </h3>
          <p className="text-xs sm:text-sm text-fog mt-2">
            Completa los datos de tu video y al enviar se abrirá WhatsApp al instante con el resumen detallado para Alan.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-8 rounded-2xl bg-carbon border border-emerald-500/40 text-center space-y-4 animate-in fade-in zoom-in-95 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            
            <h4 className="text-xl sm:text-2xl font-serif text-paper-white font-semibold">
              ¡Formulario Preparado con Éxito!
            </h4>
            
            <p className="text-xs sm:text-sm text-fog max-w-md mx-auto leading-relaxed">
              Se ha generado el resumen de tu solicitud y abierto WhatsApp para enviarlo directamente a Alan.
            </p>

            {/* Direct Reopen Button in case of popup blockers */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={lastWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-pill bg-[#25D366] hover:bg-[#20bd5a] text-obsidian font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-obsidian" />
                <span>Reabrir WhatsApp con mi resumen</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    videoUrl: '',
                    message: '',
                    honeypot: '',
                  });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-pill bg-carbon hover:bg-graphite/40 border border-graphite text-fog hover:text-paper-white text-xs font-semibold transition-all"
              >
                Enviar otro formulario
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Honeypot field (hidden from users) */}
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
                  Correo Electrónico
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
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
                  placeholder="https://youtube.com/watch?v=... o Drive"
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
                placeholder="Cuéntame de qué trata tu canal, qué momento del video prefieres o qué estilo de subtítulos te gustaría..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-card bg-carbon border border-graphite text-xs sm:text-sm text-bone placeholder:text-fog/50 focus:outline-none focus:border-copper transition-colors resize-none"
              />
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-400">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button: Direct to WhatsApp */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-pill bg-[#25D366] hover:bg-[#20bd5a] text-obsidian font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-200 shadow-xl hover:shadow-[#25D366]/20 hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-obsidian text-obsidian" />
                <span>Enviar Solicitud por WhatsApp al Instante</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-[11px] text-fog pt-1">
              Al hacer clic, se abrirá WhatsApp con el resumen de tus datos listo para enviar a Alan (+54 9 11 2788-7093) en 1 toque.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
