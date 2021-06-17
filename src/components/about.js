import { elementFactory, makeText } from "./init.js";

function about() {
  const parent = document.querySelector("#content");
  const main = document.querySelector(".main-text");
  main.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const para = elementFactory("p", makeText(Math.random()*3+1), "space");
    main.append(para);
  }
}
export default about;
