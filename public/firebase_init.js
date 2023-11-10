// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeCqzwSuWZ5ZpRkv9N1TTB3Wi5n7Q9pGk",
  authDomain: "ftcscouting-7063c.firebaseapp.com",
  projectId: "ftcscouting-7063c",
  storageBucket: "ftcscouting-7063c.appspot.com",
  messagingSenderId: "243030489110",
  appId: "1:243030489110:web:3588f55a18b1ed4205dd37",
  measurementId: "G-9ZSN8KBR7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);