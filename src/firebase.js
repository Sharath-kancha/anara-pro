// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSc18o51VRrKFkVCQayZvE_Q1yB16uPKA",
  authDomain: "anara-lifethread.firebaseapp.com",
  projectId: "anara-lifethread",
  storageBucket: "anara-lifethread.firebasestorage.app",
  messagingSenderId: "623124362654",
  appId: "1:623124362654:web:825975ff0a193c1c44128f",
  measurementId: "G-2ZNR7XQ4Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);