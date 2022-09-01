import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyC0LsRlxcFeUmV9lpvWUFjSja7pEVjhPzE",
  authDomain: "wiki-geeks.firebaseapp.com",
  projectId: "wiki-geeks",
  storageBucket: "wiki-geeks.appspot.com",
  messagingSenderId: "815491405076",
  appId: "1:815491405076:web:63dc1931f2420f745d5e01"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };