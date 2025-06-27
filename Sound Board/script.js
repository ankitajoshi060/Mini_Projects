const btn = document.querySelector(".btn");
const sounds = ["applause", "gasp", "boo", "tada", "victory", "wrong"];

sounds.forEach((sound)=>{
    const button = document.createElement("button");
    button.innerText = sound;
    button.classList.add('button');
    button.addEventListener("click", ()=>{
        stopSongs();
        const audio = document.getElementById(sound);
        audio.play();
    })

    btn.appendChild(button);
})

const stopSongs = ()=> {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound)

        audio.pause()
        audio.currentTime = 0;
    })
}