function changeTopLeft(value) {
  let preview = document.getElementById("preview");

  preview.style.borderTopLeftRadius = value + '%';

  let styles = getComputedStyle(preview);

  let border = styles.getPropertyValue("border-top-left-radius");

  let topLeftCSS = document.getElementById("top-left-css");

  topLeftCSS.innerHTML = border;
}

function changeTopRight(value) {
  let preview = document.getElementById("preview");

  preview.style.borderTopRightRadius = value + '%';

  let styles = getComputedStyle(preview);

  let border = styles.getPropertyValue("border-top-right-radius");

  let topRightCSS = document.getElementById("top-right-css");

  topRightCSS.innerHTML = border;
}

function changeBottomLeft(value) {
  let preview = document.getElementById("preview");

  preview.style.borderBottomLeftRadius = value + '%';

  let styles = getComputedStyle(preview);

  let border = styles.getPropertyValue("border-bottom-left-radius");

  let bottomLeftCSS = document.getElementById("bottom-left-css");

  bottomLeftCSS.innerHTML = border;
}

function changeBottomRight(value) {
  let preview = document.getElementById("preview");

  preview.style.borderBottomRightRadius = value + '%';

  let styles = getComputedStyle(preview);

  let border = styles.getPropertyValue("border-bottom-right-radius");

  let bottomRightCSS = document.getElementById("bottom-right-css");

  bottomRightCSS.innerHTML = border;
}