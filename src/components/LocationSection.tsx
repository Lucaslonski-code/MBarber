import React, { useState } from "react";
import { M_BARBER_CONFIG } from "../config/links";
import { MapPin, Navigation, Copy, Check, Clock, MessageCircle, ExternalLink } from "lucide-react";

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(M_BARBER_CONFIG.address.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const scheduleDays = [
    { day: "Segunda-feira", hours: "Fechado" },
    { day: "Terça-feira", hours: "09:00 – 20:00" },
    { day: "Quarta-feira", hours: "09:00 – 20:00" },
    { day: "Quinta-feira", hours: "09:00 – 20:00" },
    { day: "Sexta-feira", hours: "09:00 – 20:00" },
    { day: "Sábado", hours: "10:00 – 18:00" },
    { day: "Domingo", hours: "Fechado" },
  ];

  return (
    <section
      id="localizacao"
      className="py-16 sm:py-20 lg:py-28 bg-[#09090c] text-white border-b border-zinc-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12 sm:mb-14 pb-6 sm:pb-8 border-b border-zinc-850">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
              Localização & Horários
            </span>
            <h2 className="headline-fluid-section font-extrabold tracking-tight text-white">
              Fácil de chegar. <br className="hidden sm:inline" />
              <span className="text-zinc-400 font-light">Pronto para te receber.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Localizada em Colombo, Paraná. Ambiente climatizado, organizado e focado na sua comodidade.
            </p>
          </div>
        </div>

        {/* 2-Column Functional Location & Hours Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Address & Navigation Card (7 spans) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                <MapPin className="w-4 h-4 text-zinc-300 shrink-0" />
                <span>Endereço em Colombo, PR</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {M_BARBER_CONFIG.address.street}
              </h3>
              <p className="text-sm text-zinc-300 mb-1">
                {M_BARBER_CONFIG.address.neighborhood}
              </p>
              <p className="text-sm text-zinc-400 font-mono mb-6">
                {M_BARBER_CONFIG.address.city}, {M_BARBER_CONFIG.address.state} • CEP {M_BARBER_CONFIG.address.zip}
              </p>

              {/* Action Buttons: Copy Address & Google Maps */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-750 text-white px-4 py-2.5 rounded-md text-xs font-semibold transition-colors cursor-pointer border border-zinc-700 active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Endereço copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Copiar endereço</span>
                    </>
                  )}
                </button>

                <a
                  href={M_BARBER_CONFIG.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar rota no Maps</span>
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Contact Link */}
            <div className="mt-8 pt-6 border-t border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-zinc-400">
                Dúvidas sobre localização ou horários?
              </span>
              <a
                href={M_BARBER_CONFIG.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] text-xs font-semibold text-white hover:text-zinc-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-white py-1 px-1 rounded-sm"
              >
                <MessageCircle className="w-4 h-4 text-zinc-300" />
                <span>WhatsApp {M_BARBER_CONFIG.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Operating Hours Card (5 spans) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-lg bg-zinc-900/60 border border-zinc-800 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-6">
              <Clock className="w-4 h-4 text-zinc-300 shrink-0" />
              <span>Horários de atendimento</span>
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm">
              {scheduleDays.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-zinc-850/80 last:border-0"
                >
                  <span className="text-zinc-300">{item.day}</span>
                  <span
                    className={
                      item.hours === "Fechado"
                        ? "text-zinc-500 font-bold"
                        : "text-white font-bold"
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
              <a
                href={M_BARBER_CONFIG.links.lyndus}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-zinc-800 hover:bg-zinc-700 w-full py-2.5 px-4 rounded-md border border-zinc-700 transition-colors uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Ver horários disponíveis no Lyndus</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
