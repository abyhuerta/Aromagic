import {auth} from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const newEntry = document.getElementById('submit');

newEntry.addEventListener('click',function(event){
const email = document.getElementById('new-user-email').value;
const password = document.getElementById('new-user-password').value;

createUserWithEmailAndPassword(auth, email, password)
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
