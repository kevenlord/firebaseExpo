// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* 
const firebaseConfig = {
    apiKey: "AIzaSyCt107Jv4JGOK6eb_xRp22d6kCmyqjvtIg",
    authDomain: "expofirebase-39a4e.firebaseapp.com",
    databaseURL: "https://expofirebase-39a4e-default-rtdb.firebaseio.com",
    projectId: "expofirebase-39a4e",
    storageBucket: "expofirebase-39a4e.appspot.com",
    messagingSenderId: "730152178088",
    appId: "1:730152178088:web:a6586b947f53f075fbcd9d"
};
*/
const firebaseConfig = {
    apiKey: "AIzaSyBowv4KLiILW_-27sOEiDkg00G5o2XVPf4",
    authDomain: "xepa-8540f.firebaseapp.com",
    projectId: "xepa-8540f",
    storageBucket: "xepa-8540f.appspot.com",
    messagingSenderId: "328331711092",
    appId: "1:328331711092:web:4891b9afc345eed4adb721",
    measurementId: "G-J8R7WM87FH"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 