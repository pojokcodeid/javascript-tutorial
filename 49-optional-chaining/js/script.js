// NOTE: Optional Chaining

function getUser(id) {
  if (id <= 0) {
    return null;
  }
  // ambil data dari database
  // kembalikan null jika tidak ada data
  // jika ada kita kembalikan data
  return {
    id: id,
    userName: "admin",
    profile: {
      avatar: "/avatar.png",
      language: "English",
    },
  };
}
let user = getUser(1);
let profile = user.profile;
console.log(profile);

user = getUser(0);
profile = user && user.profile;
console.log(profile);
// ES2020 memperkenalkan chaining symbol ( ?. )
// objekName ?. peropertyName;
// objekName ?. [property]
let user2 = getUser(0);
let profile2 = user2?.profile;
console.log(profile2);
// secara teknis sama dengan
let user3 = getUser(2);
let profile3 =
  user3 !== null || user3 !== undefined ? user3.profile : undefined;
console.log(profile3);
console.log("----------------------------");
// menumpuk operator
let user4 = getUser(-1);
let avatar = user4?.profile?.avatar;
console.log(avatar);
// mengmbalikan dengan nullish
let defaultProfile = {
  default: "/default.png",
  language: "English",
};
let user5 = getUser(-1);
let profile5 = user5?.profile ?? defaultProfile;
console.log(profile5);
// Optional dengan pemangilan fungsi
let file = {
  read() {
    return "File Content";
  },
  write(content) {
    console.log(`Writing ${content} to file`);
    return true;
  },
};
let data = file.read();
console.log(data);

//let compressData = file.compress();
let compressData = file.compress?.();

function getUser2(id, callBack) {
  let user = {
    id: id,
    userName: "admin",
  };

  if (callBack) {
    callBack(user);
  }
  return user;
}
console.log(getUser2(1, user));

function getUser3(id, callBack) {
  let user = {
    id: id,
    userName: "admin",
  };
  callBack?.(user);
  return user;
}
console.log(getUser3(2, user));
