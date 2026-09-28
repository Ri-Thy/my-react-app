import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo1U-4vDkSszcXeQ3cR7J5-elxTa0DerI",
  authDomain: "student-management-syste-24b5f.firebaseapp.com",
  projectId: "student-management-syste-24b5f",
  storageBucket: "student-management-syste-24b5f.firebasestorage.app",
  messagingSenderId: "431644196060",
  appId: "1:431644196060:web:f9e2e972531966dc5fc819",
  measurementId: "G-BY9Y92D1JR",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);