// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ-XHMG6SEL153k1lovBVX1cvKoFSLmfM",
  authDomain: "toys-galaxy.firebaseapp.com",
  projectId: "toys-galaxy",
  storageBucket: "toys-galaxy.appspot.com",
  messagingSenderId: "914520992019",
  appId: "1:914520992019:web:3602faaff13bc76be152e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;