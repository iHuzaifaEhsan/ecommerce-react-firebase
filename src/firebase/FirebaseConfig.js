import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEV3PyD2cPRLC_ziI9o9cGS6rhMs6BNSA",
  authDomain: "ecommerce-78e3a.firebaseapp.com",
  projectId: "ecommerce-78e3a",
  storageBucket: "ecommerce-78e3a.firebasestorage.app",
  messagingSenderId: "793652623803",
  appId: "1:793652623803:web:537db587331d5bfc15ac9e",
  measurementId: "G-EX2T8RLNNN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
