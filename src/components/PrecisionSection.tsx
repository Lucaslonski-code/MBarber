import React from "react";
import { Clock, Scissors, ShieldCheck, Flame, ArrowRight, CheckCircle2 } from "lucide-react";
import { M_BARBER_CONFIG } from "../config/links";
import { M_BARBER_IMAGES } from "../config/images";

export const PrecisionSection: React.FC = () => {
  const bancadaImg = M_BARBER_IMAGES.photos.bancada;

  const precisionPillars = [
    {
      title: "Pontualidade",
      icon: Clock,
      detail: "Sem espera",
      text: "Seu horário no aplicativo Lyndus é rigorosamente respeitado. Você chega no horário e senta diretamente na cadeira.",
    },
    {
      title: "Navalhamento",
      icon: Flame,
      detail: "Toalha aquecida",
      text: "Abertura dos poros com toalha quente e alinhamento milimétrico na navalha com lâmina descartável de uso único.",
    },
    {
      title: "Visagismo",
      icon: Scissors,
      detail: "Corte sob medida",
      text: "Análise da linha do rosto, caimento do fio e rotina de penteado para um corte que mantém a estrutura por semanas.",
    },
    {
      title: "Biossegurança",
      icon: ShieldCheck,
      detail: "Higiene total",
      text: "Lâminas descartadas na sua frente e esterilização completa de tesouras, pentes e navalhetes a cada atendimento.",
    },
  ];

  return (
    <section
      id="precisao"
      className="py-16 sm:py-20 lg:py-28 bg-[#09090c] text-white border-b border-zinc-800 relative overflow-hidden"
    >
      {/* Subtle structural texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 sm:mb-16 pb-8 border-b border-zinc-800">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
              Identidade & Execução
            </span>
            <h2 className="headline-fluid-section font-extrabold tracking-tight text-white">
              Precisão.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base mt-2 font-normal">
              A linha certa, a simetria exata e o tempo respeitado do início ao fim.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-end">
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md lg:text-right leading-relaxed font-normal">
              Cada atendimento na M Barber em Colombo é executado com ferramentas afiadas, produtos de alta qualidade e foco absoluto no acabamento.
            </p>
          </div>
        </div>

        {/* 2-Column Responsive Layout for Tablet & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Workstation Photo & Editorial Card (md:col-span-5) */}
          <div className="md:col-span-5 flex flex-col justify-between rounded-xl bg-zinc-900/90 border border-zinc-750 overflow-hidden shadow-xl">
            
            {/* Official Photo: 1000150368.webp (Estação de Atendimento) */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/5] overflow-hidden bg-zinc-950">
              <img
                src={bancadaImg.src}
                data-official-file={bancadaImg.filename}
                data-official-src={bancadaImg.publicPath}
                alt={bancadaImg.alt}
                className="w-full h-full object-cover object-[50%_45%] transition-transform duration-500 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-black/20 pointer-events-none" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-zinc-700 text-[11px] font-mono text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {bancadaImg.title}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 bg-black/60 px-2 py-1 rounded">
                  Bancada de Precisão
                </span>
              </div>
            </div>

            {/* Editorial Content below photo */}
            <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-2">
                  Técnica apurada em cada detalhe.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 font-normal">
                  Cadeira ergonômica clássica, iluminação de foco e instrumentos afiados para garantir simetria milimétrica.
                </p>

                <div className="space-y-2 pt-3 border-t border-zinc-800">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Lâminas descartáveis abertas na sua frente</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Higienização e esterilização a cada corte</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-zinc-800">
                <a
                  href={M_BARBER_CONFIG.links.lyndus}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-between w-full bg-white hover:bg-zinc-200 text-zinc-950 px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors shadow-md group focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
                >
                  <span>Agendar no Lyndus</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>

          {/* 4 Architectural Pillars (md:col-span-7) - 2x2 grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {precisionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-zinc-850 border border-zinc-750 flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-950 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-zinc-400 uppercase tracking-wider bg-zinc-950 px-2.5 py-1 rounded border border-zinc-850">
                        {pillar.detail}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {pillar.text}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-850 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>M Barber</span>
                    <span>Colombo • PR</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
