// NOTE: js getter dan setter
// dasar awal
class Person {
  constructor(name) {
    this.name = name;
  }
}
let person = new Person("John");
console.log(person.name);
//contoh getter dan setter
class Person2 {
  constructor(name) {
    this.setName(name);
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "Nama tidak boleh kosong";
    }
    this.name = newName;
  }
}

let person2 = new Person2("Pojok Code");
console.log(person2.getName());
//ES6 menyediakan getter dan setter khusus
class Person3 {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "Nama Tidak boleh kosong";
    }
    this._name = newName;
  }
}

let person3 = new Person3("Pojok Code 3");
console.log(person3.name);
person3.name = "Contoh Pojok Code";
console.log(person3.name);
// tidak definisikan set
class Person4 {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

let person4 = new Person4("Pojok 4");
console.log(person4.name);
person4.name = "Contoh xxxx";
console.log(person4.name);
// MENGGUNAKAN GETTER DAN SETTER UNTUK OBJEK LITERAL
let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} bergabung meeting`);
    this.attendees.push(attendee);
    return this;
  },

  get latest() {
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  },
};

meeting.add("Pojok Code").add("Code 3").add("Code 4");
console.log(`Last attendee is ${meeting.latest}`);
