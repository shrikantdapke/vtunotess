// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInAnonymously
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPkO0t7T8GAMIu4za8oiKvT8Bk-tJjd6Q",
    authDomain: "vtunotes-5defa.firebaseapp.com",
    databaseURL: "https://vtunotes-5defa-default-rtdb.firebaseio.com",
    projectId: "vtunotes-5defa",
    storageBucket: "vtunotes-5defa.firebasestorage.app",
    messagingSenderId: "185662975940",
    appId: "1:185662975940:web:7d2fe4d996f6cd2b613e91",
    measurementId: "G-1VYFT4R3GQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);
const googleAuthProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

// Export Firebase services and methods
export {
    auth,
    firestore,
    storage,
    database,
    googleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInAnonymously,
    onAuthStateChanged,
    analytics
};
