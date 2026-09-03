import React from "react";
import { M_BARBER_CONFIG } from "../config/links";
import { M_BARBER_IMAGES } from "../config/images";
import { ExternalLink, ArrowDown, Clock, ShieldCheck, MapPin, Scissors } from "lucide-react";

export const Hero: React.FC = () => {
  const salaoImg = M_BARBER_IMAGES.photos.salao;

  return (
    <section
      id="hero-section"
      className="relative min-h-[85vh] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 bg-[#070709] text-white overflow-hidden border-b border-zinc-800"
    >
      {/* Background Architectural Grid & Subtle Ambient Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-zinc-700/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-8 lg:py-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Typography Column (7 spans on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Location & Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-750 text-xs font-mono text-zinc-300 mb-5 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white shrink-0 animate-pulse" />
              <span className="font-semibold text-white tracking-wider uppercase">M Barber</span>
              <span className="text-zinc-600">/</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                Colombo, PR
              </span>
            </div>

            {/* Headline - Striking, fluid scale */}
            <h1 className="headline-fluid-hero font-extrabold tracking-tight text-white mb-5 sm:mb-6">
              Presença no corte. <br />
              <span className="text-zinc-400 font-light">Firmeza no acabamento.</span>
            </h1>

            {/* Subheadline - Clear, balanced line-height and max-width */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-xl leading-relaxed mb-6 sm:mb-8 font-normal">
              Corte masculino de precisão, barba alinhada com toalha quente e atendimento rigorosamente pontual em Colombo. Sem esperas: escolha o seu barbeiro e garanta o seu horário no Lyndus.
            </p>

            {/* Action Buttons - Responsive, non-colliding */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                id="hero-primary-lyndus-cta"
                href={M_BARBER_CONFIG.links.lyndus}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-3 bg-white text-zinc-950 hover:bg-zinc-200 px-7 py-3.5 rounded-md text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-150 shadow-md active:scale-95 group focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
              >
                <span>Agendar pelo Lyndus</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#servicos"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-750 px-6 py-3.5 rounded-md text-xs sm:text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
              >
                <span>Conhecer serviços & valores</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

          </div>

          {/* Official Flagship Photo: 1000150366.webp (5 spans on desktop) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">
              {/* Controlled aspect ratio: landscape on tablet and mobile, clamped max height to avoid occupying full screen */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] max-h-[380px] sm:max-h-[420px] lg:max-h-none overflow-hidden">
                <img
                  src={salaoImg.src}
                  data-official-file={salaoImg.filename}
                  data-official-src={salaoImg.publicPath}
                  alt={salaoImg.alt}
                  className="w-full h-full object-cover object-[50%_65%] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
                
                {/* Subtle gradient vignette for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-zinc-700/80 text-[11px] font-mono text-zinc-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>Salão Principal M Barber</span>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-400 bg-black/60 px-2 py-1 rounded">
                    Colombo, PR
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Quick Spec Cards - Fluid 3 columns on tablet and desktop, stacked on mobile */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 w-full">
          {/* Quick Spec Card 1 */}
          <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm transition-colors hover:border-zinc-700">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
              <Clock className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
              <span>Hora marcada</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
              Sem filas. Seu tempo é respeitado do início ao fim.
            </p>
          </div>

          {/* Quick Spec Card 2 */}
          <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm transition-colors hover:border-zinc-700">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
              <Scissors className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
              <span>Maycon & Alysson</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
              Profissionais experientes em corte e barba em Colombo.
            </p>
          </div>

          {/* Quick Spec Card 3 */}
          <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm transition-colors hover:border-zinc-700">
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

      {/* Architectural Ticker / Brand Bar */}
      <div className="w-full bg-zinc-950 border-t border-zinc-850 py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap text-xs font-mono tracking-widest text-zinc-400 uppercase">
          <div className="animate-marquee items-center gap-8 px-4">
            <span className="text-zinc-200 font-bold">M Barber</span>
            <span>•</span>
            <span>Colombo, Paraná</span>
            <span>•</span>
            <span className="text-zinc-200 font-bold">Corte Masculino</span>
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
            <span className="text-zinc-200 font-bold">Corte Masculino</span>
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

