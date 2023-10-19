import App from "../App/App";
import { type characters } from "../characters/characters";
import Card from "../Card/Card";

class List extends App {
  constructor(
    parentElement: HTMLLIElement,
    private readonly characters: characters[],
  ) {
    super(parentElement, "ul", "character");
  }

  protected populate(): void {
    this.characters.forEach(() => {
      const listElement = document.createElement("li .col");
      this.element.appendChild(listElement);
    });
  }
}

export default List;
