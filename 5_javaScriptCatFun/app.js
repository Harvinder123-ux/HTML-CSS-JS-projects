// const URL = "https://api.thecatapi.com/v1/images/search";
// let container = document.querySelector(".container");
// let button = document.querySelector(".bTn");

// const getImages = async () => {
//   let response = await fetch(URL);
//   let imageData = await response.json();
//   let imageUrl = imageData[0].url;
//   //console.log(imageData[0].url);

//   let image = document.createElement("Img");
//   image.src = imageUrl;
//   container.appendChild(image);

//   button.addEventListener("click", async () => {
//     let newresponse = await fetch(URL);
//     let newimageData = await newresponse.json();
//     let newimageUrl = newimageData[0].url;
//     //console.log(newimageData[0].url);
//     image.src = newimageUrl;
//     container.appendChild(image);
//   });
// };

// getImages();

//just fun practice or nothing you can cut the below code

// let userNum = prompt("enter you number");
// // for (let i = 0; i < userNum; i++) {
// //     console.log(i, "sorry for doubting on you! you're the best the way you are");

// // }

// if (userNum >= 5) {
//   console.log("hey buddy! stay strong");
// } else if (userNum >= 10) {
//   console.log("mustang name gonna with latto");
// } else {
//   console.log("supercar name on your favourite person");
// }

//class in javaScript
// class Engineer {
//   constructor(name, branch) {
//     this.name = name;
//     this.branch = branch;
//   }

//   employee() {
//     console.log("student! part time job");
//   }

//   wages() {
//     console.log("10 to 15k per month");
//   }

//   offday() {
//     console.log("rest day");
//   }
// }

// class Person extends Engineer {
//   // constructor(dream, achieved, howsDoing){
//   //  this.dream = dream;
//   //  this.achieved = achieved;
//   //  this.howsDoing = howsDoing;
//   // }

//   constructor(name) {
//     super(name);
//   }

//   eat() {
//     console.log("Yes Engineers also eat🤧");
//   }

//   sleep() {
//     console.log("Yes Engineers also sleep😴");
//   }

//   repeat() {
//     super.offday(); //agr hum parent class se koi function call karna chahte hain child class mein toh aise kare
//     console.log("Yes! after rest hard work repeat");
//   }
// }

// let EngineerOBj = new Person();
// EngineerOBj.branch = "Diploma Cse 6th";
// EngineerOBj.name = "Harvinder";
// EngineerOBj.dream = "Having A Luxury car and beautiful life";
// EngineerOBj.achieved =
//   "Car Not Achieved yet but life is still beautiful-Adventorus sometime";
// EngineerOBj.howsDoing = "Going Well He's Work for whole day";

// class Person {
//   constructor(name){
//       this.species = "homo sapiens";
//       this.name = name;
//   }

//   eat (){
//       console.log("eat then");
//   }

// }

// class Engineer extends Person {
//   // constructor(name){
//   //     super(name); //this is way to invoke parent class constructor
//   // }

//   work () {
//       // super.eat();
//       console.log("solve Problems, build something🤧")
//   }

// }

// let EngineerObj = new Engineer("Harvinder Kumar");

//we Are Going to make some functions for do things
//bubble sort in javaScript
// function printArray(A, n) {
//   for (let i = 0; i < n; i++) {
//     console.log(A[i]);
//     document.writeln(A[i]," ")
//   }
//   document.writeln("\n");
// }

// function bubbleSort(A, n) {
//   let temp;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (A[j] > A[j + 1]) {
//         temp = A[j];
//         A[j] = A[j + 1];
//         A[j + 1] = temp;
//       }
//     }
//   }
// }

// let A = [4, 5, 2, 1, 7, 11, 5, 12];
// let n = 8;
// printArray(A, n);
// console.log("array after bubble sort");
// bubbleSort(A, n);

// printArray(A, n);

//using map function
const shayri = {
  sh: 1,
  sher: [
    ["inn kutto ke aage matnach basanti"],
    ["Jaisi Koko Ki Maa Waise koko ke Bacche", "kella", "Amrood"],
    ["Hume Toh apno ne loota kutto ne nhi"],
  ],
};

shayri.sher.map((Element) => {
  console.log(Element[1]);
});

// shayri.sher.forEach(element => {
//   console.log(element);
// });
