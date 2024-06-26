import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDsPKk0aTEX8FNpEX-Ffvrzf4xwRMyYOEk",
//   authDomain: "nexus-10675.firebaseapp.com",
//   projectId: "nexus-10675",
//   storageBucket: "nexus-10675.appspot.com",
//   messagingSenderId: "388138624146",
//   appId: "1:388138624146:web:4a4bd3f79c76a33890324b"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBiYqfQtcLqQtUyIIhqH2ZLU2bBgjaMzOo",
  authDomain: "nexus-80c84.firebaseapp.com",
  projectId: "nexus-80c84",
  storageBucket: "nexus-80c84.appspot.com",
  messagingSenderId: "532731909500",
  appId: "1:532731909500:web:f5840f3dbb26354076c0f9",
  measurementId: "G-HRT5Q7WR1W"
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