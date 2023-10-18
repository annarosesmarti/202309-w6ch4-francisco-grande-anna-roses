import App from "./App/App.js";

const parentElement = document.querySelector(".app")!;
const main = new App("div", parentElement, "main");
main.render();
