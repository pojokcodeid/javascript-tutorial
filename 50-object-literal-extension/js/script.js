// objek literal extension
// 1. SINGKATAN PENGISIAN PROPERTY OBJEK
// metode sebelum ES6
function createMachine(name, status) {
  return {
    name: name,
    status: status,
  };
}
//ES6
console.log(createMachine("Coba", 1));
function getMachine(name, status) {
  return {
    name,
    status,
  };
}
console.log(createMachine("Coba", 3));
// membuat literal objek dari variable local
let name = "Computer",
  status = "On";
let machine = {
  name,
  status,
};
console.log(machine);
// 2 COMPUTE PROPERTY NAME
// []
name = "Nachine Name";
machine = {
  [name]: "Server",
  "machie hour": 1000,
};
console.log(machine[name]);
console.log(machine["machie hour"]);

// Contoh ES6
let prefix = "machine";
machine = {
  [prefix + " name"]: "Server",
  [prefix + " hours"]: 1000,
};
console.log(machine["machine name"]);
console.log(machine["machine hours"]);

// 3. SINTAKS METHODE RINGKAS
// SEBELUM es5
let server = {
  name: "Server",
  restart: function () {
    console.log("The " + this.name + " is starting ...");
  },
};
server.restart();

server = {
  name: "Server 2",
  restart() {
    console.log("The " + this.name + " is starting ...");
  },
};
server.restart();

server = {
  name: "Server",
  restart() {
    console.log("The " + this.name + " is starting ...");
  },
  "start up"() {
    console.log("The " + this.name + " is start up ..");
  },
};

server["start up"]();
