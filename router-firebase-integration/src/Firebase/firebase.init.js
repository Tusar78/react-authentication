import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2vkTWHUA5pYBnkFcQnHdkvaSMi8GpIfA",
  authDomain: "router-firebase-integrat-5d743.firebaseapp.com",
  projectId: "router-firebase-integrat-5d743",
  storageBucket: "router-firebase-integrat-5d743.appspot.com",
  messagingSenderId: "229762752967",
  appId: "1:229762752967:web:257bc78153abefc57979e2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;