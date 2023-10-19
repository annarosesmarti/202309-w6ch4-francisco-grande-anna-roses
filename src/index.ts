import App from "./components/App/App.js";

const appClass = document.querySelector(".app")!;
const divContainer = new App(appClass, "div", "container");
divContainer.render();

const container = document.querySelector(".container")!;
const unorderList = new App(
  container,
  "ul",
  "characters-list row list-unstyled",
);
unorderList.render();
