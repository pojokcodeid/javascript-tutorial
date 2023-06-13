let input = document.getElementById("inputText");
let inputNumber = (elm) => {
  elm.addEventListener("keypress", function (e) {
    if ((e.keyCode > 31 && e.keyCode < 48) || e.keyCode > 57) {
      e.preventDefault();
    }
  });
};

inputNumber(input);
