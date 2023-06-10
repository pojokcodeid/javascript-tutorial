window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    const now = convertTZ(new Date(), "Asia/Jakarta");
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    document.getElementById("hours").style.transform = `rotate(${
      hours * 30
    }deg)`;
    document.getElementById("minutes").style.transform = `rotate(${
      minutes * 6
    }deg)`;
    document.getElementById("seconds").style.transform = `rotate(${
      seconds * 6
    }deg)`;
  }, 1000);

  function convertTZ(date, tzString) {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        {
          timeZone: tzString,
        }
      )
    );
  }
});
