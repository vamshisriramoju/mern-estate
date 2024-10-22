// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f01fa.firebaseapp.com",
  projectId: "mern-estate-f01fa",
  storageBucket: "mern-estate-f01fa.appspot.com",
  messagingSenderId: "259667182097",
  appId: "1:259667182097:web:e92f74f491df79cd56e7b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);