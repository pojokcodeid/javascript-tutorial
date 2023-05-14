//NOTE: getComputedStyle() adalah metode objek window yang mengembalikan objek
//yang berisi element style yang dihitung

// WARNING: let style=getComputedStyle(element[,pseudoElement]);
// - element adalah alement yang ingin anda kembaklikan stylenya.
// - pseudoElement menentukan peseudo untuk mencocokan

let message = document.querySelector(".message");
let style = getComputedStyle(message);
console.log("color :", style.color);
console.log("background-color:", style.backgroundColor);

let p = document.getElementById("main");
let style2 = getComputedStyle(p, "::first-letter");
console.log(style2.fontSize);
console.log(style2.color);
