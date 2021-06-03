import {init} from "./init.js";
import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

init();
main();

function main(){
    let tabs=[...document.querySelectorAll(".item")];
    for (let tab of tabs){
        tab.addEventListener("click",link)
    }
    function link(e){
        let pageName=e.target.innerText.toLowerCase();
        switch(pageName){
            case "home":home();
            break;
            case "menu":menu();
            break;
            case "about":about();
            break;
        }
    }
}

function elementFactory(e, text, eClass) {
    let element = document.createElement(e);
    if (text) {
      element.innerText = text;
    }

    if (eClass) {
      element.classList.add(eClass);
    }

    return element;
  }

export {elementFactory};