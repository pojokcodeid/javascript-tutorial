// Apa itu Callback?
// callback adalah fungsi yang anda teruskan ke fungsi lain sebagai argument
// untuk di eksekusi nanti.
// contoh
function filter(numbers) {
  let result = [];
  for (const number of numbers) {
    if (number % 2 != 0) {
      result.push(number);
    }
  }
  return result;
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(filter(numbers));

// buat lebih dinamis
function isOdd(number) {
  return number % 2 != 0;
}

function filter2(numbers, fn) {
  let result = [];
  for (const number of numbers) {
    if (fn(number)) {
      result.push(number);
    }
  }
  return result;
}
console.log(filter2(numbers, isOdd));

function isEven(number) {
  return number % 2 == 0;
}
console.log(filter2(numbers, isEven));

//calback anonim
let oddNumber = filter2(numbers, function (number) {
  return number % 2 != 0;
});
console.log(oddNumber);

// dengan fungsi panah
let oddNum2 = filter2(numbers, (Number) => Number % 2 != 0);
console.log(oddNum2);

function download(url) {
  setTimeout(() => {
    console.log(`Downloading ${url} ...`);
  }, 1000);
}
function proccess(picture) {
  console.log(`Proccess ${picture}`);
}
let url = "https://pojokcode.org/pic.jpg";
download(url);
proccess(url);

function download2(url, callback) {
  setTimeout(() => {
    console.log(`Downloading ${url} ...`);
    callback(url);
  }, 1000);
}
download2(url, proccess);

download2(url, function (picture) {
  console.log(`Processing 2 ${picture}`);
});

function download3(url, success, failure) {
  setTimeout(() => {
    console.log(`Downloading ${url} ...`);
    !url ? failure(url) : success(url);
  }, 1000);
}

download3(
  "",
  (url) => console.log(`Gambar diprocess ${url}`),
  (url) => console.log(`The ${url} tidak valid`)
);

const url1 = "http://pojokcode.com/pic1.jpg";
const url2 = "http://pojokcode.com/pic2.jpg";
const url3 = "http://pojokcode.com/pic3.jpg";

download2(url1, function (url1) {
  console.log(`Processing 2 ${url1}`);
  download2(url2, function (url2) {
    console.log(`Processing 2 ${url2}`);
    download2(url3, function (url3) {
      console.log(`Processing 2 ${url3}`);
    });
  });
});
