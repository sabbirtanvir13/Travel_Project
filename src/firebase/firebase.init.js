// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX0O2kkKHlyB2tgojb7BBo9j1SniUYrec",
  authDomain: "travel-projects-ab736.firebaseapp.com",
  projectId: "travel-projects-ab736",
  storageBucket: "travel-projects-ab736.firebasestorage.app",
  messagingSenderId: "152721014580",
  appId: "1:152721014580:web:5b08e9b3838131da5d6f61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);