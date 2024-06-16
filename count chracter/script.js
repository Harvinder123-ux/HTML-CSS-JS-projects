let textArea = document.querySelector("#text-area");
let counter = document.querySelector("#character-counter");

textArea.addEventListener('input', (updateCount));
    function updateCount (){
        const inputText = textArea.value;
        const textCount = inputText.length;
        console.log(textCount);

        textCount.textContent = `character count : ${textCount}`;
    }
