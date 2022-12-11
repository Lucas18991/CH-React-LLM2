// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const FirebaseConfig = {
  apiKey: "AIzaSyCl6Apcr8QHyHZ-3ztP92sEpaQ6Xqu_y_o",
  authDomain: "proyectollm-react.firebaseapp.com",
  projectId: "proyectollm-react",
  storageBucket: "proyectollm-react.appspot.com",
  messagingSenderId: "968551305918",
  appId: "1:968551305918:web:a25ffafa18eac6255f44ef"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
export const db = getFirestore(app);