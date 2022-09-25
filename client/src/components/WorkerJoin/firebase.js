import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtqjuIQ86LGJy788uraAEWSIen63588Bg",
    authDomain: "faizan-788d2.firebaseapp.com",
    databaseURL: "https://faizan-788d2-default-rtdb.firebaseio.com",
    projectId: "faizan-788d2",
    storageBucket: "faizan-788d2.appspot.com",
    messagingSenderId: "796520030228",
    appId: "1:796520030228:web:8accb49101a89ebbacc701",
    measurementId: "G-XCJYQJ2L65"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };