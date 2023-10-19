class App {
  protected element: Element;
  private readonly parentElement: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
    this.populate();
  }

  protected populate(): void {
    this.element.textContent = "";
  }
}

export default App;
