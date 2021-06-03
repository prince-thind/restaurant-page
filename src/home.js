import { elementFactory,text } from "./init.js";


function home() {
  let main = document.querySelector(".main-text");
  main.innerHTML = "";
  let img = elementFactory("img", "", "img");
  img.src = "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg";
  let para = elementFactory("p", text, "");
  main.append(img, para);
}
export { home };
