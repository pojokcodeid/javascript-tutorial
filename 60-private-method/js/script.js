// private method
// secara default method dalam javascript bersipat public
// ES2020 memperkenalkan private mthod
// artinya method tersebut hanya bisa di gunakan di class itu saja
// untuk medefinisikannya sama dengan private field yaitu dengan (#)
// contoh
class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  getFullName(format = true) {
    return format ? this.#firstLsast() : this.#lastFirst();
  }

  #firstLsast() {
    return `${this.#firstName} ${this.#lastName}`;
  }
  #lastFirst() {
    return `${this.#lastName} ${this.#firstName}`;
  }
}

let person = new Person("Pojok", "Code");
console.log(person.getFullName());

class Person2 {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = Person2.#validate(firstName);
    this.#lastName = Person2.#validate(lastName);
  }

  getFullName(format = true) {
    return format ? this.#firstLsast() : this.#lastFirst();
  }

  static #validate(name) {
    if (typeof name === "string") {
      let str = name.trim();
      if (str.length === 3) {
        return str;
      }
    }
    throw "Nama harus 3 karakter";
  }

  #firstLsast() {
    return `${this.#firstName} ${this.#lastName}`;
  }
  #lastFirst() {
    return `${this.#lastName} ${this.#firstName}`;
  }
}

let person2 = new Person2("Pojok", "Code");
console.log(person2.getFullName());
