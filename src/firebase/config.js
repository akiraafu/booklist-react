import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrv1RdKGjQXBONUJG2rg3hsxClAAEo0V4",
  authDomain: "readinglistapp-c25c7.firebaseapp.com",
  projectId: "readinglistapp-c25c7",
  storageBucket: "readinglistapp-c25c7.appspot.com",
  messagingSenderId: "590492750206",
  appId: "1:590492750206:web:02ae16582217b2ac11232f",
};

//init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

//init firebase auth
const auth = getAuth();

export { db, auth };
