const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{
    counter.innerText = '0';

    function updateCounter(){
        const target = +counter.getAttribute('data-target');
        const currentTarget = +counter.innerText;

        const increment = target / 200;
        if(currentTarget < target){
            counter.innerText = `${Math.ceil(currentTarget + increment)}`;
            setTimeout(updateCounter, 1);
        }
        else{
            counter.innerText = target;
        }
    }

    updateCounter();
})

