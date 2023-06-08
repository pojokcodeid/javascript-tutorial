let zoomer = (function () {
  document.querySelector("#img-zoomer-box").addEventListener(
    "mousemove",
    function (e) {
      let original = document.querySelector("#img-1"),
        magnified = document.querySelector("#img-2"),
        style = magnified.style,
        x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop;
      (imgWidth = original.offsetWidth),
        (imgHeight = original.offsetHeight),
        (xprec = (x / imgWidth) * 100),
        (yprec = (y / imgHeight) * 100);

      if (y > 0.001 * imgWidth) {
        xprec += 0.15 * yprec;
      }

      style.backgroundPositionX = xprec - 9 + "%";
      style.backgroundPositionY = yprec - 9 + "%";

      style.left = x - 100 + "px";
      style.top = y - 100 + "px";
    },
    false
  );
})();
