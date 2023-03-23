// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5YLYvJlgBc2EkdAxDSjCdPiniOjUKius",
  authDomain: "authentification-firebas-a0393.firebaseapp.com",
  projectId: "authentification-firebas-a0393",
  storageBucket: "authentification-firebas-a0393.appspot.com",
  messagingSenderId: "902108360619",
  appId: "1:902108360619:web:76085a68e936741a97ecee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;