import type CharacterData from "../Types/CharacterData";

class Character {
  isAlive: boolean;
  series: string;

  constructor(public characterData: CharacterData) {
    this.characterData = characterData;
  }

  communicate() {
    return `${this.characterData.name} says: `;
  }

  die() {
    this.isAlive = false;
  }
}

export default Character;
