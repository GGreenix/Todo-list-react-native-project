// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg-1ffvFyOuoA-s9OyvJIqsvN3qTNg73c",
  authDomain: "to-do-list-60694.firebaseapp.com",
  projectId: "to-do-list-60694",
  storageBucket: "to-do-list-60694.appspot.com",
  messagingSenderId: "632327944499",
  appId: "1:632327944499:web:5a30f05895375886b52646"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
