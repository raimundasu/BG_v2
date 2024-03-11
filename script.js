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
//try your free trial today form control
// document.getElementById("getStarted").disabled = true;

// const getStarted = document.querySelector("#getStarted");
// const fName = document.querySelectorAll(".form1");
// getStarted.addEventListener("click", function () {
//   for (let i = 0; i < fName.length; i++) {
//     if (fName[i].value === " ") {
//       alert("Please fill all form");
//       document.getElementById("getStarted").disabled = true;
//     } else {
//       document.getElementById("getStarted").disabled = false;
//     }
//   }
// });

// console.log(getStarted);
