// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqaFYkE-aqAzsekOSZ0cFg4Z1s4LexI_g",
  authDomain: "money-flow-59e01.firebaseapp.com",
  projectId: "money-flow-59e01",
  storageBucket: "money-flow-59e01.appspot.com",
  messagingSenderId: "156815673205",
  appId: "1:156815673205:web:35ebda798a48c72f3f353c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
