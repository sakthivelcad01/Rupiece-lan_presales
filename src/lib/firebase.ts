import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    "projectId": "rupiece-38n71",
    "appId": "1:551200239122:web:651c99de28255b25b5f2cb",
    "storageBucket": "rupiece-38n71.firebasestorage.app",
    "apiKey": "AIzaSyDSybfLaId9fk_HeNmnlwXz0ln3S5mEU8k",
    "authDomain": "rupiece-38n71.firebaseapp.com",
    "messagingSenderId": "551200239122"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
