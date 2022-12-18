// modulus (%) sisa bagi
//perintah dasar modulus divided % devisor
let remain = 5 % -2
console.log(remain) // -2 * -2 =4 -> 5 - 4 = 1
remain = 5 % 2
console.log(remain) // 2 * 2 = 4 -> 5 - 4 = 1
remain = -5 % 3
console.log(remain) // -1 * 3 = -3 -> -5 -(-3) = -2
remain = -5 % -3
console.log(remain) // 1 * -3 = -3 -> -5 -(-3) =-2

remain = Infinity % 2
console.log(remain)
remain = 10 % 0
console.log(remain)
remain = Infinity % Infinity
console.log(remain)
remain = 10 % Infinity
console.log(remain)
remain = 0 % 10
console.log(remain)
remain = '10' % 3
console.log(remain)
let num = 12
let isOdd = num % 2 // jika num bilangan ganjil maka sisa 1
console.log(isOdd)

function isOdd2(num) {
  return num % 2
}

console.log(isOdd2(5))
