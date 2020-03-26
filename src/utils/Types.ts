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

/*公開求人タグ*/
export type RecTag =
  | "初期"
  | "エリート"
  | "上級エリート"
  | "近距離"
  | "遠距離"
  | "先鋒タイプ"
  | "前衛タイプ"
  | "重装タイプ"
  | "特殊タイプ"
  | "狙撃タイプ"
  | "術師タイプ"
  | "医療タイプ"
  | "補助タイプ"
  | "火力"
  | "生存"
  | "防御"
  | "治療"
  | "支援"
  | "範囲攻撃"
  | "減速"
  | "牽制"
  | "弱化"
  | "COST回復"
  | "強制移動"
  | "爆発力"
  | "召喚"
  | "高速再配置"
  | "ロボット";

/*ドロップ*/
export type Drop = {
  stage: string /*ステージ名*/;
  rarity: number /*確率。確定入手の場合は0?*/;
};

/*昇進素材のレシピ*/
export type Recipe = {
  material: string;
  amount: number;
};

/*SPチャージタイプ*/
export type SPChargeType = "auto" | "";

/*SP発動タイプ*/
export type SkillActivation = "auto" | "manual" | "passive";

export const DATE_REGEXP = /(0[1-9]|1[0-2])\/(0[0-3]|1[0-9])$/;

export function isDateString(value: any) {
  return isString(value) && !!value.match(DATE_REGEXP);
}

/*オペレーター*/
export type Operator = {
  name: string /*名前*/;
  faction: Faction | Faction[] /*所属*/;
  gender: Gender /*性別*/;
  race: Race /*種族*/;
  class: Class /*職業*/;
  rarity: number /*レアリティ*/;
  height: number /*身長*/;
  combatExperience: number | "Unknown" /*戦闘経験*/;
  isInfected: boolean | "Unknown" /*感染者か否か*/;
  recTags: RecTag[] /*募集タグ*/;
  cv: string /*声優*/;
  skills: string[] /*スキル*/;
  talents: string[] /*素質*/;
  baseHP: number;
  baseATK: number;
  baseDef: number;
  baseArtsRes: number;
  baseRedeployTime: number;
  baseCost: number;
  baseBlock: number;
  attackInterval: number /*攻撃間隔*/;
  maxTrust: string /*信頼MAX時*/;
};

/*昇進素材*/
export type Material = {
  name: string /*素材名*/;
  rarity: number /*希少性*/;
  drops: Drop[] /*どこでドロップするか*/;
  recipes: Recipe[] /*製造レシピ*/;
};

/*スキル*/
export type Skill = {
  name: string;
  level: number;
  releasedAt: number;
  spCost: number;
  initialSP: number;
  chargeType: SPChargeType;
  activate: SkillActivation;
  effect: string;
};

/*素質*/
export type Talent = {
  name: string;
  releasedAt: number;
};
