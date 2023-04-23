const apps = {
  Google: "https://www.google.com",
  ios: "http://www.apple.com",
};

let os_platform = "android";
const platform = () => {
  if (os_platform == "google") {
    return "Google";
  } else if (os_platform == "ios") {
    return "ios";
  } else {
    return "android";
  }
};

const redirect = () => {
  let os = platform();
  if (os in apps) {
    location.href = apps[os];
  } else {
    const message = document.querySelector(".message");
    message.innerHTML = "Platform not found";
  }
};

redirect();
