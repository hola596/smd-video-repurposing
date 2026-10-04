'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';

interface CookieConsentProps {
  onOpenPrivacy?: () => void;
}

export default function CookieConsent({ onOpenPrivacy }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('smd_cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access restricted in some iframes/modes
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('smd_cookie_consent', 'accepted');
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('smd_cookie_consent', 'declined');
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Consentimiento de Cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="vault-panel p-5 bg-onyx/95 backdrop-blur-xl border border-graphite rounded-card shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-carbon border border-graphite text-copper flex-shrink-0 mt-0.5">
            <Cookie className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-semibold text-paper-white flex items-center gap-1.5">
              <span>Privacidad & Cookies Técnicas</span>
              <Shield className="w-3 h-3 text-copper" />
            </h4>
            <p className="text-[11px] text-fog leading-relaxed mt-1">
              Utilizamos cookies mínimas técnicas y analíticas anónimas para garantizar la velocidad del sitio y el funcionamiento del cotizador.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={handleAccept}
                className="px-4 py-1.5 rounded-pill bg-paper-white text-obsidian text-xs font-semibold hover:bg-bone transition-all flex items-center gap-1"
              >
                <Check className="w-3 h-3" />
                <span>Aceptar Todo</span>
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="px-3 py-1.5 rounded-pill bg-carbon border border-graphite text-fog hover:text-bone text-xs font-medium transition-all"
              >
                Solo Necesarias
              </button>
              {onOpenPrivacy && (
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-[11px] text-copper hover:underline ml-auto"
                >
                  Detalles
                </button>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleDecline}
            className="text-fog hover:text-paper-white p-1"
            aria-label="Cerrar aviso de cookies"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
