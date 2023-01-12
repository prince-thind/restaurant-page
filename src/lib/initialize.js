import generateHome from "../pages/home.js";
import { createElement } from "./utils.js";

export default function init() {
  const root = document.querySelector("#root");
  root.innerHTML = "";

  const header = generateHeader();

  const main = generateMainTag();

  const footer = generateFooter();

  root.append(header);
  root.append(main);
  root.append(footer);

  generateHome();
}

function generateHeader() {
  const header = createElement({ tag: "header", elementClass: "header" });
  const h1 = createElement({
    tag: "h1",
    text: "Shady Burgers",
    elementClass: "heading",
  });

  const nav = createElement({ tag: "nav", elementClass: "nav" });
  nav.id = "nav";

  const generateNavTab = (name) =>
    createElement({
      tag: "div",
      elementClass: "nav-item",
      text: name,
    });

  const tab1 = generateNavTab("Home");
  const tab2 = generateNavTab("Menu");
  const tab3 = generateNavTab("About");

  nav.append(tab1, tab2, tab3);

  header.append(h1);
  header.append(nav);

  return header;
}

function generateFooter() {
  return createElement({
    tag: "footer",
    elementClass: "footer",
    text: "Established C 2014",
  });
}

function generateMainTag() {
  const main = createElement({ tag: "main", elementClass: "main" });
  main.id = "main";

  return main;
}
