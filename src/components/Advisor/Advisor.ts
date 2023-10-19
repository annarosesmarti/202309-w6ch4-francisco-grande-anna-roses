import Character from "../Character/Character";
import type { AdvisorData } from "../../types";

export class Adviser extends Character {
  adviseCharacter;

  constructor(data: AdvisorData) {
    super(data);
    this.adviseCharacter = data.adviseCharacter;
  }

  communicate(): string {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
