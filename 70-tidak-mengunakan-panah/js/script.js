// kapan kita sebaiknya tidak menggunakan fungsi panah
// fungsi panah tidak memiliki this nilai dan arguments objeknya sendiri
// oleh karenanya tidak boleh menggunakanya untuk event handler, metode literal
// objek, metode prototype
// contoh

const greeting = document.querySelector("#greeting");
const username = document.querySelector("#username");
// username.addEventListener("keyup", () => {
//   greeting.textContent = "Hello " + this.value;
// });

username.addEventListener("keyup", function () {
	greeting.textContent = "Hello" + this.value;
});

//Methide Objek
const counter = {
	count: 0,
	next: () => ++this.count,
	current: () => this.count,
};
console.log(counter.next());

const counter2 = {
	count: 0,
	next() {
		return ++this.count;
	},
	corrent() {
		return this.count;
	},
};
console.log(counter2.next());

function Counter() {
	this.count = 0;
}
Counter.prototype.next = () => {
	return this.count;
};

let cb = new Counter();
console.log(cb.next());
