// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVYsSh-MMNi1jFOpI5G0AQfbxBdlkbX_I",
  authDomain: "think-showcase.firebaseapp.com",
  projectId: "think-showcase",
  storageBucket: "think-showcase.appspot.com",
  messagingSenderId: "786818121172",
  appId: "1:786818121172:web:95a6fae448bb640f0daa41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;