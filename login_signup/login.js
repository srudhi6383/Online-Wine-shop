let form = document.querySelector("#form");
console.log(form);

//------------------------FireBase------------------------>>

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
console.log(app);

const auth = getAuth();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target.email.value;
  let password = e.target.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  console.log(auth);
});

// Import the functions you need from the SDKs you need
