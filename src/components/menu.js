import { elementFactory, makeText } from "./init.js";

function menu() {
  const main = document.querySelector(".main-text");
  main.innerHTML = "";

  const frame = elementFactory("div", "", "frame");
  main.append(frame);

  for (let i = 1; i <= 9; i++) {
    const cell = elementFactory("div", "", "cell");
    const cellImg = elementFactory("img", "", "cell-img");
    cellImg.src = "https://cdn.pixabay.com/photo/2012/04/13/01/51/hamburger-31775_960_720.png";
    const cellCap = elementFactory("div", "caption", "cell-cap");
    frame.append(cell);
    cell.append(cellImg);
    cell.append(cellCap);
  }
  const para = elementFactory("p", makeText(2), "menu-text");
  main.append(para);
}
export default menu;
