// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
//import {seedDatabase }from './Catalog'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1_LdK0z7R-UXBLLnT4mpZsuUrE0QpNZQ",
  authDomain: "club-house-4b62c.firebaseapp.com",
  databaseURL: "https://club-house-4b62c-default-rtdb.firebaseio.com",
  projectId: "club-house-4b62c",
  storageBucket: "club-house-4b62c.appspot.com",
  messagingSenderId: "625488686867",
  appId: "1:625488686867:web:bbfde3a1c8b30b3c42f4e6"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { auth, provider, storage };

//seedDatabase(firebase);

export default db;