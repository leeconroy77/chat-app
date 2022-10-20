// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhKcRBXYQUJFN-9l4ifKCT_3MEVtHhcJI",
  authDomain: "chat-app-3573c.firebaseapp.com",
  projectId: "chat-app-3573c",
  storageBucket: "chat-app-3573c.appspot.com",
  messagingSenderId: "664329686263",
  appId: "1:664329686263:web:9e1d0e41f964d38e0157f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)