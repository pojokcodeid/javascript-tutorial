function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
  input.className = type ? "success" : "error";
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message);
  }
  return true;
}

function validateEmail(input, requiredMsg, invalidMsg) {
  //check value is empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  //validate email format
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector("#signup");
const name_required = "Mohon masukan nama";
const email_required = "Mohon masukan email";
const email_invalid = "Email tidak valid";
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let nameValid = hasValue(form.elements["name"], name_required);
  let emailValid = validateEmail(
    form.elements["email"],
    email_required,
    email_invalid
  );
  if (nameValid && emailValid) {
    // disini process selanjutnya dilakukan
    alert("INi hanya demo,anda berhasil");
  }
});
