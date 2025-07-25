const toggleButton = document.getElementById('toggle');
const nav = document.querySelector(".navbar")
toggleButton.addEventListener('click', ()=>{
    nav.classList.toggle('active');
})