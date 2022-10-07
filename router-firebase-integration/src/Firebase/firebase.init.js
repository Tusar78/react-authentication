// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2vkTWHUA5pYBnkFcQnHdkvaSMi8GpIfA",
  authDomain: "router-firebase-integrat-5d743.firebaseapp.com",
  projectId: "router-firebase-integrat-5d743",
  storageBucket: "router-firebase-integrat-5d743.appspot.com",
  messagingSenderId: "229762752967",
  appId: "1:229762752967:web:257bc78153abefc57979e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;