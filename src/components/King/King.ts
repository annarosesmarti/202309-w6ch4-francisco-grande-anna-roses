import Character from "../Character/Character";
import type { KingData } from "../../types";

export class King extends Character {
  yearsOfReign;

  constructor(data: KingData) {
    super(data);
    this.yearsOfReign = data.yearsOfReign;
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}