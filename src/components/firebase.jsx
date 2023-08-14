// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyAZwMG38yPTDgBXCp_P1g7iIh22W6C0C78",
     authDomain: "chat-app-by-devmeno.firebaseapp.com",
     projectId: "chat-app-by-devmeno",
     storageBucket: "chat-app-by-devmeno.appspot.com",
     messagingSenderId: "96673685501",
     appId: "1:96673685501:web:0861c78e59a2e74b988394",
     measurementId: "G-048GFJKEFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);