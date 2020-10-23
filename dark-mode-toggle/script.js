const toggle = document.getElementById("toggle");
const label = document.getElementById("label");

toggle.addEventListener('change', (e)=>{
    document.body.classList.toggle("dark", e.target.checked);
    
})
