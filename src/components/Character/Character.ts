import type { CharacterData } from "../../types";

class Character {
  isAlive: boolean;
  series: string;

  constructor(public characterData: CharacterData) {
    this.characterData = characterData;
  }

  communicate(): string {
    return `${this.characterData.name} says: `;
  }

  die() {
    this.isAlive = false;
  }
}

export default Character;
