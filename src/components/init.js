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
  const img = elementFactory("img", "", "img");
  img.src = "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg";
  const para = elementFactory("p", text, "");
  main.append(img, para);
  const footer = elementFactory("footer", "", "footer");
  const footerp = elementFactory("p", "Established c.2014", "");
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
const text =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, modi? Veritatis eos cupiditate rem\
debitis pariatur neque sequi! Impedit rerum facilis nobis dolore tempora neque adipisci ipsam\
perspiciatis debitis natus.";

export { elementFactory };
export { init };
export { text };
