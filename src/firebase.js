// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUiLH1NBzd2HfHIeD6dAg7h4ZwIXd7UOo",
  authDomain: "profp-1001a.firebaseapp.com",
  projectId: "profp-1001a",
  storageBucket: "profp-1001a.firebasestorage.app",
  messagingSenderId: "528007501857",
  appId: "1:528007501857:web:3f49fd13ef726419a06b60",
  measurementId: "G-61QSWB6GKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export {auth, analytics, database,  ref, set };