// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-auth.firebaseapp.com",
  projectId: "mern-project-auth",
  storageBucket: "mern-project-auth.appspot.com",
  messagingSenderId: "1021048633713",
  appId: "1:1021048633713:web:e3ce40ca2659033fba9ed0",
  measurementId: "G-BDSQJFHBTF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

