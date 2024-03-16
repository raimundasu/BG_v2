"use strict";

const burger = document.querySelector("#burger");
const menius = document.querySelector(".meniuAll");
const anchors = menius.querySelectorAll("a");
const content = document.querySelector(".content");

console.log("content");

burger.addEventListener("click", function () {
  burger.classList.toggle("rotate");
  menius.classList.toggle("show-nav");
  content.classList.toggle("content-mobile");
});

for (const a of anchors) {
  a.addEventListener("click", function () {
    burger.classList.remove("rotate");
    menius.classList.remove("show-nav");
    content.classList.remove("content-mobile");
  });
}

// !Vegetables

const tabs = document.querySelectorAll(".tab");
const buttons = document.querySelectorAll("button");
const pictures = document.querySelectorAll(".picture");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].style.display = "none";
}
// document.getElementById(register).style.display = "block";
// document.getElementById(register).classList.add("active");

console.log(pictures);
``;
function showTab(e, id) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    tabs[i].classList.remove("active");
  }
  // console.log(id);
  document.getElementById(id).style.display = "block";

  setTimeout(() => {
    document.getElementById(id).classList.add("active");
  }, 50);
  // console.log(document.getElementById(id).classList);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
    // pictures[i].classList.remove("active");
  }

  e.currentTarget.classList.add("active");
}
