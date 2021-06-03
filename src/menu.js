import {elementFactory,text} from "./init.js"
function menu(){
    let main = document.querySelector(".main-text");
    main.innerHTML = "";
    let frame=elementFactory("div","","frame");
    main.append(frame);
    for(let i=1;i<=8;i++){
        let cell=elementFactory("div","","cell");
        let cellImg=elementFactory("img","","cell-img");
        cellImg.src="https://cdn.pixabay.com/photo/2012/04/13/01/51/hamburger-31775_960_720.png";
        let cellCap=elementFactory("div","caption","cell-cap");
        frame.append(cell);
        cell.append(cellImg);
        cell.append(cellCap);
    }
    let para = elementFactory("p", text, "menu-text");
  main.append( para);
}
export {menu};