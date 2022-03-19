// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOsV5vay_pa4LDvMhDHFtMFmdHKRFlfvY",
  authDomain: "pharmacy-97f4e.firebaseapp.com",
  projectId: "pharmacy-97f4e",
  storageBucket: "pharmacy-97f4e.appspot.com",
  messagingSenderId: "842919227666",
  appId: "1:842919227666:web:70007f060b38a0cf72c3cb",
  measurementId: "G-BNWZQ9Z60V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;