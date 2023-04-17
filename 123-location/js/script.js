//Objek location mewakili lokasi saat ini (URL) dari sebuah document
// kita dapat mengacess location properti dari objek window atau document

let loc = window.location;

document.getElementById("current-url").innerText = loc.href;

function changeHash() {
  loc.hash = "?type=listing&page=2#title";
  console.log("hash telah diubah menjadi : " + loc.hash);
}

function reloadPage() {
  loc.reload();
}

function goToGoogle() {
  loc.assign("https://www.google.com");
}

function replaceGithub() {
  loc.replace("https://github.com/");
}
