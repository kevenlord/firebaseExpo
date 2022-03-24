// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt107Jv4JGOK6eb_xRp22d6kCmyqjvtIg",
    authDomain: "expofirebase-39a4e.firebaseapp.com",
    databaseURL: "https://expofirebase-39a4e-default-rtdb.firebaseio.com",
    projectId: "expofirebase-39a4e",
    storageBucket: "expofirebase-39a4e.appspot.com",
    messagingSenderId: "730152178088",
    appId: "1:730152178088:web:a6586b947f53f075fbcd9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 