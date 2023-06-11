window.setTimeout("now()", 1000);
function now() {
  let now = convertTZ(new Date(), "Asia/Jakarta");
  setTimeout("now()", 1000);
  let jam;
  if (now.getHours().toString().length == 1) {
    jam = now.getHours().toString().padStart(2, "0");
  } else {
    jam = now.getHours();
  }
  let minute;
  if (now.getMinutes().toString().length == 1) {
    minute = now.getMinutes().toString().padStart(2, "0");
  } else {
    minute = now.getMinutes();
  }
  let second;
  if (now.getSeconds().toString().length == 1) {
    second = now.getSeconds().toString().padStart(2, "0");
  } else {
    second = now.getSeconds();
  }

  document.getElementById("jam").innerHTML =
    jam + " : " + minute + " : " + second;
}

function convertTZ(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}
