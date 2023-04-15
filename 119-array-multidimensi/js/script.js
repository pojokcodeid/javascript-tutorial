// Array multidimensi merupakan array yang memiliki satu atau lebih array
// didalamnya. dengan kata lain setiap element array utama adalah sebuah array
// sendiri.
// contoh :
// var arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(arr[0][2]);

let activities = [
  ["Work", 9],
  ["Eat", 8],
  ["Sleep", 7],
  ["Play", 6],
  ["Study", 5],
];
console.table(activities);
console.log(activities[0][1]);

activities.push(["Wach TV", 5]);
console.table(activities);

activities.splice(1, 0, ["Programming", 5]);
console.table(activities);

activities.forEach((activity) => {
  let presentage = ((activity[1] / 24) * 100).valueOf();
  activity[2] = presentage + " %";
});
console.table(activities);

activities.pop();
console.table(activities);

//loop array
for (let i = 0; i < activities.length; i++) {
  var innerArrayLength = activities[i].length;
  for (let j = 0; j < innerArrayLength; j++) {
    console.log("[" + i + "][" + j + "]" + activities[i][j]);
  }
}
console.table(activities);

activities.forEach((activity) => {
  activity.forEach((data) => {
    console.log(data);
  });
});
