const jokeContainer = document.querySelector(".joke-container");
const jokeButton = document.querySelector(".joke-btn");

const fetchJokes = async ()=>{
    const config = {
        headers:{
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();

    jokeContainer.innerText = data.joke;
}

jokeButton.addEventListener('click',fetchJokes);
fetchJokes();