import React from "react";
import { M_BARBER_CONFIG } from "../config/links";
import { ExternalLink, Scissors, MapPin, MessageCircle } from "lucide-react";

export const MobileBottomNav: React.FC = () => {
  return (
    <div
      id="mobile-bottom-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070709]/95 backdrop-blur-md border-t border-zinc-800 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-2xl"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Quick link: Serviços */}
        <a
          href="#servicos"
          className="min-h-[44px] flex-1 flex flex-col items-center justify-center text-[10px] font-semibold text-zinc-400 hover:text-white transition-colors py-1 focus-visible:ring-2 focus-visible:ring-white rounded-md"
        >
          <Scissors className="w-4 h-4 mb-0.5 text-zinc-300" />
          <span>Serviços</span>
        </a>

        {/* Quick link: Localização */}
        <a
          href="#localizacao"
          className="min-h-[44px] flex-1 flex flex-col items-center justify-center text-[10px] font-semibold text-zinc-400 hover:text-white transition-colors py-1 focus-visible:ring-2 focus-visible:ring-white rounded-md"
        >
          <MapPin className="w-4 h-4 mb-0.5 text-zinc-300" />
          <span>Onde fica</span>
        </a>

        {/* Quick link: WhatsApp */}
        <a
          href={M_BARBER_CONFIG.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex-1 flex flex-col items-center justify-center text-[10px] font-semibold text-zinc-400 hover:text-white transition-colors py-1 focus-visible:ring-2 focus-visible:ring-white rounded-md"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 text-zinc-300" />
          <span>WhatsApp</span>
        </a>

        {/* Main Booking Lyndus CTA Button */}
        <a
          href={M_BARBER_CONFIG.links.lyndus}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex-[1.6] bg-white text-zinc-950 font-bold uppercase tracking-wider text-[11px] py-2 px-3 rounded-md flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-white"
        >
          <span>Agendar</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

      </div>
    </div>
  );
};
