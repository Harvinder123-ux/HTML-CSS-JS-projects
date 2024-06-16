//Task 1
// // Create a webpage that displays "Hello, World!" using JavaScript.

// let print = "hello world!";
// console.log(print);

// // Task 2
// // Use the alert function to display a pop-up box with a message.
// alert("Hello Abhi");

// //Task 3
// // Print a message to the console using console.log().
// console.log("Hey Latika")

// // Create a button on a webpage that, when clicked, triggers an alert.
// let alertBtn = document.querySelector(".alertBtn");
// alertBtn.addEventListener("click", () => {
//     alert("hello jatta")
//     console.log("The alert Button Was Clicked");
// })


// Change the text content of an HTML element using JavaScript.
let heading = document.querySelector(".heading");
heading.innerText ="Ora Gambre Gambre";
console.dir(heading);

// Create a button that toggles the visibility of an HTML element (show/hide).
let para = document.querySelector(".para").style.visibility = "hidden";
console.log(para);
console.dir(para);


// Change the background color of the webpage when a button is clicked.
let modeBtn = document.querySelector("#modeBtn");
let body = document.querySelector("body")
let button = "light";

modeBtn.addEventListener("click", () => {
    if (button === "light") {
        button = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        button = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        
    }console.log(button);
})