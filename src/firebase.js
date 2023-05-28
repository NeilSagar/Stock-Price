// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmvk2ElnhipSZb9Uf8m5XGB5oqRJXCaw0",
  authDomain: "stock-price-9d5fd.firebaseapp.com",
  projectId: "stock-price-9d5fd",
  storageBucket: "stock-price-9d5fd.appspot.com",
  messagingSenderId: "134155430342",
  appId: "1:134155430342:web:fcdcb3e3c69079af89aac7",
  measurementId: "G-61NSZP6W56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);