
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJRtNPUHp3ekcsHOxWd7M2SmD3H2FDdEw",
  authDomain: "rupiece-ecactly-what-you-want.firebaseapp.com",
  projectId: "rupiece-ecactly-what-you-want",
  storageBucket: "rupiece-ecactly-what-you-want.firebasestorage.app",
  messagingSenderId: "788489947271",
  appId: "1:788489947271:web:75c3adf0f86fa5555f9022"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
