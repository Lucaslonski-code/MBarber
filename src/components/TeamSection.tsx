import React from "react";
import { TEAM_MEMBERS, TeamMember } from "../config/teamData";
import { ExternalLink, Scissors, UserCheck, ShieldCheck } from "lucide-react";

export const TeamSection: React.FC = () => {
  return (
    <section
      id="barbeiros"
      className="py-16 sm:py-20 lg:py-28 bg-[#070709] text-white border-b border-zinc-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Asymmetric Rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12 sm:mb-14 pb-6 sm:pb-8 border-b border-zinc-850">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
              Equipe Profissional
            </span>
            <h2 className="headline-fluid-section font-extrabold tracking-tight text-white">
              Dois profissionais. <br className="hidden sm:inline" />
              <span className="text-zinc-400 font-light">Técnica e pontualidade.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Maycon e Alysson atendem na M Barber em Colombo com técnica afiada, atenção ao detalhe e respeito ao seu estilo. Escolha o seu barbeiro no Lyndus.
            </p>
          </div>
        </div>

        {/* 2 Barbers Grid - Maycon & Alysson */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member: TeamMember, idx: number) => (
            <div
              key={member.id}
              className="p-6 sm:p-8 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-750 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-wider">
                    Profissional Especialista
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800 text-[11px] font-mono text-zinc-300 border border-zinc-700">
                    <UserCheck className="w-3 h-3 text-zinc-300 shrink-0" />
                    <span>M Barber Colombo</span>
                  </div>
                </div>

                {/* Barber Name */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {member.name}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  Especialista em corte masculino, degradê, tesoura e barba com toalha quente. Atendimento com hora marcada em Colombo, PR.
                </p>

                {/* Qualities list */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-zinc-850">
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                    <Scissors className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>Cortes clássicos, modernos e visagismo prático</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>Pontualidade e cuidado em cada detalhe</span>
                  </div>
                </div>
              </div>

              {/* Booking CTA for specific Barber */}
              <div className="pt-4 border-t border-zinc-800">
                <a
                  href={member.lyndusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] w-full bg-white text-zinc-950 hover:bg-zinc-200 py-3.5 px-4 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Agendar com {member.name} no Lyndus</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notice text */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-xs text-zinc-500 font-mono">
            Agendamentos gerenciados diretamente através do aplicativo externo Lyndus.
          </p>
        </div>

      </div>
    </section>
  );
};
