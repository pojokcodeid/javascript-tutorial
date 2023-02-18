function load(url) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function (e) {
      if (this.readyState === 4) {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          reject(this.status);
        }
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}

const url = "/api.json"; // anggap ini load data dari database
const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");
btn.onclick = function () {
  load(url).then(
    (response) => {
      const result = JSON.parse(response);
      msg.innerHTML = result.message;
    },
    (error) =>
      (msg.innerHTML = `Error getting the message, HTTP status: ${error}`)
  );
};
