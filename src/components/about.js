import { elementFactory,text } from "./init.js";

function about() {
  const parent = document.querySelector("#content");
 const main=document.querySelector(".main-text")
 main.innerHTML = "";
 const para = elementFactory("p", text.repeat(5), "");
 main.append( para);
}
export { about };
