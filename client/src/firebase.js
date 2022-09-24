import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtqjuIQ86LGJy788uraAEWSIen63588Bg",
    authDomain: "faizan-788d2.firebaseapp.com",
    databaseURL: "https://faizan-788d2-default-rtdb.firebaseio.com",
    projectId: "faizan-788d2",
    storageBucket: "faizan-788d2.appspot.com",
    messagingSenderId: "796520030228",
    appId: "1:796520030228:web:00f4a57e726ec05cacc701",
    measurementId: "G-0S9PHXCBS6"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };