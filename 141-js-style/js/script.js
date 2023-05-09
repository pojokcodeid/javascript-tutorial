//Properti stylemengembalikan objek read-only CSSStyleDeclarationyang berisi daftar properti CSS
//element.style.color = 'red';
//element.style.cssText = 'color:red;background-color:yellow';
//element.setAttribute('style','color:red;background-color:yellow');
//element.style.cssText += 'color:red;background-color:yellow';

let p = document.querySelector("#content");
p.style.color = "red";
p.style.fontSize = "20px";
p.style.fontWeight = "bold";

function css(e, style) {
  for (const property in style) {
    e.style[property] = style[property];
  }
}

let div = document.querySelector("#example");
css(div, {
  backgroundColor: "yellow",
  color: "red",
  border: "1px solid red",
});
