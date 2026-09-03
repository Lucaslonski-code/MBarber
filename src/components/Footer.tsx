import React from "react";
import { M_BARBER_CONFIG } from "../config/links";
import { BrandLogo } from "./BrandLogo";
import { ExternalLink, Instagram, MessageCircle, Navigation, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-[#050507] text-zinc-400 text-xs border-t border-zinc-850 py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-12 border-b border-zinc-850">
          
          {/* Brand Identity & Location Column (5 spans) */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size="md" />
            <p className="text-zinc-300 text-xs sm:text-sm max-w-sm leading-relaxed font-normal">
              Barbearia masculina em Colombo, Paraná. Técnica apurada, corte de precisão e agendamento prático pelo aplicativo Lyndus.
            </p>
            <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
              <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>{M_BARBER_CONFIG.address.full}</span>
            </div>
          </div>

          {/* Quick Navigation (3 spans) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider block mb-2">
              Navegação
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="min-h-[36px] inline-flex items-center text-zinc-300 hover:text-white transition-colors py-1 focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                  Serviços & Valores
                </a>
              </li>
              <li>
                <a href="#precisao" className="min-h-[36px] inline-flex items-center text-zinc-300 hover:text-white transition-colors py-1 focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                  Precisão
                </a>
              </li>
              <li>
                <a href="#espaco" className="min-h-[36px] inline-flex items-center text-zinc-300 hover:text-white transition-colors py-1 focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                  Espaço & Estrutura
                </a>
              </li>
              <li>
                <a href="#barbeiros" className="min-h-[36px] inline-flex items-center text-zinc-300 hover:text-white transition-colors py-1 focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                  Maycon & Alysson
                </a>
              </li>
              <li>
                <a href="#localizacao" className="min-h-[36px] inline-flex items-center text-zinc-300 hover:text-white transition-colors py-1 focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                  Localização & Horários
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels (4 spans) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider block mb-2">
              Canais Oficiais
            </span>
            <div className="flex flex-col space-y-2">
              <a
                href={M_BARBER_CONFIG.links.lyndus}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] inline-flex items-center justify-between p-2.5 rounded-md bg-zinc-900/80 hover:bg-zinc-850 text-zinc-200 hover:text-white border border-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="font-semibold text-xs uppercase tracking-wider">Agendamento pelo Lyndus</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href={M_BARBER_CONFIG.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] inline-flex items-center justify-between p-2.5 rounded-md bg-zinc-900/80 hover:bg-zinc-850 text-zinc-200 hover:text-white border border-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-zinc-400" />
                  <span>WhatsApp {M_BARBER_CONFIG.phone.display}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href={M_BARBER_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] inline-flex items-center justify-between p-2.5 rounded-md bg-zinc-900/80 hover:bg-zinc-850 text-zinc-200 hover:text-white border border-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{M_BARBER_CONFIG.social.instagramHandle}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href={M_BARBER_CONFIG.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] inline-flex items-center justify-between p-2.5 rounded-md bg-zinc-900/80 hover:bg-zinc-850 text-zinc-200 hover:text-white border border-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                <div className="flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Como Chegar (Google Maps)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Operational Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>© {currentYear} M Barber. Todos os direitos reservados. Colombo, PR.</p>
          <p className="font-mono text-zinc-400">
            Agendamentos via aplicativo externo Lyndus.
          </p>
        </div>

      </div>
    </footer>
  );
};
