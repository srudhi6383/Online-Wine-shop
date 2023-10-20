//------------------------FireBase (Don not touch)------------------------>>
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOBN2ZFzwyGEUh0xRo0wknf6Nt_FYvHnc",
  authDomain: "my-project-b7ab9.firebaseapp.com",
  projectId: "my-project-b7ab9",
  storageBucket: "my-project-b7ab9.appspot.com",
  messagingSenderId: "159304889680",
  appId: "1:159304889680:web:9ec1ddf74a3639a812a855",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//------------------------FireBase (Don not touch)------------------------>>

//--------------------SignUp form starts here ------------------>>
// let signForm = document.querySelector("#loginForm");
// signForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const email = event.target.email.value;
//   const password = event.target.password.value;

//   //---SignUp with firebase starts here--->>
//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       // console.log(user);
//       alert("user had signedup successfully");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert("user credentials are wrong");
//     });
//   //---SignUp with firebase ends here--->>
// });
//--------------------SignUp form Ends here ------------------>>

//-------------------Sign in with email and password-------->>
let loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  //---SignIn with firebase starts here--->>
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("user had Loggged in successfully");
      window.location = "./index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("email and password is wrong");
    });
  //---SignIn with firebase ends here--->>
});

let signUpShow = document.querySelector(".createAccount");

signUpShow.addEventListener("click", () => {
  document.querySelector(".loginMainDiv").style.display = "none";
  document.querySelector(".signUpMainDiv").style.display = "block";
});

let goToLogin = document.querySelector(".goToLogin");

goToLogin.addEventListener("click", () => {
  document.querySelector(".loginMainDiv").style.display = "flex";
  document.querySelector(".signUpMainDiv").style.display = "none";
});
