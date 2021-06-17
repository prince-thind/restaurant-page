import init from "./components/init.js";
import home from "./components/home.js";
import menu from "./components/menu.js";
import about from "./components/about.js";
import "./style.css";

init();
main();

function main() {
  const tabs = [...document.querySelectorAll(".item")];
  for (const tab of tabs) {
    tab.addEventListener("click", link);
  }

  function link(e) {
    const pageName = e.target.innerText.toLowerCase();
    switch (pageName) {
      case "home":
        home();
        break;
      case "menu":
        menu();
        break;
      case "about":
        about();
        break;
    }
  }
}
