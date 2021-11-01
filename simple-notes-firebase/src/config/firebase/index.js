// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnImdXdY5ZW-Qu3_3QHVuMNuVromAarC0",
  authDomain: "simple-notes-firebase-54dfc.firebaseapp.com",
  projectId: "simple-notes-firebase-54dfc",
  storageBucket: "simple-notes-firebase-54dfc.appspot.com",
  messagingSenderId: "342933841007",
  appId: "1:342933841007:web:d1da7a54f32728ee70999a",
  measurementId: "G-8LDV6F0REK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
