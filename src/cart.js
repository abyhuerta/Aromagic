import { db } from './firebaseConfig.js';
import { doc, updateDoc, getDoc,arrayUnion, increment } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';  
import { setCurrentUser, getCurrentUserId } from './userState.js';  
import products from './catalog.js';
import { auth } from './firebaseConfig';  

// Check auth state when cart.js is loaded
onAuthStateChanged(auth, (user) => {
  if (user) {
    setCurrentUser(user);
    console.log("User is signed in:", user);
  } else {
    console.error("No user is signed in.");
    window.location.href = "login.html";  
  }
});

// export const addItemToCart = async (productID, oz, qty) => {
//   const userId = getCurrentUserId();
//   if (!userId) {
//     console.error("User is not logged in.");
//     return;
//   }

//   const cartRef = doc(db, 'cart', userId);

//   // Retrieve the cart data (optional, improves efficiency)
//   const cartDoc = await getDoc(cartRef);
//   const existingProduct = cartDoc.exists ? cartDoc.data().products?.[productID] : null;

//   // Calculate the new quantity based on existing product or initial qty
//   const newQty = existingProduct ? existingProduct.qty + qty : qty;

//   var totalPrice = (existingProduct?.price || products.find(product => product.id === productID).price) * oz * qty;


//   // Update the cart with the new quantity
//   await updateDoc(cartRef, {
//     [`products.${productID}`]: {
//       oz: oz,
//       qty: newQty,
//     },
//     // total: totalPrice,
//     total: increment(totalPrice),
//   });
// };
export const addItemToCart = async (productID, oz, qty) => {
  const userId = getCurrentUserId();
  if (!userId) {
    console.error("User is not logged in.");
    return;
  }

  const cartRef = doc(db, 'cart', userId);

  // Retrieve the cart data
  const cartDoc = await getDoc(cartRef);
  const existingProducts = cartDoc.exists ? cartDoc.data().products || {} : {};

  // Initialize the product entry if it doesn't exist
  if (!existingProducts[productID]) {
    existingProducts[productID] = [];
  }

  // Check if this oz already exists in the cart for the product
  const existingOz = existingProducts[productID].find(item => item.oz === oz);

  // If it exists, update the quantity; if not, add a new entry
  if (existingOz) {
    existingOz.qty += qty; // Increment quantity
  } else {
    existingProducts[productID].push({ oz, qty }); // Add new oz entry
  }

  // Calculate total price based on updated cart
  const totalPrice = existingProducts[productID].reduce((total, item) => {
    const price = products.find(product => product.id === productID).price;
    return total + (price * item.oz * item.qty);
  }, 0);

  // Update the cart with the new products and total price
  await updateDoc(cartRef, {
    products: existingProducts,
    total: increment(totalPrice),
  });
};


export const removeItemFromCart = async (productID, oz, qty) => {
  const userId = getCurrentUserId();
  if (!userId) {
    console.error("User is not logged in.");
    return;
  }

  const cartRef = doc(db, 'cart', userId);

  // Retrieve the cart data
  const cartDoc = await getDoc(cartRef);
  const existingProducts = cartDoc.exists ? cartDoc.data().products || {} : {};

  // Check if the product exists in the cart
  if (!existingProducts[productID]) {
    console.error("Product not found in cart.");
    return;
  }

  // Find the item entry for the specific oz
  const ozEntry = existingProducts[productID].find(item => item.oz === oz);

  // If the oz entry exists, remove the specified quantity
  if (ozEntry) {
    if (ozEntry.qty > qty) {
      ozEntry.qty -= qty; // Decrease the quantity
    } else {
      // Remove the oz entry if qty goes to zero or below
      existingProducts[productID] = existingProducts[productID].filter(item => item.oz !== oz);
    }

    // If no entries left for this product, remove the product from the cart
    if (existingProducts[productID].length === 0) {
      delete existingProducts[productID];
    }

    // Calculate the new total price based on updated cart
    const totalPrice = Object.keys(existingProducts).reduce((total, productId) => {
      return total + existingProducts[productId].reduce((subTotal, item) => {
        const price = products.find(product => product.id === productId).price; // Assuming products contains price info
        return subTotal + (price * item.oz * item.qty);
      }, 0);
    }, 0);

    // Update the cart with the modified products and new total price
    await updateDoc(cartRef, {
      products: existingProducts,
      total: increment(-totalPrice),
    });
  } else {
    console.error("Specified oz not found in cart.");
  }
};

export const getUserCart = async(userId) => {
  userId = getCurrentUserId();
  if (!userId) {
    console.error("User is not logged in.");
    return;
  }

  const cartRef = doc(db, 'cart', userId);

  // Retrieve the cart data
  const cartDoc = await getDoc(cartRef);
  console.log("Document data: ",cartDoc.data())

}


//example of usage fOR REMOVAL : removeItemFromCart('productID1', 18, 1);