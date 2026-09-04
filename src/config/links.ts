
/* Configuração centralizada para dados, canais e integrações da M Barber. */

export const OFFICIAL_DATA = {
  WHATSAPP_PHONE: "41 9799-1206",
  WHATSAPP_RAW: "554197991206",
  WHATSAPP_LINK: "https://wa.me/554197991206",
  LYNDUS_URL: "https://qrco.de/bdHylb",
  INSTAGRAM_URL: "https://www.instagram.com/m.barber.1?igsi=MXI4djkwYjQ0N2EzbA==",
  INSTAGRAM_HANDLE: "@m.barber.1",
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
    display: OFFICIAL_DATA.WHATSAPP_PHONE,
    raw: OFFICIAL_DATA.WHATSAPP_RAW,
  },
  phoneDisplay: OFFICIAL_DATA.WHATSAPP_PHONE,
  phoneRaw: OFFICIAL_DATA.WHATSAPP_RAW,
  whatsappMessage: "",
  social: {
    instagramHandle: OFFICIAL_DATA.INSTAGRAM_HANDLE,
  },
  links: {
    lyndus: OFFICIAL_DATA.LYNDUS_URL,
    lyndusMaycon: OFFICIAL_DATA.LYNDUS_URL,
    lyndusAlysson: OFFICIAL_DATA.LYNDUS_URL,
    whatsapp: OFFICIAL_DATA.WHATSAPP_LINK,
    instagram: OFFICIAL_DATA.INSTAGRAM_URL,
    googleMaps: "https://www.google.com/maps/search/?api=1&query=M+Barber+Colombo+PR",
  },
  schedule: [
    { days: "Terça a Sexta-feira", hours: "09:00 às 20:00" },
    { days: "Sábado", hours: "10:00 às 18:00" },
    { days: "Domingo e Segunda-feira", hours: "Fechado" },
  ],
};

