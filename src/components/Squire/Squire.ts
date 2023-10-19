import Character from "../Character/Character";
import type { SquireData } from "../../types";
import Fighter from "../Fighter/Fighter";

export class Squire extends Character {
  kissAssLevel;
  serves;

  constructor(data: SquireData) {
    super(data);
    this.kissAssLevel = this.kissAssLevelFilter(data.kissAssLevel);
    this.serves = data.serves;

    if (data.serves instanceof Fighter) {
      this.serves = data.serves;
    }
  }

  protected communicate(): string {
    return `${super.communicate()}I'm a loser`;
  }

  protected kissAssLevelFilter(kissAssLevel: number): number {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}

export default Squire;
