// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7hd0vXmmnpH6mvzxKf17Jh45vbS_qSWI",
  authDomain: "netflixgpt-9996e.firebaseapp.com",
  projectId: "netflixgpt-9996e",
  storageBucket: "netflixgpt-9996e.firebasestorage.app",
  messagingSenderId: "320596068070",
  appId: "1:320596068070:web:0ad8264b4d4ea5f3715d27",
  measurementId: "G-KJZM9KWSD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);