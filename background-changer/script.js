const btn = document.getElementById("btn");

btn.addEventListener('click', ()=>{
    document.body.style.background = randomBg();
    console.log(randomBg());
})

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 100) + 185}, 100%, 50%)`;
}