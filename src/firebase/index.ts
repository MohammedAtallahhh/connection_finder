import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEWbpqPe6SQRsMEAnmFIKQCZSqQMGMvL4",
  authDomain: "mutual-friends-8d737.firebaseapp.com",
  projectId: "mutual-friends-8d737",
  storageBucket: "mutual-friends-8d737.appspot.com",
  messagingSenderId: "644378671988",
  appId: "1:644378671988:web:f181b7842b79c3b0944a21",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
