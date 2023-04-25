// textContent digunakan untuk mendapatkan kontent text dari sebuah node dan
// turunannya
// perintah dasarnya adalah
// let text=node.textContent;

let note = document.getElementById("note");
console.log(note.textContent);
console.log(note.innerText);

note.textContent = "Hello World";
// INNERHTML adalah properti dari element yang memungkinkan kita untuk
// mendapatkan atau mengatur markup HTML yang berada di dalam element.
// perintah dasarnya
// element.innerHTML = "Hello World";
// element.innerHTML;

let menu = document.getElementById("menu");
console.log(menu.innerHTML);

let li = document.createElement("li");
li.textContent = "About As";
menu.appendChild(li);
console.log(menu.innerHTML);

// const scriptHTML = `<script>alert("Hello World");</script>`;
const scriptHTML = `<img src="1" onerror="alert('Hello World');">`;
const main = document.getElementById("main");
main.innerHTML = scriptHTML;
