const text = ["web developer", "designer", "tech nerd"];
const autowrite = document.getElementById('autowrite')

let textIndex = 0;
let wordIndex = 0;

function writeText(){
    let currentPhrase = text[textIndex];
    autowrite.innerText = currentPhrase.slice(0,wordIndex);
    wordIndex++;
    if(wordIndex>currentPhrase.length){
        textIndex++;
        wordIndex=0;
    }
    console.log(wordIndex);
    console.log(textIndex);
    if (textIndex == text.length){
        textIndex = 0;
    }
}



setInterval(writeText, 200);