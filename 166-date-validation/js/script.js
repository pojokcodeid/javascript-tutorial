let input = document.querySelector(".js-date");
let dateInputMask = function dateInputMask(elm) {
  elm.addEventListener("keypress", function (e) {
    //hanya menerima input number
    if (e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }

    let len = elm.value.length;

    if (len !== 1 || len !== 3) {
      if (e.keyCode == 47) {
        elm.preventDefault();
      }
    }

    if (len === 2) {
      let regex = /^(0?[1-9]|1[012])$/;
      if (regex.test(elm.value)) {
        elm.value += "/";
      } else {
        elm.value = elm.value.substring(0, 1);
        e.preventDefault();
      }
    }

    if (len === 5) {
      let regex = /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/;
      if (regex.test(elm.value)) {
        elm.value += "/";
      } else {
        elm.value = elm.value.substring(0, 4);
        e.preventDefault();
      }
    }
  });
};

dateInputMask(input);
