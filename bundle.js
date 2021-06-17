(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,":root {\n  text-align: center;\n}\n* {\n  padding: 0;\n  margin: 0;\n}\nbody {\n  background-image: linear-gradient(0deg,rgb(49, 47, 33),rgb(13, 13, 31));\n  background-repeat: repeat-x;\n}\n.para,.space{\n  color:hsl(240, 36%, 85%);;\n}\n\n.header {\n  background-image: linear-gradient(0deg, hsl(240, 50%, 50%), hsl(240, 50%, 10%));\n  border: 2px solid black;\n}\n.header h1 {\n  color: hsl(240, 36%, 85%);\n  text-shadow: 2px 2px 2px black;\n  padding: 1rem;\n  border-bottom: 2px solid black;\n}\n.nav {\n  display: flex;\n  justify-content: center;\n}\n.item {\n  width: 20%;\n  padding: 1rem;\n  border-left: 1px solid black;\n  background-image: radial-gradient(hsl(240, 50%, 70%),hsl(240, 50%, 80%));\n}\n.item:last-child {\n  border-right: 1px solid black;\n}\n.item:hover {\n  transform: scale(1.05);\n  box-shadow: 0 0 0.1rem 0.1rem #000;\n  background-image: none;\n  background-color:#8bc34a;\n}\n.img {\n  width: 50%;\n  display: block;\n  margin: 1rem auto 1rem auto;\n  border: 3px solid black;\n}\n.main-text {\n  width: 80%;\n  margin: 0 auto;\n  padding: 3rem;\n  flex: 1 0 auto;\n}\n.footer {\n  padding: 1rem;\n  background-color: #8bc34a;\n  flex-shrink: 0;\n}\n\n/*menu*/\n.frame {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding: 2rem;\n  gap: 3rem;\n  border: 5px solid rgba(0, 0, 0, 0.185);\n  background-image: radial-gradient(rgb(34, 49, 33),rgb(31, 31, 13));\n}\n@media(max-width:55rem){\n  .frame{\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.cell {\n  background-color: #a5c98d;\n  width: 60%;\n  margin:0 auto;\n  min-width: 10rem;\n  border: 7px ridge rgb(0, 61, 61);\n}\n.cell:hover{\n  transform: scale(1.1);\n}\n.cell-img {\n  width: 30%;\n  height: auto;\n  padding: 2rem;\n}\n.cell-cap {\n  background-color: rgb(2, 17, 17);\n  color:white;\n  padding: 0.5rem;\n}\n\n.menu-text {\n  padding: 3rem;\n}\n\n/*about*/\n.space{\n  padding-bottom: 2rem;\n  width: 80%;\n  margin: 0 auto;\n}",""]);const o=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},379:(n,e,t)=>{var r,a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function i(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],a=0;a<n.length;a++){var c=n[a],d=e.base?c[0]+e.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=i(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:g(p,e),references:1}),r.push(l)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function u(n,e,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,a);else{var o=document.createTextNode(a),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(o,i[e]):n.appendChild(o)}}function p(n,e,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,f=0;function g(n,e){var t,r,a;if(e.singleton){var o=f++;t=m||(m=d(e)),r=u.bind(null,t,o,!1),a=u.bind(null,t,o,!0)}else t=d(e),r=p.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var a=i(t[r]);o[a].references--}for(var d=c(n,e),s=0;s<t.length;s++){var l=i(t[s]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=d}}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{const n=function(){const n=document.querySelector(".main-text");n.innerHTML="";const t=e("img","","img");t.src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg";const a=e("p",r(3),"para");n.append(t,a)};function e(n,e,t){const r=document.createElement(n);return e&&(r.innerText=e),t&&r.classList.add(t),r}function r(n){return"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, modi? Veritatis eos cupiditate remdebitis pariatur neque sequi! Impedit rerum facilis nobis dolore tempora neque adipisci ipsamperspiciatis debitis natus.".repeat(n)}var a=t(379),o=t.n(a),i=t(426);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,function(){const t=document.querySelector("#content");t.innerHTML="";const r=e("header","","header");t.append(r);const a=e("h1","Shady Burgers");r.append(a);const o=e("nav","","nav");r.append(o);const i=e("div","Home","item"),c=e("div","Menu","item"),d=e("div","About","item");o.append(i,c,d);const s=e("main","","main-text");t.append(s),n();const l=e("footer","","footer"),u=e("div","Established c.2014","");t.append(l),l.append(u)}(),function(){const t=[...document.querySelectorAll(".item")];for(const n of t)n.addEventListener("click",a);function a(t){switch(t.target.innerText.toLowerCase()){case"home":n();break;case"menu":!function(){const n=document.querySelector(".main-text");n.innerHTML="";const t=e("div","","frame");n.append(t);for(let n=1;n<=9;n++){const n=e("div","","cell"),r=e("img","","cell-img");r.src="https://cdn.pixabay.com/photo/2012/04/13/01/51/hamburger-31775_960_720.png";const a=e("div","caption","cell-cap");t.append(n),n.append(r),n.append(a)}const a=e("p",r(2),"menu-text");n.append(a)}();break;case"about":!function(){document.querySelector("#content");const n=document.querySelector(".main-text");n.innerHTML="";for(let t=0;t<5;t++){const t=e("p",r(3*Math.random()+1),"space");n.append(t)}}()}}}()})()})();