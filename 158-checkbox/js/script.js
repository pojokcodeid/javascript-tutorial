const cb = document.querySelector("#accept");
console.log(cb.checked);

//get checkbox
const checkbox = document.querySelector("#accept2");
const btn = document.querySelector("#btn");
btn.onclick = function () {
  alert(checkbox.value);
};

// mulitple checkbox
const btnGet = document.querySelector("#btnGet");
btnGet.addEventListener("click", function () {
  let checked = document.querySelectorAll("input[name='color']:checked");
  let values = [];
  checked.forEach(function (check) {
    values.push(check.value);
  });
  alert(values);
});

// checkatau uncheck all
function check(checked = true) {
  const checkboxs = document.querySelectorAll("input[name='color']");
  checkboxs.forEach(function (item) {
    item.checked = checked;
  });
}

function checkAll() {
  check();
  this.onclick = uncheckAll;
}

function uncheckAll() {
  check(false);
  this.onclick = checkAll;
}

let btnChk = document.querySelector("#btnChk");
btnChk.onclick = checkAll;

// checkbox dinamis
const colors = ["Red", "Green", "Blue"];
colors.forEach(function (color) {
  const id = `color-${color}`;
  const label = document.createElement("label");
  label.setAttribute("for", id);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "color";
  checkbox.id = id;
  checkbox.value = color;

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(color));
  document.querySelector("#root").appendChild(label);
});
