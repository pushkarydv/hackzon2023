// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyuZjfCkFYliaxy8dU3tdeVCZS7dSpXns",
  authDomain: "scheduler-3ee0c.firebaseapp.com",
  projectId: "scheduler-3ee0c",
  storageBucket: "scheduler-3ee0c.appspot.com",
  messagingSenderId: "13158878663",
  appId: "1:13158878663:web:0ef48846ae242b468f1de2",
  measurementId: "G-LDW7QM3695",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
