import { type CharacterData } from "../../types";

abstract class Character {
  isAlive: boolean;
  series: string;

  constructor(public characterData: CharacterData) {
    this.characterData = characterData;
    this.isAlive = true;
    this.series = "Game of Thrones";
  }

  protected communicate(): string {
    return `${this.characterData.name} says: `;
  }

  protected die() {
    this.isAlive = false;
  }
}

export default Character;
