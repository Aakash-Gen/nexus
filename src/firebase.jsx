import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsPKk0aTEX8FNpEX-Ffvrzf4xwRMyYOEk",
  authDomain: "nexus-10675.firebaseapp.com",
  projectId: "nexus-10675",
  storageBucket: "nexus-10675.appspot.com",
  messagingSenderId: "388138624146",
  appId: "1:388138624146:web:4a4bd3f79c76a33890324b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  logout,
};