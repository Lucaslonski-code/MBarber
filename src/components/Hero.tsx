import React from "react";
import { M_BARBER_CONFIG } from "../config/links";
import { ExternalLink, ArrowDown, Clock, ShieldCheck, MapPin, Scissors } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[85vh] flex flex-col justify-between pt-24 sm:pt-32 lg:pt-36 bg-[#070709] text-white overflow-hidden border-b border-zinc-800"
    >
      {/* Background Architectural Grid & Subtle Ambient Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-zinc-700/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          
          {/* Main Typography Column (8 spans) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Location & Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-750 text-xs font-mono text-zinc-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white shrink-0 animate-pulse" />
              <span className="font-semibold text-white tracking-wider uppercase">M Barber</span>
              <span className="text-zinc-600">/</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                Colombo, PR
              </span>
            </div>

            {/* Headline - Striking, fluid scale, no distorted condensation */}
            <h1 className="headline-fluid-hero font-extrabold tracking-tight text-white mb-6">
              Presença no corte. <br />
              <span className="text-zinc-400 font-light">Firmeza no acabamento.</span>
            </h1>

            {/* Subheadline - Clear, balanced line-height and max-width */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
              Corte masculino de precisão, barba alinhada com toalha quente e atendimento rigorosamente pontual. Sem esperas no salão: você escolhe o barbeiro e garante o seu horário no Lyndus.
            </p>

            {/* Action Buttons - Strict Visual Hierarchy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                id="hero-primary-lyndus-cta"
                href={M_BARBER_CONFIG.links.lyndus}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-3 bg-white text-zinc-950 hover:bg-zinc-200 px-7 py-3.5 rounded-md text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-150 shadow-md active:scale-95 group focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Agendar pelo Lyndus</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#servicos"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-750 px-6 py-3.5 rounded-md text-xs sm:text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Conhecer serviços & valores</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

          </div>

          {/* Right Spec Info Column (4 spans) */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-3.5 w-full">
            
            {/* Quick Spec Card 1 */}
            <div className="p-4 sm:p-5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm transition-colors hover:border-zinc-700">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                <Clock className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                <span>Atendimento com hora marcada</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                Sem filas. Seu tempo é respeitado do início ao fim.
              </p>
            </div>

            {/* Quick Spec Card 2 */}
            <div className="p-4 sm:p-5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm transition-colors hover:border-zinc-700">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                <Scissors className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                <span>Maycon & Alysson</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                Profissionais experientes em corte e barba em Colombo.
              </p>
            </div>

            {/* Quick Spec Card 3 */}
            <div className="p-4 sm:p-5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm transition-colors hover:border-zinc-700">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                <span>Biossegurança total</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                Lâminas 100% descartáveis e materiais esterilizados.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Architectural Ticker / Brand Bar */}
      <div className="w-full bg-zinc-950 border-t border-zinc-850 py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap text-xs font-mono tracking-widest text-zinc-400 uppercase">
          <div className="animate-marquee items-center gap-8 px-4">
            <span className="text-zinc-200 font-bold">M Barber</span>
            <span>•</span>
            <span>Colombo, Paraná</span>
            <span>•</span>
            <span className="text-zinc-200 font-bold">Corte Comum</span>
            <span>•</span>
            <span>Barba com Toalha Quente</span>
            <span>•</span>
            <span className="text-zinc-200 font-bold">Corte + Barba</span>
            <span>•</span>
            <span className="text-zinc-200 font-bold">Maycon & Alysson</span>
            <span>•</span>
            <span>Agendamento via Lyndus</span>
            <span>•</span>
            <span className="text-zinc-200 font-bold">Pontualidade Rigorosa</span>
            <span>•</span>
            <span className="text-zinc-200 font-bold">M Barber</span>
            <span>•</span>
            <span>Colombo, Paraná</span>
            <span>•</span>
            <span className="text-zinc-200 font-bold">Corte Comum</span>
            <span>•</span>
            <span>Barba com Toalha Quente</span>
            <span>•</span>
            <span className="text-zinc-200 font-bold">Corte + Barba</span>
            <span>•</span>
            <span className="text-zinc-200 font-bold">Maycon & Alysson</span>
            <span>•</span>
            <span>Agendamento via Lyndus</span>
          </div>
        </div>
      </div>
    </section>
  );
};
