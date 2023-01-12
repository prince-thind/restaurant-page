import { createElement, generateRandomText } from "../lib/utils.js";

function about() {
  const main = document.querySelector("#main");
  main.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const para = createElement({
      tag: "p",
      elementClass: "para",
      text: generateRandomText(3),
    });

    main.append(para);
  }
}
export default about;
