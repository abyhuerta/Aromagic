import {auth, db} from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from "firebase/firestore"; 

const createUserCart = async (userID) => {
  const cartRef = doc(db,'cart', userID);

  try{
  await setDoc(cartRef, {
    totalPrice: 0,
    products:{}
  });
  console.log("Created cart successfully for user:", userID);
} catch (error){
  console.error("Error creating cart:",error);
}


}

const newEntry = document.getElementById('submit');

newEntry.addEventListener('click',function(event){
const email = document.getElementById('new-user-email').value;
const password = document.getElementById('new-user-password').value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('successfully created user:',user.uid);
    createUserCart(user.uid);

    window.location.href = "index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error registering:', errorMessage);
  });
})
