import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCgb4FWbGUl4sc8TJHOAKeMXALQLI8xLqk",
  authDomain: "tiktok---jornada-11373.firebaseapp.com",
  projectId: "tiktok---jornada-11373",
  storageBucket: "tiktok---jornada-11373.appspot.com",
  messagingSenderId: "571231741915",
  appId: "1:571231741915:web:afaaf4bb0d34b29e98e9fe",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
