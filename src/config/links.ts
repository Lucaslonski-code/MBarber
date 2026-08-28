/**
 * Configuração centralizada para redirecionamentos e canais externos da M Barber.
 * AMBIENTE DE TESTES / DESENVOLVIMENTO:
 * Todos os destinos, canais e integrações externas utilizam o identificador de teste @mbarbertests.
 */

export const TEST_IDENTIFIER = "@mbarbertests";

export const TEST_DESTINATIONS = {
  LYNDUS: "@mbarbertests",
  WHATSAPP: "@mbarbertests",
  INSTAGRAM: "@mbarbertests",
  MAPS: "@mbarbertests",
} as const;

export interface BusinessConfig {
  brandName: string;
  locationCity: string;
  locationState: string;
  locationRegion: string;
  fullAddress: string;
  address: {
    full: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: {
    display: string;
    raw: string;
  };
  phoneDisplay: string;
  phoneRaw: string;
  whatsappMessage: string;
  social: {
    instagramHandle: string;
  };
  links: {
    lyndus: string;
    lyndusMaycon: string;
    lyndusAlysson: string;
    whatsapp: string;
    instagram: string;
    googleMaps: string;
  };
  schedule: Array<{
    days: string;
    hours: string;
    statusNote?: string;
  }>;
}

export const M_BARBER_CONFIG: BusinessConfig = {
  brandName: "M Barber",
  locationCity: "Colombo",
  locationState: "PR",
  locationRegion: "Região Metropolitana de Curitiba",
  fullAddress: "Colombo, Paraná",
  address: {
    full: "Colombo, Paraná",
    street: "Unidade M Barber",
    neighborhood: "Colombo",
    city: "Colombo",
    state: "PR",
    zip: "83400-000",
  },
  phone: {
    display: TEST_IDENTIFIER,
    raw: TEST_IDENTIFIER,
  },
  phoneDisplay: TEST_IDENTIFIER,
  phoneRaw: TEST_IDENTIFIER,
  whatsappMessage: TEST_IDENTIFIER,
  social: {
    instagramHandle: TEST_IDENTIFIER,
  },
  links: {
    lyndus: TEST_DESTINATIONS.LYNDUS,
    lyndusMaycon: TEST_DESTINATIONS.LYNDUS,
    lyndusAlysson: TEST_DESTINATIONS.LYNDUS,
    whatsapp: TEST_DESTINATIONS.WHATSAPP,
    instagram: TEST_DESTINATIONS.INSTAGRAM,
    googleMaps: TEST_DESTINATIONS.MAPS,
  },
  schedule: [
    { days: "Terça a Sexta-feira", hours: "09:00 às 20:00" },
    { days: "Sábado", hours: "10:00 às 18:00" },
    { days: "Domingo e Segunda-feira", hours: "Fechado" },
  ],
};
