import Character from "../Character/Character";
import type CharacterData from "../Types/CharacterData";

export class King extends Character {
  yearsOfReign: number;

  constructor(characterData: CharacterData, yearsOfReign: number) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  communicate() {
    return `${super.communicate()}Everybody will die`;
  }
}
