const searchTermElem = document.querySelector("#searchTerm");
const searchResultElem = document.querySelector("#searchResult");

searchTermElem.select();

searchTermElem.addEventListener("input", function (event) {
  search(event.target.value);
});

let timeoutId;

const search = (searchTerm) => {
  // reset the previous timer
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // set up a new timer
  timeoutId = setTimeout(async () => {
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
      const response = await fetch(url);
      const searchResults = await response.json();

      // show the search result in the console
      console.log({
        term: searchTerm,
        results: searchResults.query.search,
      });
    } catch (error) {
      console.log(error);
    }
  }, 500);
};
