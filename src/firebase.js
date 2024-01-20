// Import the functions you need from the SDKs you need
import "firebase/compat/auth"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyALqweFAhAWUop6tbxQ4Tz4t7xlC04UbFs",
  authDomain: "e-clone-75e65.firebaseapp.com",
  projectId: "e-clone-75e65",
  storageBucket: "e-clone-75e65.appspot.com",
  messagingSenderId: "946632312786",
  appId: "1:946632312786:web:7740235b9e4335de646a0b",
  measurementId: "G-J26269TRX3"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };