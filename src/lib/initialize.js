import generateHome from "../components/home.js";
import { createElement } from "./utils.js";

function init() {
  const parent = document.querySelector("#root");
  parent.innerHTML = "";

  const header = createElement({ tag: "header", elementClass: "header" });
  parent.append(header);
  const h1 = createElement({ tag: "h1", text: "Shady Burgers" });
  header.append(h1);
  const nav = createElement({ tag: "nav", elementClass: "nav" });
  header.append(nav);

  const tab1 = createElement({
    tag: "div",
    elementClass: "item",
    text: "Home",
  });
  const tab2 = createElement({
    tag: "div",
    elementClass: "item",
    text: "Menu",
  });
  const tab3 = createElement({
    tag: "div",
    elementClass: "item",
    text: "About",
  });
  nav.append(tab1, tab2, tab3);

  const main = createElement({ tag: "main", elementClass: "main" });
  parent.append(main);

  const footer = createElement({
    tag: "footer",
    elementClass: "footer",
    text: "Established C 2014",
  });
  parent.append(footer);

  generateHome();
}

export default init;
