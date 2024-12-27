// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo8adxMs8E35tz3m8RRM3xeOxcsgqErPQ",
  authDomain: "nayadaam.firebaseapp.com",
  projectId: "nayadaam",
  storageBucket: "nayadaam.firebasestorage.app",
  messagingSenderId: "587066222066",
  appId: "1:587066222066:web:ed435c2e4e597cc2f2b76b",
  measurementId: "G-MMEZ4KCQTX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
