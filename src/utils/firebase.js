// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbU_UO7ICRJg_uHnP8LFwQ8mfrCagHdn0",
  authDomain: "netflixgpt-1c25f.firebaseapp.com",
  projectId: "netflixgpt-1c25f",
  storageBucket: "netflixgpt-1c25f.appspot.com",
  messagingSenderId: "422184040566",
  appId: "1:422184040566:web:0aceb0c39e738244614757",
  measurementId: "G-7FE9KZ3SNE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
