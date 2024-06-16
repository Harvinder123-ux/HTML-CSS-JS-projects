// const container =  document.querySelector(".container");
// const btn =  document.querySelector(".btn");
// const imgSrc =  document.querySelector(".ImgSrc");
// const BASE_URL = "https://api.thecatapi.com/v1/images/search";

// const promise = fetch(BASE_URL);
// console.log(BASE_URL);

// const getcatImages = async()  => {
//    let response =  await fetch(BASE_URL);
//    console.log("getting data");
//    let data = await response.json();
//    console.log(data[0].url);
//    let imageURL = data[0].url;
//    const imageElement = document.createElement("img");
//    imageElement.src = imageURL;
//    container.appendChild(imageElement);
//    initSlideshow();
// }

// function initSlideshow() {
//     const images = document.querySelectorAll('#slideshow img');
//     let currentIndex = 0;

//     function showImage(index) {
//         images.forEach((image, i) => {
//             image.style.display = i === index ? 'block' : 'none';
//         });
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % images.length;
//         showImage(currentIndex);
//     }

//    // You can customize the interval between slides (in milliseconds)
//    const slideInterval = 3000;

//    // Set an interval to transition to the next slide
//    setInterval(nextSlide, slideInterval);

//    // Show the first slide initially
//    showImage(currentIndex);
// }

// btn.addEventListener("click", getcatImages);

// const showinImg

// btn.addEventListener("click", () => {
//     imgSrc.innerHTML = BASE_URL;
// })

//class objects
// class webDevloper {
//     constructor(branch, technologies){
//         this.branch = branch;
//         this.technologies = technologies;
//     }

//     start() {
//         console.log("Start Whenever You want");
//     }
//     end() {
//         console.log("You Atleast need 2 Years Of coding Expierience for Placement");
//     }
// }

// let abhi = new webDevloper("Computer Science Engineering", "JavaScript");
// console.log(abhi);

// let latika = new webDevloper("information Technology", "Python");
// console.log(latika);
// abhi.branch = "Computer science";
// abhi.technologies = "javaScript";

//inheritance
// class person {
//     eat (){
//         console.log("eat");
//     }
//     sleep (){
//         console.log("sleep");
//     }
//     codingRepeat (){
//         console.log("coding Repeat");
//     }
// }

// class poor extends person {
//     work (){
//         console.log("do nothing");
//     }
// }

// class rich extends person {
//     work (){
//         console.log("do hardWork and enjoy life");
//     }
// }

// let abhi = new rich;

//simple program
// let button = document.querySelector(".btn");
// button.addEventListener("click", () => {
//     let userInput =  prompt("enter any number or string for different different greetings");
//     let int;
//     let string = "";
//     if (typeof userInput === 'number'){
//         console.log("radhe radhe ji");
//         alert("radhe radhe ji");
//     }else if (typeof userInput === 'string'){
//         console.log("sat sri akal");
//         alert("jai shree ram");
//     }
//     else {
//         console.log("invalid value");
//     }

// });

// //checck box for the password
// let pass = document.querySelector("#pass");
// let checkBox = document.querySelector("#checkBox");
// let check = checkBox;
// window.addEventListener("mouseover", () => {
//     pass.type = "password"
// });

// checkBox.addEventListener("click", () => {
//   if (check.checked) {
//     pass.type = "text";
//   } else {
//     pass.type = "password";
//   }
// });



//genterate the password
// function generatepassword (length){
//     let temp = "asdfghjklzxcvbnm12345677889002";
//     let password = '';
//     for (i = 0; i<length; i++){
//         password += temp[Math.floor(Math.random()*temp.length)];
//     }
//     console.log("the random password is", password);
// }

// generatepassword(8);


//simple looop function 
// let toffees = "khattiToffi";
// for ( let i =0; i<5; i++){
//     toffees += i;
//     console.log(toffees);
// }
// console.log(toffees);


//for each function 
// let arr = [2, 4, 6, 7];
// let sum = 0;
// arr.forEach((value) => {
//     // for (let index = 0; index < arr.length; index++) {
//         // const element = array[index];
//         sum += value;
//         // sum++;
//         console.log(sum); 
//     // }

  
// });

//map function
// let arr = [2, 4, 6, 7];
// let sum =0;
// arr.map((value) => {
//     sum += value;
//     console.log(sum); 
// })

// let arr = [2, 4, 6, 7];
// let double = arr.map((value) => {
//     return value*2;
    
// })

// console.log(double); 


// function generatepassword(length){
//     let temp = "lathalrtharegarj;tha;reuthar95834673567";
//     let password = '';
//     for (i = 0; i<length; i++) {
//         password += temp[Math.floor(Math.random()*temp.length)];
        
//     }
//     console.log(password);
// }

// generatepassword(8);






//loop in javaScript
// let mulTable = 0;
// let n = 11;
// for (let index = 1; index < n; index++) {
//     // mulTable++;
//     mulTable = mulTable + 10;
//     console.log("10 X",index,"=",mulTable);
    
// }

//function 
// class carLove {
//     constructor(first, second, third){
//         this.firstCar = first;
//         this.secondCar= second;
//         this.ThirdCar = third;
//     }

//     Firstvalue(){
//         console.log("hello im the first");
//     }
//     Secondvalue(){
//         console.log("hello im the second");
//     }
//     Thirdvalue(){
//         console.log("hello im the third");

//     }
// }


// function printValues (instance){
//     instance.Firstvalue();
//     instance.Secondvalue();
//     instance.Thirdvalue();
// }

// let abhiLove = new carLove("Lambo", "Dodge","Mustang");
// printValues(abhiLove);



// class Person {
//         constructor(species){
//             this.species = "homo sapiens";
//         }
//         eat () {
//             console.log("eat");
//         }
//         sleep () {
//             console.log("sleep");
//         }
//         repeat () {
//             console.log("repeat");
//         }
//         work () {
//             console.log("do Nothing")
//         }
// }

// let Abhiobj = new Person;


//function practice
// function sumValue (xVal, yVal){
//     let x = xVal;
//     let y = yVal;
//     return x + y;
// }

// // console.log(sumValue(55, 77));
// function printSum(){
//     console.log(sumValue(66, 77));
// }
// printSum();

// //The best thing about me is i'm always be for  myself
// function generateRandoms(sizeCapacity){
//     let temp = "rwiuphfk;nvdgroyihblvnjoewrbn;rwhor542739075888577934827";
//     let randoms = "";
//     for (let index = 0; index <sizeCapacity; index++) {
//         randoms += temp[Math.floor(Math.random()*temp.length)];
    
//     }
//     console.log("your randoms here :", randoms);
        
// }

// generateRandoms(6);


// //api fetching



// //fteching api