
// const URL = "https://api.thecatapi.com/v1/images/search";
// let container = document.querySelector(".catImagesContainer");
// let button = document.querySelector(".btn");

// const getImages = async() => {
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].url);
//     let imgDataUrl = data[0].url;
//     let imageElement = document.createElement("img");
//     container.appendChild(imageElement);

//     button.addEventListener("click", async() => {
//     let newresPonse = await fetch(URL);
//     let data = await newresPonse.json();
//     let newImageUrl = data[0].url;
//     console.log(newImageUrl);
//     imgDataUrl = newImageUrl;
//     imageElement.src = imgDataUrl;

// });
// imageElement.src = imgDataUrl;
// }

// getImages();


//map function 

// let numbers = [1, 4, 6, 7, 8];
// const multiNumbers = numbers.map(function (num) {
//     return num*num;
// })

// console.log(multiNumbers);


// let numbers = [1, 4, 6, 7, 8];
// const multiNumbers = numbers.map(num=> num*2);

// console.log(multiNumbers);


//check the word is palindrome

// function isPalindrome (str){
//     const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     // if (cleanStr === cleanStr.split('').reverse().join('')){
//     //     return true;
//     // }else {
//     //     false
//     // }

//     const length = cleanStr.length;
//     for (let index = 0; index <length/2; index++) {
//         if(cleanStr[index] !== cleanStr[length-1-index]){
//             return false;
//         }
//         return true;
//     }
// }

// const testString = "radar";
// console.log(isPalindrome(testString));  // Output: true




function numberGuessing(){
   let generateNum = Math.floor(Math.random()*1);
   let userInput = prompt("guess the number");
   console.log(generateNum);


   if(userInput>generateNum){
    console.log("You Guess the bigger than game number");
   }else if(userInput==generateNum){
    console.log("You Guess the right game number");
   }else {
    console.log("You Guess the lower number than game number");
   }
}
numberGuessing();