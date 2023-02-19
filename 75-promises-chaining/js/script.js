// NOTE: Promise chaning
// adalah menjalankan dua atau lebih operasi asinkron terkait, di mana operasi
// selanjutnya dimulai dengan hasil dari langkah sebelumnya
// contoh

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});
p.then((result) => {
  console.log(result);
  return result * 2;
})
  .then((result) => {
    console.log(result);
    return result * 3;
  })
  .then((result) => {
    console.log(result);
    return result * 4;
  });

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2 * 100);
});
p2.then((result) => {
  console.log(result);
  return result * 2;
});
p2.then((result) => {
  console.log(result);
  return result * 3;
});
p2.then((result) => {
  console.log(result);
  return result * 4;
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});
p3.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2);
    }, 3 * 100);
  });
})
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 3);
      }, 3 * 100);
    });
  })
  .then((result) => console.log(result));

// Berikut ini memodifikasi contoh di atas:
function generateNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 3 * 1000);
  });
}
generateNumber(10)
  .then((result) => {
    console.log(result);
    return generateNumber(result * 2);
  })
  .then((result) => {
    console.log(result);
    return generateNumber(result * 3);
  })
  .then((result) => console.log(result));

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get user from database");
    setTimeout(() => {
      resolve({
        userId: userId,
        username: "admin",
      });
    }, 1000);
  });
}
function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get the service of ${user.username} from API`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 3 * 1000);
  });
}
function getServiceCost(service) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate the service cost of ${service}`);
    setTimeout(() => {
      resolve(service.length * 100);
    }, 2 * 1000);
  });
}
// berikut cara menggunakannya
getUser(100).then(getServices).then(getServiceCost).then(console.log);
