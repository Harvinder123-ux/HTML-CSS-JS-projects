//Event Handling 
let button = document.querySelector("#formBtn");
let myForm = document.querySelector("#myForm");
let username = document.querySelector("#username");
let password = document.querySelector("#pass");

//generatePassBtn
let generateBtn = document.querySelector("#generatePassBtn");
let generatePass = document.querySelector("#generatePass");

//checkbox
let checkBox = document.querySelector("#checkBox");


function handleClick(){
    if(username.value != "" && password.value != ""){
        alert("your form has been submited");
    }else {
        console.log("invalid username or password");
        alert("invalid username/pass or submission");
    }
    console.log("button was clicked");
}
button.addEventListener("click", handleClick);


function generatePassword(length){
    let temp = "qwertyuiopasdfghjklzxcvbnm,85285657551234567890";
    let password = '';
    for (let index = 0; index <length; index++) {
        password += temp[Math.floor(Math.random()*temp.length)];
        
    }
    return password;
}

// console.log(generatePassword(8));
let createPass = generatePassword(8);


generateBtn.addEventListener("click", () => {
        let newPass = generatePassword(8);
        generatePass.value = newPass;
    

})

checkBox.addEventListener("click", () => {
    let check = checkBox;
    if (check.checked){
        generatePass.type = "text";
    }else {
        generatePass.type = "password";
    }
})


// function handleSubmit (Event){
//     Event.preventDefault();
    
// }

// myForm.addEventListener("submit", handleSubmit);
// myElement.addEventListener("mouseover", handleMouseOver);


function generatePassW (length) {
    temp = "ierotjoeritjqrauqo8692340808456937895";
    password = '';
    for (let index = 0; index < length; index++) {
        password += temp[Math.floor(Math.random()*temp.length)];

    }
    return password;  

}

// console.log(generatePassW(7));

// const userInput = prompt ("Enter the Number for Multipication table");
// let number = parseInt(userInput);
// let j = 0;
// for (let index = 1; index <= 10; index++) {
//      j += number;
//     //   console.log(number, "* ",index," = ",j);
//     console.log(`${number} * ${index} = ${j}`);
    
// }


///this program used for parse or we can say convert string to integers
// let str = "123";
// let number = parseInt(str);

// console.log(number);  // Outputs: 123
