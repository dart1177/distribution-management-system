// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf7BW4dVnQrCbqj-0h3w2_eh1_0ZtVDX4",
  authDomain: "distribution-management-f84b0.firebaseapp.com",
  projectId: "distribution-management-f84b0",
  storageBucket: "distribution-management-f84b0.firebasestorage.app",
  messagingSenderId: "83025879405",
  appId: "1:83025879405:web:1c509aa70ce215df85ba64",
  measurementId: "G-E52GWKS0P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Enable offline persistence (works on phone even without internet!)
enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
        console.log('Multiple tabs open, persistence enabled in first tab only');
    } else if (err.code === 'unimplemented') {
        console.log('Browser doesn\'t support persistence');
    }
});

console.log('Firebase initialized successfully!');

export { db, auth };