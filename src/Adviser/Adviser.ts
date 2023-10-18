import Character from "../Character/Character";
import type { AdviserData } from "../type/type";

export class Adviser extends Character {
  adviseCharacter;

  constructor(data: AdviserData) {
    super(data);
    this.adviseCharacter = data.adviseCharacter;
  }

  communicate(): string {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
