import App from "./components/App/App.js";
import List from "./components/List/List.js";

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
