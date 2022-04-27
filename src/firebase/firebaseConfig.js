import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBbi7bjkvveneMEfPwAYDe76DxrCN6pmlE",
    authDomain: "online-diary-d6636.firebaseapp.com",
    projectId: "online-diary-d6636",
    storageBucket: "online-diary-d6636.appspot.com",
    messagingSenderId: "312521693908",
    appId: "1:312521693908:web:ace7e4fcf1db59366df941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();