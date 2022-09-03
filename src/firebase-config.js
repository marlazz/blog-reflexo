import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhOTyb8l45jm0Y2l05MUYZ4kWJMtBStp4",
    authDomain: "blog-next-js-d53aa.firebaseapp.com",
    projectId: "blog-next-js-d53aa",
    storageBucket: "blog-next-js-d53aa.appspot.com",
    messagingSenderId: "540487170463",
    appId: "1:540487170463:web:35d05401cc4ec2801aa5aa",
    measurementId: "G-9M6K3S5K49"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();