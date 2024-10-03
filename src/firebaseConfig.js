// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLsOpXzl6GyU8nQX4EdooE7xf9Iw1ml3U",
  authDomain: "aromagic-ba906.firebaseapp.com",
  projectId: "aromagic-ba906",
  storageBucket: "aromagic-ba906.appspot.com",
  messagingSenderId: "1075192184866",
  appId: "1:1075192184866:web:ff36b1bb4cc9e9624bca7b",
  measurementId: "G-G1Z18BD9GV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export { auth,analytics }

