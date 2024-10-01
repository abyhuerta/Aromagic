import {auth} from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const newEntry = document.getElementById('submit');

newEntry.addEventListener('click',function(event){
const email = document.getElementById('user-email').value;
const password = document.getElementById('user-password').value;

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('User has registered successfully');
    windows.location.href = "index.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error registering:', errorMessage);
  });
})

