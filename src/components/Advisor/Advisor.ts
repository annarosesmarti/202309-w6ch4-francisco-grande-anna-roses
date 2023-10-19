import Character from "../Character/Character";
import type { AdvisorData } from "../../types";

class Adviser extends Character {
  adviseCharacter;

  constructor(data: AdvisorData) {
    super(data);

    if (data.adviseCharacter instanceof Character) {
      this.adviseCharacter = data.adviseCharacter;
    }
  }

  protected communicate(): string {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}

export default Adviser;
