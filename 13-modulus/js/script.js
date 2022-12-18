//modulus (%) sisa bagi
//perintah dasarnya divided % devisor

let remain = 5 % -2
console.log(remain) // -2 * -2 = 4  -> 5 - 4 = 1

remain = 5 % 2
console.log(remain) // 2 * 2 = 4 -> 5 - 4 = 1

//menggunakan overator sisa dengan dividen negatif
remain = -5 % 3
console.log(remain) // -1 * 3 = -3 -> -5 - (-3) = -5 + 3 = -2

remain = -5 % -3
console.log(remain) // 1 * -3 =-3 -> -5 -(-3) = -5 + 3 = -2

//menggunakan nilai sisa khusus operator
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
//oprasi dengan string
remain = '10' % 3
console.log(remain)
let num = 13
let isOdd = num % 2 //jika num bilangan ganjit sisa 1 jka bulat sisa 0
console.log(isOdd)

function isOdd2(num) {
  return num % 2
}
//atau mengunakan fungsi ES6
const isOdd3 = (num) => num % 2
console.log(isOdd2(21))
console.log(isOdd3(21))
//operator sisa vs modulo
const mod = (divided, divisor) => ((divided % divisor) + divisor) % divisor
console.log('sisa', 5 % 3)
console.log('sisa', mod(5, 3))
//jika angka yang beda hasilnya beda
console.log('sisa', -5 % 3)
console.log('sisa', mod(-5, 3))
console.log('sisa', -5 % -3)
console.log('sisa', mod(-5, -3))
console.log('sisa', 5 % -3)
console.log('sisa', mod(5, -3))
