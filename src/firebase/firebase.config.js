// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTAfKzCZ6Az6iLfnvJ2LsrmNucV5faCKQ",
  authDomain: "oway-studio.firebaseapp.com",
  projectId: "oway-studio",
  storageBucket: "oway-studio.appspot.com",
  messagingSenderId: "288532633431",
  appId: "1:288532633431:web:f8333355f290cd6c071012",
  measurementId: "G-LEJPCPJ5E9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
