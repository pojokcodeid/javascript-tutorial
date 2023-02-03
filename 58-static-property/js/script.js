// NOTE: static property
// prinsipnya sama denan static mthod
// property statis digunakan bersama oleh semua instance kelas
// contoh

class Item {
  static count = 0;

  static getCount() {
    return Item.count;
  }
}

console.log(Item.count);
console.log(Item.getCount());

class Item2 {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++;
  }

  static count = 0;

  static getCount() {
    return Item2.count;
  }
}

let pen = new Item2("pen", 5);
let notebook = new Item2("notebook", 10);
console.log(Item2.getCount());
