import React, { useState } from "react";
import { M_BARBER_IMAGES, BarberPhotoMeta } from "../config/images";
import { M_BARBER_CONFIG } from "../config/links";
import { Maximize2, X, ExternalLink } from "lucide-react";

export const SpaceSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<BarberPhotoMeta | null>(null);

  const { salao, fachada, neon, bancada } = M_BARBER_IMAGES.photos;

  return (
    <section
      id="espaco"
      className="py-16 sm:py-20 lg:py-28 bg-[#070709] text-white border-b border-zinc-800 relative overflow-hidden"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-10 sm:mb-14 pb-6 sm:pb-8 border-b border-zinc-850">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
              Espaço & Estrutura
            </span>
            <h2 className="headline-fluid-section font-extrabold tracking-tight text-white">
              Nosso ambiente em Colombo. <br className="hidden sm:inline" />
              <span className="text-zinc-400 font-light">Fotografias reais do nosso espaço.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Conheça a estrutura da M Barber antes da sua visita: salão amplo, climatizado, estações profissionais de corte e área de lavatório dedicada.
            </p>
          </div>
        </div>

        {/* 4 Photographs Responsive Grid (2-cols on tablet, 12-cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Photo 1: Salão Principal Amplo (Featured - 7 cols on desktop, 1 col on tablet) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-zinc-900/70 border border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-all shadow-lg">
            <div className="relative aspect-[16/10] sm:aspect-[16/10] md:aspect-[16/11] lg:aspect-[16/10] max-h-[360px] md:max-h-[380px] lg:max-h-none bg-zinc-950 overflow-hidden flex items-center justify-center">
              <img
                src={salao.src}
                data-official-file={salao.filename}
                data-official-src={salao.publicPath}
                alt={salao.alt}
                className="w-full h-full object-cover object-[50%_65%] group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />

              {/* Badges on Image */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider text-white border border-white/10 uppercase">
                  {salao.badge}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPhoto(salao)}
                className="min-h-[40px] min-w-[40px] absolute bottom-3 right-3 p-2 rounded-md bg-black/80 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors border border-white/10 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Ampliar fotografia do salão principal"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {salao.title}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {salao.subtitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {salao.description}
                </p>
              </div>
            </div>
          </div>

          {/* Photo 2: Fachada & Recepção (5 cols on desktop, 1 col on tablet) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-zinc-900/70 border border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-all shadow-lg">
            <div className="relative aspect-[16/10] sm:aspect-[16/10] md:aspect-[16/11] lg:aspect-[16/10] max-h-[360px] md:max-h-[380px] lg:max-h-none bg-zinc-950 overflow-hidden flex items-center justify-center">
              <img
                src={fachada.src}
                data-official-file={fachada.filename}
                data-official-src={fachada.publicPath}
                alt={fachada.alt}
                className="w-full h-full object-cover object-[50%_50%] group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider text-white border border-white/10 uppercase">
                  {fachada.badge}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPhoto(fachada)}
                className="min-h-[40px] min-w-[40px] absolute bottom-3 right-3 p-2 rounded-md bg-black/80 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors border border-white/10 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Ampliar fotografia da fachada"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {fachada.title}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {fachada.subtitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {fachada.description}
                </p>
              </div>
            </div>
          </div>

          {/* Photo 3: Parede Neon & Lavatório (6 cols on desktop, 1 col on tablet) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-xl bg-zinc-900/70 border border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-all shadow-lg">
            <div className="relative aspect-[16/10] sm:aspect-[16/10] md:aspect-[16/11] lg:aspect-[16/10] max-h-[360px] md:max-h-[380px] lg:max-h-none bg-zinc-950 overflow-hidden flex items-center justify-center">
              <img
                src={neon.src}
                data-official-file={neon.filename}
                data-official-src={neon.publicPath}
                alt={neon.alt}
                className="w-full h-full object-cover object-[50%_55%] group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider text-white border border-white/10 uppercase">
                  {neon.badge}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPhoto(neon)}
                className="min-h-[40px] min-w-[40px] absolute bottom-3 right-3 p-2 rounded-md bg-black/80 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors border border-white/10 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Ampliar fotografia dos neons e lavatório"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {neon.title}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {neon.subtitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {neon.description}
                </p>
              </div>
            </div>
          </div>

          {/* Photo 4: Estação de Atendimento & Bancada (6 cols on desktop, 1 col on tablet) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-xl bg-zinc-900/70 border border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-all shadow-lg">
            <div className="relative aspect-[16/10] sm:aspect-[16/10] md:aspect-[16/11] lg:aspect-[16/10] max-h-[360px] md:max-h-[380px] lg:max-h-none bg-zinc-950 overflow-hidden flex items-center justify-center">
              <img
                src={bancada.src}
                data-official-file={bancada.filename}
                data-official-src={bancada.publicPath}
                alt={bancada.alt}
                className="w-full h-full object-cover object-[50%_45%] group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider text-white border border-white/10 uppercase">
                  {bancada.badge}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPhoto(bancada)}
                className="min-h-[40px] min-w-[40px] absolute bottom-3 right-3 p-2 rounded-md bg-black/80 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors border border-white/10 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Ampliar fotografia da bancada de corte"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {bancada.title}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {bancada.subtitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {bancada.description}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Action Link to Lyndus */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href={M_BARBER_CONFIG.links.lyndus}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-zinc-850 hover:bg-zinc-800 text-white px-6 py-3 rounded-md border border-zinc-700 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
          >
            <span>Agendar atendimento no salão via Lyndus</span>
            <ExternalLink className="w-4 h-4 text-zinc-400" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/80">
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                  {selectedPhoto.badge}
                </span>
                <h4 className="text-base font-bold text-white">
                  {selectedPhoto.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="min-h-[40px] min-w-[40px] p-2 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                data-official-file={selectedPhoto.filename}
                data-official-src={selectedPhoto.publicPath}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 sm:p-5 border-t border-zinc-800 bg-zinc-900/60">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

