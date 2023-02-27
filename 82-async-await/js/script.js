// async and await
// untuk mempelajari ini harus sudah faham terkait promise supaya cepat faham
// contoh
// Misalkan Anda perlu melakukan tiga operasi asinkron dalam urutan berikut:
//
// Pilih pengguna dari database.
// Dapatkan layanan pengguna dari API.
// Hitung biaya layanan berdasarkan layanan dari server.

function getUser(userId, callback) {
  console.log("Ambil user dari database");
  setTimeout(() => {
    callback({
      userId: userId,
      username: "PCode",
    });
  }, 1000);
}
function getServices(user, callback) {
  console.log(`Get user ${user.username} from API`);
  setTimeout(() => {
    callback(["email", "PVN", "CDN"]);
  }, 2 * 1000);
}
function getServicesCost(services, callback) {
  console.log(`Calculate service cost ${services}`);
  setTimeout(() => {
    callback(services.length * 100);
  }, 3 * 1000);
}
// gunakan calback bersarang
getUser(100, (user) => {
  getServices(user, (services) => {
    getServicesCost(services, (cost) => {
      console.log(`Service cost adalah ${cost}`);
    });
  });
});

// ES6
function getUser2(userId) {
  return new Promise((resolve, reject) => {
    console.log("Ambil user dari database");
    setTimeout(() => {
      resolve({
        userId: userId,
        username: "PCode",
      });
    }, 1000);
  });
}
function getServices2(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get user ${user.username} from API`);
    setTimeout(() => {
      resolve(["email", "PVN", "CDN"]);
    }, 2 * 1000);
  });
}
function getServicesCost2(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate service cost ${services}`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 3 * 1000);
  });
}
getUser2(100).then(getServices2).then(getServicesCost2).then(console.log);

async function showServiceCost() {
  try {
    let user = await getUser2(100);
    let services = await getServices2(user);
    let cost = await getServicesCost2(services);
    console.log(`service cost : ${cost}`);
  } catch (error) {
    console.log(error);
  }
}
showServiceCost();

// kata kunci asic
async function sayHai() {
  return "Hai";
}
sayHai().then(console.log);

async function sayHai2() {
  return Promise.resolve("Haiiii");
}

sayHai2 = async function () {
  return "Haiiii";
};

sayHai2 = async () => "Haiiii";

class Gretter {
  async sayHai2() {
    return "Haiiii";
  }
}

async function display() {
  let result = await sayHai2();
  console.log(result);
}
display();

async function getUser3(userId) {
  try {
    const user = await Promise.reject(new Error("Invalid user Id"));
  } catch (error) {
    console.log(`${error}`);
  }
}
getUser3();
