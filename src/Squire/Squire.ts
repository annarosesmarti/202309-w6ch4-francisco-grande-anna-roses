import Character from "../Character/Character";
import { Fighter } from "../Fighter/Fighter";
import type { SquireData } from "../type/type";

export class Squire extends Character {
  kissAssLevel;
  serves;

  constructor(data: SquireData, kissAssLevel: number) {
    super(data);
    this.kissAssLevel = this.kissAssLevelFilter(kissAssLevel);

    if (data.serves instanceof Fighter) {
      this.serves = data.serves;
    }
  }

  communicate(): string {
    return `${super.communicate()}I'm a loser`;
  }

  private kissAssLevelFilter(kissAssLevel: number): number {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}
