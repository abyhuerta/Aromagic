import { db } from './firebaseConfig.js';
import { doc, updateDoc, arrayUnion, arrayRemove, increment } from 'firebase/firestore';
import { getCurrentUserId } from './userState.js';
import products from './catalog.js';

export const addItemToCart = async (productID, size, qty) => {
    var product;
    for(let currproduct of products){
        if(currproduct.id == productID){
            product = currproduct;
        }
    }

  const userId = getCurrentUserId();
  if (!userId) {
    console.error("User is not logged in.");
    return; // Prevent adding items if the user is not logged in
  }
  
  const cartRef = doc(db, 'cart', userId);
  await updateDoc(cartRef, {
    products: arrayUnion(productID),
    total: increment((product.price * product.size[size])* qty)
  });
};

export const removeItemFromCart = async (productID) => {
  const userId = getCurrentUserId();
  if (!userId) {
    console.error("User is not logged in.");
    return; // Prevent removing items if the user is not logged in
  }

  const cartRef = doc(db, 'cart', userId);
  await updateDoc(cartRef, {
    products: arrayRemove(productID)
  });
};
