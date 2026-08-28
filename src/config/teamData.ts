import { M_BARBER_CONFIG } from "./links";

export interface TeamMember {
  id: string;
  name: "Maycon" | "Alysson";
  lyndusUrl: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "maycon",
    name: "Maycon",
    lyndusUrl: M_BARBER_CONFIG.links.lyndusMaycon || M_BARBER_CONFIG.links.lyndus,
  },
  {
    id: "alysson",
    name: "Alysson",
    lyndusUrl: M_BARBER_CONFIG.links.lyndusAlysson || M_BARBER_CONFIG.links.lyndus,
  },
];
