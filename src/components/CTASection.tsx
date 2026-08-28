import React from "react";
import { M_BARBER_CONFIG } from "../config/links";
import { ExternalLink, MessageCircle, Clock, MapPin } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section
      id="agendamento-cta"
      className="py-16 sm:py-24 lg:py-32 bg-[#070709] text-white border-b border-zinc-800 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-white shrink-0" />
          <span>M BARBER • COLOMBO, PR</span>
        </div>

        {/* Impact Headline with Fluid Scale */}
        <h2 className="headline-fluid-section font-extrabold tracking-tight text-white mb-6">
          Seu corte tem que ter presença. <br />
          <span className="text-zinc-400 font-light">Garanta seu horário no Lyndus.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
          Escolha o barbeiro de sua preferência (Maycon ou Alysson), selecione o serviço e confirme o horário em instantes pelo aplicativo.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <a
            id="final-lyndus-cta"
            href={M_BARBER_CONFIG.links.lyndus}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-zinc-950 hover:bg-zinc-200 px-8 py-3.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-150 active:scale-95 shadow-xl group focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Agendar pelo Lyndus</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href={M_BARBER_CONFIG.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-750 px-6 py-3.5 rounded-md text-xs sm:text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageCircle className="w-4 h-4 text-zinc-400" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mini Trust Markers */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            Pontualidade rigorosa
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            Colombo, Paraná
          </span>
        </div>

      </div>
    </section>
  );
};
