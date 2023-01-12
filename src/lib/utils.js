function createElement({ tag, elementClass, text }) {
  const element = document.createElement(tag);
  if (text) {
    element.innerText = text;
  }

  if (elementClass) {
    element.classList.add(elementClass);
  }

  return element;
}

function generateRandomText(n) {
  const txt =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, modi? Veritatis eos cupiditate rem\
  debitis pariatur neque sequi! Impedit rerum facilis nobis dolore tempora neque adipisci ipsam\
  perspiciatis debitis natus.";
  return txt.repeat(n);
}

export { createElement, generateRandomText };
