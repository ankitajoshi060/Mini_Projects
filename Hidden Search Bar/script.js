const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const search = document.querySelector(".search")

button.addEventListener("click", ()=>{
    search.classList.add("active");
    input.focus();
})