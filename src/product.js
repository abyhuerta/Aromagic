import Products from "./catalog.js"
import {addItemToCart} from './cart.js';
// import exportProductNum from "./shop.js"
function getProductIdFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id'); // Get the product ID from the URL
  
   return productId;
  }
console.log(getProductIdFromUrl());
function getProduct()
{
let currProd = getProductIdFromUrl();
currProd = currProd - 1;

   let destination = document.getElementById('product-home');

   let destImg = document.getElementById('cardimg');

   let destDesc =   document.getElementById('prdDesc');
   destDesc.innerText = Products[currProd].description;

   let destTitle = document.getElementById('prdTitle');
   destTitle.innerText = Products[currProd].name;

   let basePrice = Products[currProd].price;
   let destPrice = document.getElementById('prdPrice');
   destPrice.innerText = `$${basePrice.toFixed(2)}`;

   let destStock = document.getElementById('prdStock');
   destStock.innerText = `Stock: ${Products[currProd].stock}`;

   
   let sizeLen = Products[currProd].oz.length;

   let sizeImg = Products[currProd].images.length;
   let prdOZ = document.getElementById('prdOZ');
   let selectedOunce = Products[currProd].oz[0];
   
   
   
   if (Products[currProd].images && Products[currProd].images.length > 0) {
    // Set the first image as the main image
    destImg.src = Products[currProd].images[0];
    destImg.classList.add('active');
} else {
    // Fallback image if there are no images
    destImg.src = './src/assets/imgs/blank_candle.jpg';
    destImg.classList.add('active');
}

// Clear the thumbnails div before appending new thumbnails
let prdImg = document.getElementById('prdImg');
prdImg.innerHTML = ''; // Clear previous thumbnails

// Loop to create and append thumbnail images
for (let j = 0; j < sizeImg; j++) {
    let a = document.createElement('img');
    a.src = Products[currProd].images[j];
    a.classList.add('altImages');
    a.setAttribute('data-index', j); // Add a data attribute to store the image index

    // Add event listener to each thumbnail image
    a.addEventListener('click', function () {
        swapImage(j); // Pass the clicked thumbnail index to swapImage function
        highlightSelectedThumbnail(a);
    });

    prdImg.appendChild(a); // Append thumbnail to the container
}

function highlightSelectedThumbnail(selectedThumbnail) {
  // Remove the active-border class from all thumbnails
  let thumbnails = document.querySelectorAll('.altImages');
  thumbnails.forEach(function (thumbnail) {
      thumbnail.classList.remove('active-border');
  });

  // Add the active-border class to the selected thumbnail
  selectedThumbnail.classList.add('active-border');
}



for (let i = 0; i < sizeLen; i++) {
  let li = document.createElement('li');
  prdOZ.appendChild(li);
  let a = document.createElement('a');
  a.innerText = `${Products[currProd].oz[i]} oz`;
  a.classList.add('dropdown-item');
  li.appendChild(a);

  // Add event listener to multiply the price by the ounce value on click
  a.addEventListener('click', function () {
      selectedOunce = Products[currProd].oz[i];
      let newPrice = basePrice * selectedOunce;

      // Update the displayed price
      destPrice.innerText = `$${newPrice.toFixed(2)}`;
  });
  let ounceSelect = selectedOunce;
}

if (sizeLen > 0) 
  {
  let firstOunce = Products[currProd].oz[0]; // Get the first size option
  let initialPrice = basePrice * firstOunce; // Multiply by the first ounce value

  // Update the displayed price with the first ounce value
  destPrice.innerText = `$${initialPrice.toFixed(2)}`;
}

let addToCartButton = document.getElementById('addToCartBtn');
addToCartButton.addEventListener('click', function () {
    let quantity = parseInt(document.getElementById('quantity').value) || 1;
    addItemToCartHelper(currProd + 1, selectedOunce, quantity, destStock);
});



    // Implement increment and decrement functionality
    let quantityInput = document.getElementById('quantity');
    let incrementBtn = document.getElementById('incrementBtn');
    let decrementBtn = document.getElementById('decrementBtn');

    incrementBtn.addEventListener('click', function () {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    });

    decrementBtn.addEventListener('click', function () {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        }
    });

function addItemToCartHelper(currProd, oz, qty, stock) 
{
  const item = Products.find(product => product.id === currProd);

  if (!item) {
    console.error("Product not found");
    return;
  }

  // Validate the 'oz' argument
  if (!oz || !item.oz.includes(oz)) {
    console.error("Invalid size (oz) specified:", oz);
    return;
  }

  // Validate the 'qty' argument
  if (!qty || qty <= 0) {
    console.error("Invalid quantity:", qty);
    return;
  }

  
if(stock - qty == 0)
  {
    console.log();
    console.error("We have ran out of this product.");
    return;
  }

  addItemToCart(item.id, oz, qty);
  
  showNotification(`Added (${oz} oz) ${item.name} to the cart. Quantity: ${qty}`);
}

}

  

  function swapImage(index) {
    let destImg = document.getElementById('cardimg');
    let currProd = getProductIdFromUrl() - 1; // Get current product index
    if (Products[currProd].images && Products[currProd].images.length > index) {
        destImg.src = Products[currProd].images[index];
    } else {
        destImg.src = './src/assets/imgs/blank_candle.jpg'; // Fallback image
    }
}

function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.innerText = message; // Set the custom message
  notification.style.display = 'block'; // Show the notification

  // Hide the notification after 3 seconds
  setTimeout(function () {
      notification.style.display = 'none';
  }, 3000);
}

  

 


getProduct();
//for jordan!
// for(int i = 0; i< products.len){
//     let currentprod = products[i];
//     currentprod.id
//     for(int j = 0 j < currentprod.images.len){

//     }
// }


//recieve a product ID
//find product based off ID in catalog.js

//for(){
//     if(ID revieced  matches products[i].id){
//         //assign it to a variable 
//         //     let currentprod = products[i];
//         //currentprod.title
//         let destination = document.getElementById('product-home');
//         let title = document.createElement('h1');
        // title.textContent = currentprod.title;
//         document.destination.appendChild(title);
//     }
// }

