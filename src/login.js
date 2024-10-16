import { auth } from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword,browserSessionPersistence, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";
import { setCurrentUser } from './userState'; // Import user state functions

const newEntry = document.getElementById('submit');

// Set persistence for auth
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    newEntry.addEventListener('click', function(event) {
      const email = document.getElementById('user-email').value;
      const password = document.getElementById('user-password').value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setCurrentUser(user); // Update the user state with the user object
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing in:", errorCode, errorMessage);
        });
    });
  })
  .catch((error) => {
    // Handle errors
    console.error("Error setting persistence:", error);
  });

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    setCurrentUser(user);
    console.log("User is signed in:", user);
    window.location.href = "index.html";
  
  } else {
    // User is signed out
    console.log("No user is signed in");
  }
});
