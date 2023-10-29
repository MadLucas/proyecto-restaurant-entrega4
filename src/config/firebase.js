// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4d94JuA4_7_hsNlZhjGJc-9cJ6GKxqqY",
  authDomain: "restaurant-7f52f.firebaseapp.com",
  projectId: "restaurant-7f52f",
  storageBucket: "restaurant-7f52f.appspot.com",
  messagingSenderId: "553400688453",
  appId: "1:553400688453:web:c8e43a2ebce2c7505f682c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// servicios que estoy ocupando

export const db = getFirestore(app)