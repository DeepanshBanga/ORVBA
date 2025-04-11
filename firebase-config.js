// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDr61aqO2n03UHNL-1V96sGKim4iFm17S4",
  authDomain: "orvba-c986b.firebaseapp.com",
  projectId: "orvba-c986b",
  storageBucket: "orvba-c986b.firebasestorage.app",
  messagingSenderId: "728343759781",
  appId: "1:728343759781:web:7d5409c7c5f5741d66764c",
  measurementId: "G-VTP5J27FDV"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
