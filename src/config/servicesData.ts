import { M_BARBER_CONFIG } from "./links";

export interface ServiceItem {
  id: string;
  name: string;
  category: "cabelo" | "barba" | "combos" | "cuidados";
  tagline: string;
  description: string;
  duration: string;
  price: string;
  highlight?: boolean;
  highlightBadge?: string;
  includedSteps: string[];
  lyndusUrl: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "corte-comum",
    name: "Corte Comum",
    category: "cabelo",
    tagline: "Degradê, social, tesoura ou máquina",
    description:
      "Corte executado com precisão de acordo com o seu gosto e estrutura capilar. Inclui lavagem rápida e finalização com pomada modeladora.",
    duration: "30 min",
    price: "R$ 35,00",
    highlight: true,
    highlightBadge: "MAIS PEDIDO",
    includedSteps: [
      "Corte no estilo de sua preferência",
      "Acabamento e contornos bem alinhados",
      "Lavagem rápida para retirar fios soltos",
      "Finalização e penteado com pomada",
    ],
    lyndusUrl: M_BARBER_CONFIG.links.lyndus,
  },
  {
    id: "combo-corte-barba",
    name: "Corte + Barba",
    category: "combos",
    tagline: "Corte completo e barba no mesmo atendimento",
    description:
      "Atendimento integrado com corte completo, acabamento refinado e barba feita com toalha aquecida e navalha.",
    duration: "60 min",
    price: "R$ 70,00",
    highlight: true,
    includedSteps: [
      "Corte de cabelo completo e alinhado",
      "Barba desenhada com toalha aquecida",
      "Lavagem e higienização dos fios",
      "Finalização com pomada e óleo hidratante",
    ],
    lyndusUrl: M_BARBER_CONFIG.links.lyndus,
  },
  {
    id: "barba-completa",
    name: "Barba com Toalha Quente",
    category: "barba",
    tagline: "Desenho da barba, toalha aquecida e pós-barba",
    description:
      "Barba desenhada com navalha e lâmina descartável. A toalha quente abre os poros e amacia os pelos, evitando irritações.",
    duration: "40 min",
    price: "R$ 40,00",
    highlight: true,
    includedSteps: [
      "Aplicação de óleo pré-barba",
      "Toalha aquecida para amaciar os fios",
      "Alinhamento com navalha descartável",
      "Bálsamo pós-barba e hidratação",
    ],
    lyndusUrl: M_BARBER_CONFIG.links.lyndus,
  },
];
