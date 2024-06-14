// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: "signin-page-assignment.firebaseapp.com",
  projectId: "signin-page-assignment",
  storageBucket: "signin-page-assignment.appspot.com",
  messagingSenderId: "765860852379",
  appId: "1:765860852379:web:9b1579575243b2a22ecc3e",
  measurementId: "G-3C6VQ0N329",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
