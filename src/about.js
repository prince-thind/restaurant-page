import { elementFactory,text } from "./init.js";

function about() {
  let parent = document.querySelector("#content");
 let main=document.querySelector(".main-text")
 main.innerHTML = "";
 let para = elementFactory("p", text.repeat(5), "");
 main.append( para);
}
export { about };
