import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth,analytics,db}

