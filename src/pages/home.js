import { createElement, generateRandomText } from "../lib/utils.js";

function home() {
  const main = document.querySelector("#main");
  main.innerHTML = "";

  const homeDiv = createElement({ tag: "div", elementClass: "home-container" });

  const container1 = createElement({ tag: "div" });
  const container2 = createElement({ tag: "div" });

  const img = createElement({ tag: "img", elementClass: "img" });
  img.src = "images/home.jpg";

  const homeTagLine = createElement({
    tag: "p",
    elementClass: "home-tag-line",
    text: "Welcome To Shady Burgers!",
  });

  const para1 = createElement({
    tag: "p",
    elementClass: "para",
    text: generateRandomText(1),
  });

  const para2 = createElement({
    tag: "p",
    elementClass: "para",
    text: generateRandomText(2),
  });

  container1.append(img, homeTagLine);
  container2.append(para1, para2);

  homeDiv.append(container1, container2);
  main.append(homeDiv);
}
export default home;
