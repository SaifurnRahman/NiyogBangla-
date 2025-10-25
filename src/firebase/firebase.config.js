// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrl6TPfeSHRvHI7Vva466yY2AiNHy6kp8",
  authDomain: "neyog-bangla-auth.firebaseapp.com",
  projectId: "neyog-bangla-auth",
  storageBucket: "neyog-bangla-auth.firebasestorage.app",
  messagingSenderId: "1059122924261",
  appId: "1:1059122924261:web:ef20e6615e04a608b9a20c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;