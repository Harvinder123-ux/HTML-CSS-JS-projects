let quoteTxt = document.querySelector("#quote-text");
let button = document.querySelector("#new-quote-button");



const quotes = [
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston S. Churchill"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    }
  ];
  
  button.addEventListener("click", () => {
    randomIndex = Math.floor(Math.random()*quotes.length);

    const randomQuote = quotes[randomIndex];
    quoteTxt.innerText = `"${randomQuote.text}" - ${randomQuote.author}`;

    console.log(quoteTxt);
 })