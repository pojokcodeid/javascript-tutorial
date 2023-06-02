const inputText = document.querySelector("#text");
const statElem = document.querySelector("#stat");

// create a new instance of WordCounter
new WordCounter(inputText);

const render = (event) => {
  statElem.innerHTML = `<p>Anda menulis <span class="highlight">${event.detail.wordStat.words} kata</span> 
        dan <span class="highlight">${event.detail.wordStat.characters} karakter</span>.</p>`;
};

inputText.addEventListener("count", render);
