const boxes = document.querySelectorAll(".box");

const checkBoxes = ()=>{
    const triggerBottom = window.innerHeight/5 * 4 ; // to get 80% of screen you can multiply by 0.8 also to do the same
    
    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add("show");
        }
        else{
            box.classList.remove("show");
        }
        
    })
}

window.addEventListener("scroll", checkBoxes);
checkBoxes();