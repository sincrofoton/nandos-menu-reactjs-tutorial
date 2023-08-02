import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "ADD_YOUR_API_KEY",
    authDomain: "ADD_YOUR_AUTH_DOMAIN",
    databaseURL: "ADD_YOUR_DDATABASE_URL",
    projectId: "ADD_YOUR_PROJECT_ID",
    storageBucket: "ADD_YOUR_STORSGE_BUCKET",
    messagingSenderId: "ADD_YOUR_MESSAGING_SENDER_ID",
    appId: "ADD_YOUR_APP_ID",
    measurementId: "ADD_YOUR_MESAUREMENT_ID"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth()
export { db, auth }
