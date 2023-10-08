// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeDXSBtFPL45lly16UjywYYC-qVLQdGII",
  authDomain: "react-cursos-b5fbe.firebaseapp.com",
  projectId: "react-cursos-b5fbe",
  storageBucket: "react-cursos-b5fbe.appspot.com",
  messagingSenderId: "546625152073",
  appId: "1:546625152073:web:ec9e410477536f478a0b98"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );