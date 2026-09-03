/**
 * Configuração oficial de imagens e identidade visual da M Barber.
 * Utiliza estritamente os arquivos oficiais fornecidos pelo cliente:
 * - Logo oficial: MbarberLogo.png
 * - Fachada externa: 1000150365.webp
 * - Salão principal amplo: 1000150366.webp
 * - Parede com neon e logo 3D: 1000150367.webp
 * - Estação de atendimento / bancada: 1000150368.webp
 */

import logoAsset from "../assets/MbarberLogo.png";
import salaoAsset from "../assets/1000150366.webp";
import neonAsset from "../assets/1000150367.webp";
import bancadaAsset from "../assets/1000150368.webp";
import fachadaAsset from "../assets/1000150365.webp";

export interface BarberPhotoMeta {
  id: string;
  filename: string;
  src: string;
  publicPath: string;
  title: string;
  subtitle: string;
  alt: string;
  description: string;
  badge: string;
  objectPosition: string;
  aspectRatio: string;
}

export const M_BARBER_IMAGES = {
  logo: {
    filename: "MbarberLogo.png",
    src: logoAsset,
    publicPath: "/MbarberLogo.png",
    alt: "M Barber - Barbearia Oficial em Colombo, PR",
  },
  photos: {
    // 1. Salão Principal Amplo - Destaque Principal no Hero
    salao: {
      id: "salao-amplo",
      filename: "1000150366.webp",
      src: salaoAsset,
      publicPath: "/1000150366.webp",
      title: "Salão Principal",
      subtitle: "Espaço amplo e climatizado",
      alt: "Fotografia oficial do salão amplo da M Barber em Colombo com estações profissionais de corte, espelhos com iluminação e sofás de recepção",
      description:
        "Visão panorâmica do salão com múltiplas estações de corte, iluminação direcionada, sofás confortáveis de espera e lavatório ao fundo.",
      badge: "SALÃO PRINCIPAL • DESTAQUE",
      objectPosition: "object-[50%_65%]",
      aspectRatio: "aspect-[16/10]",
    } as BarberPhotoMeta,

    // 2. Estação de Atendimento & Bancada - Precisão & Ferramentas
    bancada: {
      id: "estacao-corte",
      filename: "1000150368.webp",
      src: bancadaAsset,
      publicPath: "/1000150368.webp",
      title: "Estação de Atendimento",
      subtitle: "Bancada e cadeira de barbeiro",
      alt: "Fotografia oficial da estação de atendimento individual da M Barber com cadeira de couro ergonômica, espelho amplo e ferramentas de corte",
      description:
        "Cadeira de barbeiro profissional com acabamento clássico em couro e cromo, espelho iluminado e bancada equipada com maquinários de alta precisão.",
      badge: "PRECISÃO & FERRAMENTAS",
      objectPosition: "object-[50%_45%]",
      aspectRatio: "aspect-[4/5]",
    } as BarberPhotoMeta,

    // 3. Parede com Neon & Identidade 3D - Ambiência & Tradição
    neon: {
      id: "parede-neon",
      filename: "1000150367.webp",
      src: neonAsset,
      publicPath: "/1000150367.webp",
      title: "Identidade & Lavatório",
      subtitle: "Neons estilizados e logo 3D",
      alt: "Fotografia oficial da parede com neons decorativos (secador, poste de barbeiro, tesoura), logotipo M Barber em relevo 3D e cadeira de lavatório",
      description:
        "Parede de destaque com iluminação neon autêntica, logotipo dimensional M Barber e cadeira de lavatório para lavagem capilar e toalha quente.",
      badge: "IDENTIDADE & AMBIÊNCIA",
      objectPosition: "object-[50%_30%]",
      aspectRatio: "aspect-[4/5]",
    } as BarberPhotoMeta,

    // 4. Fachada Externa Oficial - Localização & Reconhecimento
    fachada: {
      id: "fachada",
      filename: "1000150365.webp",
      src: fachadaAsset,
      publicPath: "/1000150365.webp",
      title: "Fachada & Entrada",
      subtitle: "Colombo, PR • Desde 2017",
      alt: "Fotografia oficial da fachada externa da M Barber em Colombo com identificação visual 'M BARBER BARBEARIA 41 9799-1206 Desde 2017' e rampa de acesso",
      description:
        "Fachada oficial na Rua das Flores em Colombo, com identificação visual nítida, telefone para contato e rampa de acessibilidade.",
      badge: "RECONHECIMENTO DO LOCAL",
      objectPosition: "object-[50%_25%]",
      aspectRatio: "aspect-[16/10]",
    } as BarberPhotoMeta,
  },
} as const;

// Lista ordenada para componentes que iteram por todas as fotos oficiais
export const M_BARBER_ALL_PHOTOS: BarberPhotoMeta[] = [
  M_BARBER_IMAGES.photos.salao,
  M_BARBER_IMAGES.photos.bancada,
  M_BARBER_IMAGES.photos.neon,
  M_BARBER_IMAGES.photos.fachada,
];

