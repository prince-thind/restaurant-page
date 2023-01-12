import { createElement, generateRandomText } from "../lib/utils.js";

function menu() {
  const main = document.querySelector("#main");
  main.innerHTML = "";

  const frame = createElement({ tag: "div", elementClass: "frame" });

  for (let i = 1; i <= 9; i++) {
    const cell = createElement({ tag: "div", elementClass: "cell" });
    const cellImg = createElement({ tag: "img", elementClass: "cell-img" });
    cellImg.src = "images/burger.webp";
    const cellCap = createElement({
      tag: "div",
      elementClass: "cell-cap",
      text: "caption",
    });

    frame.append(cell);
    cell.append(cellImg);
    cell.append(cellCap);
  }

  const para = createElement({
    tag: "p",
    elementClass: "menu-text",
    text: generateRandomText(2),
  });

  main.append(frame);
  main.append(para);
}
export default menu;
