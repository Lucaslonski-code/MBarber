import React, { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "../config/servicesData";
import { M_BARBER_CONFIG } from "../config/links";
import { ExternalLink, Clock, Check, Sparkles } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const categories = [
    { id: "todos", label: "Todos os serviços" },
    { id: "cabelo", label: "Cabelo" },
    { id: "barba", label: "Barba" },
    { id: "combos", label: "Combos" },
    { id: "cuidados", label: "Cuidados" },
  ];

  const filteredServices =
    activeCategory === "todos"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const flagshipCombo = SERVICES_DATA.find((s) => s.id === "combo-corte-barba");

  return (
    <section
      id="servicos"
      className="py-16 sm:py-20 lg:py-28 bg-[#070709] text-white border-b border-zinc-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Asymmetric Rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-zinc-850">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
              Serviços & Valores
            </span>
            <h2 className="headline-fluid-section font-extrabold tracking-tight text-white">
              Seu corte. <br className="hidden sm:inline" />
              <span className="text-zinc-400 font-light">Sua assinatura.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <p className="text-xs sm:text-sm text-zinc-300 max-w-sm lg:text-right leading-relaxed mb-4 font-normal">
              Preços transparentes, tempo respeitado e acabamento afiado. Agendamentos pelo aplicativo Lyndus.
            </p>
            <a
              href={M_BARBER_CONFIG.links.lyndus}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[40px] inline-flex items-center gap-2 text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-md transition-colors shadow-sm uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Abrir tabela no Lyndus</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Flagship Highlight Card: Corte + Barba */}
        {flagshipCombo && (
          <div className="mb-10 sm:mb-12 p-6 sm:p-8 rounded-lg bg-zinc-900/80 border border-zinc-700/80 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-5 hidden lg:block">
              <span className="font-mono font-black text-9xl text-white select-none">01</span>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-zinc-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Combo completo</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {flagshipCombo.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed mb-4">
                  {flagshipCombo.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {flagshipCombo.includedSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between border-t lg:border-t-0 lg:border-l border-zinc-800 pt-6 lg:pt-0 lg:pl-8 w-full">
                <div className="mb-4 lg:text-right">
                  <span className="text-xs text-zinc-400 font-mono block uppercase">Valor do combo</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono-num block">
                    {flagshipCombo.price}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-mono mt-1">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    Tempo estimado: {flagshipCombo.duration}
                  </span>
                </div>

                <a
                  href={flagshipCombo.lyndusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 py-3 px-6 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-150 active:scale-95 shadow-md focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Agendar no Lyndus</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Categorias de Serviços"
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar border-b border-zinc-850"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[40px] px-4 py-2 rounded-md text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-white ${
                activeCategory === cat.id
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Services Table */}
        <div className="divide-y divide-zinc-850 border-y border-zinc-850">
          {filteredServices.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              className="py-5 sm:py-6 group transition-colors hover:bg-zinc-900/30 px-2 sm:px-4 rounded-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start md:items-center">
                
                {/* Index & Name (5 spans) */}
                <div className="md:col-span-5 flex items-start gap-3 sm:gap-4">
                  <span className="font-mono text-xs text-zinc-500 font-bold mt-1 shrink-0">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                        {service.name}
                      </h3>
                      {service.highlightBadge && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-zinc-950 shadow-sm">
                          {service.highlightBadge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Description & Steps (4 spans) */}
                <div className="md:col-span-4 text-xs text-zinc-300">
                  <p className="line-clamp-2 leading-relaxed mb-1.5 font-normal">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                    <Clock className="w-3 h-3 text-zinc-500 shrink-0" />
                    <span>Duração: {service.duration}</span>
                  </div>
                </div>

                {/* Price & Action (3 spans) */}
                <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-3 sm:gap-4 pt-2 md:pt-0">
                  <span className="text-lg sm:text-2xl font-bold text-white font-mono-num shrink-0">
                    {service.price}
                  </span>
                  <a
                    href={service.lyndusUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[40px] inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-white text-zinc-200 hover:text-zinc-950 border border-zinc-700 hover:border-white px-3.5 py-2 rounded-md text-xs font-bold tracking-wider uppercase transition-colors shrink-0 shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>Agendar</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Informative Lyndus Destination Box */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-lg bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white shrink-0" />
            <p className="text-xs text-zinc-400">
              Todos os horários são reservados exclusivamente no aplicativo <strong className="text-white font-semibold">Lyndus</strong>.
            </p>
          </div>
          <a
            href={M_BARBER_CONFIG.links.lyndus}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[36px] text-xs font-bold text-zinc-200 hover:text-white underline underline-offset-4 flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Ir para o Lyndus</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
