let question = document.querySelector("#question");
let button = document.querySelector("#submit-btn");
let optionsContainer = document.querySelector("#options-container");
let scoreDisplay = document.querySelector("#score");

const Question = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswerIndex: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Venus", "Jupiter"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Kangaroo"],
    correctAnswerIndex: 2,
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Onion", "Pineapple", "Avocado"],
    correctAnswerIndex: 3,
  },
  {
    question: "Which programming language is often used for web development?",
    options: ["Java", "Python", "HTML", "JavaScript"],
    correctAnswerIndex: 3,
  },

  {
    question: "Who's the GOAT of football",
    options: ["Ronaldo", "Neymar", "Messi", "Maradona"],
    correctAnswerIndex: 2,
  },
];

let currentQuestionIndex;
let score = 0;
// let userChoice = [];

function inIt() {
  currentQuestionIndex = Math.floor(Math.random() * Question.length);
  displayQuestion();
}

function displayQuestion() {
  let currQuestionIdx = Question[currentQuestionIndex];
  question.innerText = `Your question is = ${currQuestionIdx.question}`;
  optionsContainer.innerHTML = currQuestionIdx.options
    .map(
      (option, index) =>
        `<button class="option" onclick = "selectOption(${index})">${option}</button>`
    )
    .join("");
}

function selectOption(selectedIndex) {
  let currQuestionIdx = Question[currentQuestionIndex];
  // let currVal = currQuestionIdx.value;
  let isCorrect = selectedIndex == currQuestionIdx.correctAnswerIndex;

  // userChoice.push({
  //   question: Question[currentQuestionIndex],
  //   option: currQuestionIdx.options[selectedIndex],
  //   isCorrect: isCorrect,
  // });

  if (isCorrect) {
    console.log("Yay! you choose the right Answer");
    // result.innerText = `Yay! you choose the right Answer`;
  } else {
    console.log(`wrong Answer: the right answer is`);
    // result.innerText = `wrong Answer: the right answer is ${currVal}`
  }

  let feedbackDiv = document.querySelector("#feedback");
  feedbackDiv.innerHTML = isCorrect ? "Yay! You chose the right answer" : `Wrong Answer: The right answer is ${currQuestionIdx.options[currQuestionIdx.correctAnswerIndex]}`;

  if (isCorrect) {
    score++;
  }
  
}

// function displayResult() {
//   document.querySelector("#result").innerHTML = "<h2>Result:</h2>";
//   for (let i = 0; i < userChoice.length; i++) {
//     let resultMessage = userChoice[i].isCorrect ? "isCorrect" : "inCorrect";
//     let resultItem = `<p> ${userChoice[i].question}: you choose the ${userChoice[i].option}. Result${resultMessage}</p>`;
//     document.querySelector("#result").innerHTML += resultItem;
//   }
// }

function nextQuestion() {
  currentQuestionIndex = Math.floor(Math.random() * Question.length);
  displayQuestion();

  scoreDisplay.innerText = `Score: ${score}`;
}

inIt();

button.addEventListener("click", nextQuestion);

// let question = document.querySelector("#question");
// let button = document.querySelector("#submit-btn");
// let optionsContainer = document.querySelector("#options-container");
// let scoreDisplay = document.querySelector("#score");

//     const Question = [
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Paris", "Madrid", "Rome"],
//         correctAnswerIndex: 1
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Mars", "Earth", "Venus", "Jupiter"],
//         correctAnswerIndex: 0
//     },
//     {
//         question: "What is the largest mammal?",
//         options: ["Elephant", "Giraffe",  "Blue Whale", "Kangaroo"],
//         correctAnswerIndex: 2
//     },
//     {
//         question: "What is the main ingredient in guacamole?",
//         options: ["Tomato", "Onion", "Pineapple",  "Avocado"],
//         correctAnswerIndex: 3
//     },
//     {
//         question: "Which programming language is often used for web development?",
//         options: ["Java", "Python", "HTML", "JavaScript"],
//         correctAnswerIndex: 3
//     },

//     {
//         question: "Who's the GOAT of football",
//         options: ["Ronaldo", "Neymar", "Messi", "Maradona"],
//         correctAnswerIndex : 2

//     }

// ];

// let currentQuestionIndex = Math.floor(Math.random() * Question.length);
// let currentQuestion = Question[currentQuestionIndex];

// // Display the current question and options
// question.innerText = `Question: ${currentQuestion.question}`;
// optionsContainer.innerHTML = currentQuestion.options.map((option, index) =>
//     `<button class="option" onclick="selectOption(${index})">${option}</button>`
// ).join('');

// let score = 0;

// function selectOption(selectedIndex) {
//     if (selectedIndex === currentQuestion.correctAnswerIndex) {
//         console.log("Yay! You chose the right answer");
//         score++;
//     } else {
//         console.log(`Wrong answer. The correct answer is ${currentQuestion.correctAnswerIndex}`);
//     }

//     // Move to the next question
//     nextQuestion();
// }

// function nextQuestion() {
//     // Select a new random question
//     currentQuestionIndex = Math.floor(Math.random() * Question.length);
//     currentQuestion = Question[currentQuestionIndex];

//     // Display the new question and options
//     question.innerText = `Question: ${currentQuestion.question}`;
//     optionsContainer.innerHTML = currentQuestion.options.map((option, index) =>
//         `<button class="option" onclick="selectOption(${index})">${option}</button>`
//     ).join('');

//     // Update the score display
//     scoreDisplay.innerText = `Score: ${score}`;
// }

// // Initial setup with the first question
// nextQuestion();
