import {auth, db} from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions

const createUserCart = (userID) => {
  const cartRef = db.collection('cart').doc(userID);

  cartRef.set({
    totalPrice: 0,
    products: {}
  })
  .then(() => {
    console.log("Cart created successfuly for user:",userID);
  })
}

const newEntry = document.getElementById('submit');

newEntry.addEventListener('click',function(event){
const email = document.getElementById('new-user-email').value;
const password = document.getElementById('new-user-password').value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
      createUserCart(user.uid);
    }
  });
    windows.location.href = "index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error registering:', errorMessage);
  });
})

// export {user}