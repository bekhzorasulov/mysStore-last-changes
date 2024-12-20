import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_4bxSuBBJoknIbqPF1ghQasUuUo3geiI",
  authDomain: "e-commerce-e7ac9.firebaseapp.com",
  projectId: "e-commerce-e7ac9",
  storageBucket: "e-commerce-e7ac9.firebasestorage.app",
  messagingSenderId: "136836356567",
  appId: "1:136836356567:web:9280d2ae921ab5a3fc5392",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth();
