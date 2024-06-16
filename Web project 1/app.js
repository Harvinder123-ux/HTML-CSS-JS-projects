//greetings
// alert("Radhe Radhe Ji");

//Adding Light Mode And Dark Mode With The Help Of JavaScript - addEventListener
let modeBtn = document.querySelector(".mode");
let body = document.querySelector("body");
let contentBox = document.querySelector(".contentBox");
let heroImg = document.querySelector(".heroImg");
let btnApp = document.querySelector(".btnApp");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    contentBox.classList.add("dark");
    contentBox.classList.remove("light");
    heroImg.classList.add("dark");
    heroImg.classList.remove("light");
    heroImg.style.backgroundColor = "rgb(194, 2, 253)";
    // alert("Radhe Radhe Ji! Press Ok");
    btnApp.style.backgroundColor = "aqua";
    modeBtn.style.backgroundColor = "aqua";
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    heroImg.classList.add("light");
    heroImg.classList.remove("remove");
    modeBtn.style.backgroundColor = "rgb(194, 2, 253)";
    btnApp.style.backgroundColor = "rgb(194, 2, 253)";
  }
  console.log(currMode);
});

import { createClient } from 'pexels';

const client = createClient('yLIXZDb7VblRlu5Y9bHBSNlfMqZ6eDHaodQ35uAJ2kUnSH4SM3iMJZ45');

client.photos.curated({ per_page: 1 }).then(photos => {
    console.log(photos);
}).catch(err => {
    console.error('Error:', err);
});c

