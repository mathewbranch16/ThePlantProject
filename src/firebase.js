import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNhaAw-ls7KgxSpzNMwsnUhaJ3n5RQTco",
  authDomain: "the-plant-project-d4830.firebaseapp.com",
  databaseURL: "https://the-plant-project-d4830-default-rtdb.firebaseio.com",
  projectId: "the-plant-project-d4830",
  storageBucket: "the-plant-project-d4830.firebasestorage.app",
  messagingSenderId: "602420707613",
  appId: "1:602420707613:web:c2301445764f91e23ce1f4",
  measurementId: "G-LVSYVRNKFQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
