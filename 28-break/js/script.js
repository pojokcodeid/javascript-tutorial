// NOTE: operasi break digunakan untuk menghentikan script
// break [label]
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i == 2) {
    break;
  }
}
console.log("------------------------------");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i + j == 4) {
      break;
    }
    console.log(i, j);
  }
}
console.log("-----------------------------------");
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i + j == 4) {
      break outer;
    }
    console.log(i, j);
  }
}

i = 0;
while (i < 5) {
  i++;
  console.log(i);
}

i = 0;
while (i < 5) {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
}
console.log("-----------------------");
i = 0;
do {
  i++;
  console.log(i);
} while (i < 5);
i = 0;

do {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
} while (i < 5);
