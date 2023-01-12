import { createElement, generateRandomText } from "../lib/utils.js";

function home() {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  const img = createElement({ tag: "img", elementClass: "img" });
  const para = createElement({
    tag: "p",
    elementClass: "para",
    text: generateRandomText(3),
  });
  main.append(img, para);

  img.src =
    "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg";
}
export default home;
