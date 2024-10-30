// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdoOTlEPu-MeRcm7D8dxRKgFS_Ih_Ig6w",
  authDomain: "cineai-1e235.firebaseapp.com",
  projectId: "cineai-1e235",
  storageBucket: "cineai-1e235.appspot.com",
  messagingSenderId: "397101503339",
  appId: "1:397101503339:web:c60839215f94be194c322e",
  measurementId: "G-N3HL7FZT4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();