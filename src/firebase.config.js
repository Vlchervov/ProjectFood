// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBlst9dINQARvSfN5VDHemniy9KZN03FIo",

  authDomain: "projectfood-95943.firebaseapp.com",

  projectId: "projectfood-95943",

  storageBucket: "projectfood-95943.appspot.com",

  messagingSenderId: "149893063487",

  appId: "1:149893063487:web:58fba977a70971017ca98a",

  measurementId: "G-8LY5CHDV43",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
