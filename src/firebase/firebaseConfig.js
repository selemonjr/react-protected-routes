import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBhT8c1tKuBABWR42Vj2uZQ9uYZ4IiKW4g",
  authDomain: "react-firebase-180c0.firebaseapp.com",
  projectId: "react-firebase-180c0",
  storageBucket: "react-firebase-180c0.appspot.com",
  messagingSenderId: "538972879018",
  appId: "1:538972879018:web:836567854fed1edf31f8d3"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;