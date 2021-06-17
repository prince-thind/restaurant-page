import generateHome from "./home.js";

function init() {
  const parent = document.querySelector("#content");
  parent.innerHTML = "";

  const header = elementFactory("header", "", "header");
  parent.append(header);
  const h1 = elementFactory("h1", "Shady Burgers");
  header.append(h1);
  const nav = elementFactory("nav", "", "nav");
  header.append(nav);

  const tab1 = elementFactory("div", "Home", "item");
  const tab2 = elementFactory("div", "Menu", "item");
  const tab3 = elementFactory("div", "About", "item");
  nav.append(tab1, tab2, tab3);

  const main = elementFactory("main", "", "main-text");
  parent.append(main);

  generateHome();
  const footer = elementFactory("footer", "", "footer");
  const footerp = elementFactory("div", "Established c.2014", "");
  parent.append(footer);
  footer.append(footerp);
}

function elementFactory(e, text, eClass) {
  const element = document.createElement(e);
  if (text) {
    element.innerText = text;
  }

  if (eClass) {
    element.classList.add(eClass);
  }

  return element;
}

function makeText(n) {
  const txt =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, modi? Veritatis eos cupiditate rem\
debitis pariatur neque sequi! Impedit rerum facilis nobis dolore tempora neque adipisci ipsam\
perspiciatis debitis natus.";
  return txt.repeat(n)
}

export { elementFactory, makeText };
export default init;
