
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "rupiece-ecactly-what-you-want.firebaseapp.com",
  projectId: "rupiece-ecactly-what-you-want",
  storageBucket: "rupiece-ecactly-what-you-want.appspot.com",
  messagingSenderId: "788489947271",
  appId: "1:788489947271:web:75c3adf0f86fa5555f9022"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
