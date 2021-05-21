function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  console.log(rect);
  return rect.top >= 0 && rect.left >= 0;
}

const splash = document.querySelector("div.splash");
const about = document.querySelector("div.about");
const services = document.querySelector("div.services");

const splashBar = document.querySelector("#bar--splash");
const aboutBar = document.querySelector("#bar--about");
const servicesBar = document.querySelector("#bar--services");

let number = document.querySelector(".nav--number");

function showBar(...element) {
  element[0].style.display = "block";
  for (i = 1; i < element.length; i++) {
    element[i].style.display = "none";
  }
}

function changeNumber(num) {
  number.innerHTML = `0${num}`;
}

document.addEventListener("scroll", function () {
  if (isInViewport(splash)) {
    showBar(splashBar, aboutBar, servicesBar);
    changeNumber(01);
  } else if (isInViewport(about)) {
    showBar(aboutBar, splashBar, servicesBar);
    changeNumber(02);
  } else if (isInViewport(services)) {
    showBar(servicesBar, splashBar, aboutBar);
    changeNumber(03);
  }
});
