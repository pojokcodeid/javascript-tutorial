// NOTE: bind() mengembalikan fungsi baru ketika di panggil dan memiliki this
// set ke nilai tertentu.
// Berbeda dengan metode call()and apply(), bind()metode ini tidak langsung
// menjalankan fungsinya. Itu hanya mengembalikan versi baru dari fungsi yang
// thisdisetel ke thisArgargumen.
let person = {
  name: "Pojok Code",
  getName: function () {
    console.log(this.name);
  },
};
setTimeout(person.getName, 1000);

setTimeout(function () {
  person.getName();
}, 1000);

let f = person.getName.bind(person);
setTimeout(f, 1000);

let runner = {
  name: "Runner",
  run: function (speed) {
    console.log(this.name + " runs at " + speed + " MPH");
  },
};

let flayer = {
  name: "Flayer",
  fly: function (speed) {
    console.log(this.name + " files at " + speed + " MPH");
  },
};

let run = runner.run.bind(flayer, 20);
run();
