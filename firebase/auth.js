// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD3RxEt1NTcb7o4V9XocpFmyo4lP2oSf0",
  authDomain: "sweeta-collections.firebaseapp.com",
  projectId: "sweeta-collections",
  storageBucket: "sweeta-collections.appspot.com",
  messagingSenderId: "902380441093",
  appId: "1:902380441093:web:b3babe203cde9acb9a566c",
  measurementId: "G-VN7ES6JF42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
