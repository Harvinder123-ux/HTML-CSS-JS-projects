function calculateFactorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  let factorial = 1;
  for (let index = 1; index <= n; index++) {
    factorial *= index;
    // console.log(factorial);
    
  }
  return factorial;
}

console.log(calculateFactorial(5));


// let arraySum = [2, 5, 6, 7];
// let add = 0;
// arraySum.forEach((value) => {
//    add +=value;
  
// })
// console.log(add);

//map function for fun 
let arraySum = [2, 5, 6, 7];
let double = arraySum.map((value)=> {
 return value*2;
})
console.log(double);