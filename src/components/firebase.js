import { initializeApp } from "firebase/app";
// import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCfNqoe96wHj2kYqEhid0qL8OdiC_bsDnQ",
  authDomain: "login-74d5d.firebaseapp.com",
  projectId: "login-74d5d",
  storageBucket: "login-74d5d.appspot.com",
  messagingSenderId: "617673055507",
  appId: "1:617673055507:web:07ebb2eb4fa8ae35a00ee6",
  measurementId: "G-PMVM2PY418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


