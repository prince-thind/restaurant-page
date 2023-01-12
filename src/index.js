import "./style.css";

import init from "./lib/initialize.js";
import generateHome from "./pages/home.js";
import generateMenu from "./pages/menu.js";
import generateAbout from "./pages/about.js";

init();
setupRoutes();

function setupRoutes() {
  const navBar = document.querySelector("#nav");
  navBar.addEventListener("click", navigate);

  function navigate(e) {
    const pageName = e.target.innerText.toLowerCase();
    switch (pageName) {
      case "home":
        generateHome();
        break;
      case "menu":
        generateMenu();
        break;
      case "about":
        generateAbout();
        break;
    }
  }
}
