import React from "react";
import { Clock, Scissors, ShieldCheck, Flame, ArrowRight, CheckCircle2 } from "lucide-react";
import { M_BARBER_CONFIG } from "../config/links";

export const PrecisionSection: React.FC = () => {
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
        
        {/* Section Header with Single-Word Identity */}
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

        {/* Asymmetric Composition: Large Feature Focus + Grid of 4 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Editorial Showcase Card (5 spans) */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-xl bg-zinc-900/90 border border-zinc-750 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-[11px] font-mono text-zinc-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                <span>M Barber Colombo • PR</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Técnica apurada em cada detalhe.
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                Do degradê na tesoura ao acabamento na navalha, nosso trabalho é valorizar a sua presença com um corte firme e duradouro.
              </p>

              <div className="space-y-3 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Sem improvisos: técnica consistente em todos os cortes</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Produtos selecionados para saúde capilar e da pele</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Ambiente organizado, climatizado e confortável</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-zinc-800">
              <a
                href={M_BARBER_CONFIG.links.lyndus}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-between w-full bg-white hover:bg-zinc-200 text-zinc-950 px-5 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-colors shadow-md group focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Agendar atendimento no Lyndus</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* 4 Architectural Pillars Grid (7 spans) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {precisionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between group"
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

                    <h4 className="text-lg font-bold text-white tracking-tight mb-2">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {pillar.text}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-850/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
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
