'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  return (
    <footer className="bg-onyx border-t border-graphite pt-16 pb-12 text-fog" role="contentinfo">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-graphite">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative h-9 w-auto flex items-center">
              <Image
                src="/logo.png"
                alt="Logo SMD - Servicio de Marketing Digital"
                width={160}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-fog max-w-sm leading-relaxed">
              Servicio Done-For-You de repurposing y edición audiovisual de alto impacto. Convierte grabaciones largas en micro-contenido viral diario para Reels, TikTok y YouTube Shorts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-bone font-semibold">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#como-funciona" className="hover:text-paper-white transition-colors">
                  Cómo Funciona el Proceso
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-paper-white transition-colors">
                  Portfolio de Videos Reales
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-paper-white transition-colors">
                  Cotizador & Comparativa de Planes
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-paper-white transition-colors">
                  Sobre Alan & Garantía de Calidad
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-paper-white transition-colors">
                  Solicitar Prueba Gratuita de 1 Clip
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-bone font-semibold">
              Contacto Directo
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="https://wa.me/5491127887093?text=Hola%20Alan,%20quiero%20consultar%20sobre%20el%20servicio%20de%20videos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-card bg-carbon border border-graphite hover:border-slate text-bone transition-all group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span>WhatsApp: +54 9 11 2788-7093</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-fog group-hover:text-bone" />
              </a>

              <a
                href="mailto:hola@serviciodemarketingdigital.com"
                className="flex items-center gap-2 p-2.5 rounded-card bg-carbon border border-graphite hover:border-slate text-bone transition-all group"
              >
                <Mail className="w-4 h-4 text-copper group-hover:scale-110 transition-transform" />
                <span>hola@serviciodemarketingdigital.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-fog group-hover:text-bone" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-fog">
              <ShieldCheck className="w-3.5 h-3.5 text-copper" />
              <span>Atención personalizada por Alan | Respuesta ágil</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 SMD - Servicio de Marketing Digital. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-paper-white transition-colors focus:outline-none"
            >
              Política de Privacidad
            </button>
            <span className="text-graphite">|</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-paper-white transition-colors focus:outline-none"
            >
              Términos y Condiciones
            </button>
            <span className="text-graphite">|</span>
            <Link
              href="/legal/privacidad"
              className="hover:text-paper-white transition-colors hidden md:inline"
            >
              Legal URL
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
