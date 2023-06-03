const inputText = document.querySelector("#text");
const statElem = document.querySelector("#stat");
new WordCounter(inputText);

const render = (event) => {
  statElem.innerHTML = `<p>Anda menulis <span class="highlight">${event.detail.wordStat.words}</span> kata</span>
  dan <span class="highlight">${event.detail.wordStat.characters}</span> karakter</p>`;
};

inputText.addEventListener("count", render);
