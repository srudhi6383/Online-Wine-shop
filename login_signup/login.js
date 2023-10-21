import footerAdd from "../../footer.js";
//------------------------FireBase (Don not touch)------------------------>>
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
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
const provider = new GoogleAuthProvider();
//------------------------FireBase (Don not touch)------------------------>>
const isAuth = JSON.parse(localStorage.getItem("isAuth")) || {};

//===================Google Authentication=============================>
document.getElementById("googleAuth").addEventListener("click", () => {
  console.log("Arti");
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      let obj = {
        name: user.displayName,
        loginStatus: true,
      };
      localStorage.setItem("isAuth", JSON.stringify(obj));

      window.location = "./index.html";
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
//--------------------SignUp form starts here ------------------>>
let Signform = document.querySelector("#form2");
Signform.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = event.target.username.value;
  const email = event.target.email2.value;
  const password = event.target.password2.value;
  const confirmPass = event.target.confirmpassword2.value;
  const phone = event.target.number.value;

  console.log(fullName, email, password, confirmPass, phone);
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // console.log(user);
      let obj = {
        name: fullName,
        loginStatus: true,
      };
      localStorage.setItem("isAuth", JSON.stringify(obj));
      alert("user had signedup successfully");
      window.location = "./index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("user credentials are wrong");
    });
});

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
      let obj = {
        name: email,
        loginStatus: true,
      };
      localStorage.setItem("isAuth", JSON.stringify(obj));
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
