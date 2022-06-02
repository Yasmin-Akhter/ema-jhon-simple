// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJnizZ53M1XQD-IpGnPdz8a94p3nyazwY",
    authDomain: "ema-jhon-simple-78156.firebaseapp.com",
    projectId: "ema-jhon-simple-78156",
    storageBucket: "ema-jhon-simple-78156.appspot.com",
    messagingSenderId: "905535918065",
    appId: "1:905535918065:web:207ee5dfea548b331bbe50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;