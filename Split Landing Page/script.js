const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", ()=>{
    container.classList.add("hover-left");
})
left.addEventListener("mouseleave", ()=>{
    container.classList.remove("hover-left")
})

right.addEventListener("mouseenter", ()=>{
    container.classList.add("hover-right");
})
right.addEventListener("mouseleave", ()=>{
    container.classList.remove("hover-right")
})