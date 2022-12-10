//type data
let counter = 120;
console.log(typeof counter);

counter = false;
console.log(typeof counter);
counter = "Welcome";
console.log(typeof counter);

let cunter2;
console.log(typeof cunter2);
console.log(typeof undefinidvariable);

//type data null
let obj = null;
console.log(typeof obj);
console.log(null == undefined);

let price = 12.5;
console.log(price);
price = 200.0;
console.log(price);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE + Number.MAX_VALUE);
console.log(-Number.MAX_VALUE - Number.MAX_VALUE);

console.log("a" / 2);
console.log(NaN / 2);
console.log(NaN == NaN);

let pesan = "Hai,";
pesan = pesan + " Bye";
console.log(pesan);

pesan = "Hai \"Saya 'Pojok' Code\"";
console.log(pesan);

let completed = false;
console.log(typeof completed);

console.log(Boolean("Hi"));
console.log(Boolean(""));
console.log(Boolean(20));
console.log(Boolean(0));
console.log(Boolean(Infinity));
console.log(Boolean({ foo: 100 }));
console.log(Boolean(null));

//symbol
let s1 = Symbol();
console.log(typeof s1);
let page = 12313213131231312n;
console.log(typeof page);

//type data objek
let emptyobj = {};
let person = {
  namaDepan: "Pojok",
  namaAkhir: "Code",
};
console.log(person);

let contact = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "(408)-555-9999",
  address: {
    building: "4000",
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact.age);
console.log(contact["email"]);
console.log(contact.address.street);
