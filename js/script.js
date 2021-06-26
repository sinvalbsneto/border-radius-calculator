function getPreviewStyles(style) {
  let styles = getComputedStyle(preview);

  let funcStyle = styles.getPropertyValue(style);

  return funcStyle;
}

function changeTopLeft(value) {
  let preview = document.getElementById("preview");

  preview.style.borderTopLeftRadius = value + '%';

  let border = getPreviewStyles("border-top-left-radius");

  let topLeftCSS = document.getElementById("top-left-css");

  topLeftCSS.innerHTML = border;
}

function changeTopRight(value) {
  let preview = document.getElementById("preview");

  preview.style.borderTopRightRadius = value + '%';

  let border = getPreviewStyles("border-top-right-radius");

  let topRightCSS = document.getElementById("top-right-css");

  topRightCSS.innerHTML = border;
}

function changeBottomLeft(value) {
  let preview = document.getElementById("preview");

  preview.style.borderBottomLeftRadius = value + '%';

  let border = getPreviewStyles("border-bottom-left-radius");

  let bottomLeftCSS = document.getElementById("bottom-left-css");

  bottomLeftCSS.innerHTML = border;
}

function changeBottomRight(value) {
  let preview = document.getElementById("preview");

  preview.style.borderBottomRightRadius = value + '%';

  let border = getPreviewStyles("border-bottom-right-radius");

  let bottomRightCSS = document.getElementById("bottom-right-css");

  bottomRightCSS.innerHTML = border;
}

function changeColor(value) {
  let preview = document.getElementById("preview");

  preview.style.backgroundColor = value;

  let color = getPreviewStyles("background-color");

  let colorCSS = document.getElementById("color-css");

  colorCSS.innerHTML = color;
}