// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-f0bca.firebaseapp.com",
  projectId: "mern-blog-f0bca",
  storageBucket: "mern-blog-f0bca.appspot.com",
  messagingSenderId: "909931050070",
  appId: "1:909931050070:web:b4e5dd3ff75386d91837f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);