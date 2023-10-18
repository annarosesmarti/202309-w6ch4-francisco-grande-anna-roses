abstract class Component {
  private readonly element: Element;

  constructor(
    private readonly parentElement: Element,
    private readonly tagName: string,
    private readonly className: string,
  ) {
    this.parentElement = parentElement;
    this.element = document.createElement(tagName);
    this.element.className = className;
  }

  public render(): void {
    this.parentElement.appendChild(this.element);
  }

  abstract populate(): void;
}

export default Component;
