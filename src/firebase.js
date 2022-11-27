// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwwsb8njSU2XFQBTZUnpvbMhHlr-3YroQ",
  authDomain: "clone-c404e.firebaseapp.com",
  projectId: "clone-c404e",
  storageBucket: "clone-c404e.appspot.com",
  messagingSenderId: "387669051758",
  appId: "1:387669051758:web:13a1717ea031553b39d97f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth , provider}