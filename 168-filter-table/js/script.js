let input = document.getElementById("filter");
input.addEventListener("keyup", debound(filter_table, 500));

function filter_table(e) {
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    row.style.display = row.innerText
      .toUpperCase()
      .includes(e.target.value.toUpperCase())
      ? ""
      : "none";
  });
}

function debound(func, timeout) {
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = undefined;
    }, timeout);
  };
}
