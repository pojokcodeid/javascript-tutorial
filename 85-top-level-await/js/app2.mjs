import { users } from "./user2.mjs";

function render(users) {
  if (!users) {
    throw "User tidak tersedia";
  }
  let list = users
    .map((user) => {
      return `<li>${user.name}(<a href="email:${user.email}">${user.email})</a>)</li>`;
    })
    .join(" ");
  return `<ol>${list}<?ol>`;
}

let container = document.querySelector(".container");
try {
  container.innerHTML = render(users);
} catch (error) {
  container.innerHTML = error;
}
