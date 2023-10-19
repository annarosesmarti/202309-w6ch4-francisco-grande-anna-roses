import Character from "../Character/Character";
import type { FighterData } from "../../types";

export class Fighter extends Character {
  weapon;
  dexterity;

  constructor(data: FighterData) {
    super(data);
    this.weapon = data.weapon;
    this.dexterity = data;
  }

  communicate(): string {
    return `${super.communicate()}First I hit and then I ask`;
  }

  private filterDexterity(dexterity: number) {
    if (dexterity < 0) {
      return 0;
    }

    if (dexterity > 10) {
      return 10;
    }

    return dexterity;
  }
}
