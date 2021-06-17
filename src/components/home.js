import { elementFactory,makeText } from "./init.js";


function home() {
  const main = document.querySelector(".main-text");
  main.innerHTML = "";
  
  const img = elementFactory("img", "", "img");
  img.src = "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg";
  const para = elementFactory("p", makeText(3), "para");
  main.append(img, para);
}
export default home;
