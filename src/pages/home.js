import { createElement, generateRandomText } from "../lib/utils.js";

function home() {
  const main = document.querySelector("#main");
  main.innerHTML = "";

  const img = createElement({ tag: "img", elementClass: "img" });
  img.src = "images/home.jpg";

  const para = createElement({
    tag: "p",
    elementClass: "para",
    text: generateRandomText(3),
  });

  main.append(img, para);
}
export default home;
