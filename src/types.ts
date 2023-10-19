import type Fighter from "./components/Fighter/Fighter";
import type Character from "./components/Character/Character";

export interface CharacterData {
  name: string;
  family: string;
  age: number;
  img: string;
}

export interface KingData extends CharacterData {
  yearsOfReign: number;
}

export interface FighterData extends CharacterData {
  weapon: string;
  dexterity: number;
}

export interface AdvisorData extends CharacterData {
  adviseCharacter: Character;
}

export interface SquireData extends CharacterData {
  serves: Fighter;
  kissAssLevel: number;
}
