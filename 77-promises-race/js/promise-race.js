const TIMEOUT = 500;
const DATA_LOAD_TIME = 5000;

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = "Promse.race() demo";
      resolve(message);
    }, DATA_LOAD_TIME);
  });
}
function showContent(message) {
  document.querySelector("#message").textContent = message;
}
function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(), TIMEOUT);
  });
}
function showLoadIndicator() {
  document.querySelector("#loader").className = "loader";
}
function hideLoadingIndicator() {
  document.querySelector("#loader").className = "";
}

const btn = document.querySelector("#btnGet");
btn.addEventListener("click", () => {
  reset();
  Promise.race([
    getData().then(showContent).then(hideLoadingIndicator),
    timeout(),
  ]).catch(showLoadIndicator);
});

function reset() {
  hideLoadingIndicator();
  showContent("");
}
