import { isString } from "./assert";

export type Faction =
  | "Rhodes Island"
  | "Kjerag"
  | "Penguin Logistics"
  | "Rembid"
  | "Black Steel"
  | "Laterano"
  | "Ursus"
  | "Kazimierz"
  | "Victoria"
  | "Unknown";

export type Place =
  | "Kjerag"
  | "Rembid"
  | "Laterano"
  | "Ursus"
  | "Kazimierz"
  | "Victoria"
  | "Unknown";

export type Gender = "male" | "female" | "Unknown";

export type Class =
  | "Vanguard"
  | "Guard"
  | "Defender"
  | "Sniper"
  | "Caster"
  | "Medic"
  | "Supporter"
  | "Specialist";

export type Race =
  | "Anaty"
  | "Anura"
  | "Archosauria"
  | "Aslan"
  | "Caprinae"
  | "Cautus"
  | "Chimaera"
  | "Lung"
  | "Draco"
  | "Durin"
  | "Elafia"
  | "Feline"
  | "Forte"
  | "Itra"
  | "Kuranta"
  | "Liberi"
  | "Lupo"
  | "Manticore"
  | "Oni"
  | "Perro"
  | "Petram"
  | "Reproba"
  | "Sankta"
  | "Sarkaz"
  | "Savra"
  | "Ursus"
  | "Vouivre"
  | "Vulpo"
  | "Zalak"
  | "Unknown";

export const DATE_REGEXP = /(0[1-9]|1[0-2])\/(0[0-3]|1[0-9])$/;

export function isDateString(value: any) {
  return isString(value) && !!value.match(DATE_REGEXP);
}

export type Operator = {
  name: string;
  faction: Faction | Faction[];
  gender: Gender;
  race: Race;
  class: Class;
  height: number;
  combatExperience: number | "Unknown";
  isInfected: boolean | "Unknown";
};
