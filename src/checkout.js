import { auth } from './firebaseConfig';  // Import Firebase auth
import { db } from "./firebaseConfig.js"; // Firebase config
import { getCurrentUserId } from "./userState.js"; // Import user state utilities
import {doc,getDoc,updateDoc} from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';  // Import Firebase auth listener
import { setCurrentUser } from './userState';  // Import your user state management
import { getUserCart,getUserTotal,getUserItems } from './cart.js';
import products from './catalog.js';


// DOM Elements
const cartItemsContainer = document.getElementById("cart-items");
const totalAmountElement = document.getElementById("total-amount");
const checkoutButton = document.getElementById("checkout-button");

// Functions
async function fetchCartData(userId) {


  try {
    const cartRef = doc(db, "carts", userId); // Firestore reference
    const cartSnap = await getDoc(cartRef);

    if (cartSnap.exists()) {
      return cartSnap.data().items || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return [];
  }
}

function displayCartItems(items) {
  cartItemsContainer.innerHTML = ""; // Clear container
  let total = 0;

  items.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "cart-item";

    itemElement.innerHTML = `
      <span>${item.name}</span>
      <span>${item.quantity} x $${item.price.toFixed(2)}</span>
    `;

    cartItemsContainer.appendChild(itemElement);

    total += item.price * item.quantity;
  });

  totalAmountElement.textContent = `Total: $${total.toFixed(2)}`;
}

async function handleCheckout() {
  const userId = getCurrentUserId(); // Get current user's ID
  if (!userId) {
    alert("No user is logged in!");
    return;
  }

  try {
    const cartRef = doc(db, "carts", userId);
    await updateDoc(cartRef, { items: [] }); // Clear cart items

    alert("Checkout successful!");
    displayCartItems([]); // Clear UI
    totalAmountElement.textContent = "Total: $0.00";
  } catch (error) {
    console.error("Error during checkout:", error);
  }
}

// Initialize Checkout Page
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, set the current user
      setCurrentUser(user);
      console.log("User is signed in:", user);
      console.log("DOC DATA: ", getUserCart(user.uid));

      fetchCartData(user.uid).then(displayCartItems);
  
    } else {
      // No user is signed in, redirect to login or show message
      console.error("No user is signed in.");
      window.location.href = "login.html";  // Redirect to login if needed
    }
  });

// Event Listener
checkoutButton.addEventListener("click", handleCheckout);

// const cartItemsContainer = document.getElementById('cart-items');
// const totalAmountElement = document.getElementById('total-amount');
// const checkoutButton = document.getElementById('checkout-button');

// // Hardcoded cart data (you can modify this as needed)
// const cart = [
//   { productId: 1, quantity: 2 },
//   { productId: 5, quantity: 1 },
//   { productId: 7, quantity: 3 },
// ];

// // Function to render cart items
// function renderCartItems(cart) {
//   cartItemsContainer.innerHTML = '';
//   let total = 0;

//   cart.forEach((cartItem) => {
//     const product = products.find((p) => p.id === cartItem.productId);
//     if (product) {
//       const itemTotal = product.price * cartItem.quantity;
//       total += itemTotal;

//       const itemElement = document.createElement('div');
//       itemElement.className = 'cart-item';

//       itemElement.innerHTML = `
//         <img src="${product.images[0] || './placeholder.jpg'}" alt="${product.name}">
//         <span>${product.name}</span>
//         <span>${cartItem.quantity} x $${product.price.toFixed(2)}</span>
//         <span>$${itemTotal.toFixed(2)}</span>
//       `;

//       cartItemsContainer.appendChild(itemElement);
//     }
//   });

//   totalAmountElement.textContent = `Total: $${total.toFixed(2)}`;
// }

// // Handle Checkout Button
// checkoutButton.addEventListener('click', () => {
//   alert('Checkout successful!');
//   cart.length = 0; // Clear cart
//   renderCartItems(cart);
//   totalAmountElement.textContent = 'Total: $0.00';
// });

// // Initialize Cart
// renderCartItems(cart);
