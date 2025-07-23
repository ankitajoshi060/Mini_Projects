const textArea = document.getElementById("textarea");
const tagsEl = document.getElementById("tags");

textArea.addEventListener("keyup", (event) => {
  createTags(event.target.value);

  if (event.key === "Enter") {
    setTimeout(() => {
      event.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function highLightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}

const pickRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    if (randomTag !== undefined) {
      highLightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highLightTag(randomTag);
    }, 100);
  }, times * 100);

}
