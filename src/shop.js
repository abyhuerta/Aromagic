import { auth } from './firebaseConfig';  // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth';  // Import Firebase auth listener
import { setCurrentUser } from './userState';  // Import your user state management
import products from './catalog.js';
import { addItemToCart } from './cart.js';

// Check auth state on page load
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, set the current user
    setCurrentUser(user);
    console.log("User is signed in:", user);
  } else {
    // No user is signed in, redirect to login or show message
    console.error("No user is signed in.");
    window.location.href = "login.html";  // Redirect to login if needed
  }
});
//--------------------------code for shop.html-------------------------

//TODO: load products by category,size,price,all
//event listener for card click 

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
let selectedProductNum = 0;
function loadAll(){
    const cardGroup = document.getElementById('card-group');
            for(let currproduct of products){
                  let coldiv = document.createElement('div');
                  coldiv.classList.add('col');
                    let carddiv = document.createElement('div');
                    carddiv.classList.add('card');
    
                    coldiv.appendChild(carddiv);

                    let imga = document.createElement('a');
                    // imga.href = './product.html';

                    let cardimg = document.createElement('img');
                    if (currproduct.images && currproduct.images.length > 0) {
                      cardimg.src = currproduct.images[0];
                  } else {
                      cardimg.src = './src/assets/imgs/blank_candle.jpg'; // A fallback image if the array is empty
                  }
                    cardimg.classList.add('card-img-top');
                    cardimg.setAttribute('data-product-id', currproduct.id);

                    cardimg.addEventListener('click', function() {
                      const productId = cardimg.getAttribute('data-product-id');  // Get the value of data-product-id
                        // Redirect to product.html with the product ID in the URL
                      window.location.href = `./product.html?id=${productId}`;
                  });
    
                    imga.appendChild(cardimg);
                    carddiv.appendChild(imga);
    
                    let cardbody = document.createElement('div');
                    cardbody.classList.add('card-body');

                    let namea = document.createElement('a');

                    let cardtitle = document.createElement('h5');
                    cardtitle.innerText = `${currproduct.name} (${currproduct.oz[0]}oz)`;
                    cardtitle.setAttribute('data-product-id', currproduct.id);
                    // namea.href = './product.html';
                    namea.addEventListener('click', function() {
                      const productId = cardtitle.getAttribute('data-product-id');  // Get the value of data-product-id

                        // Redirect to product.html with the product ID in the URL
                      window.location.href = `./product.html?id=${productId}`;
                  });
        
                    namea.appendChild(cardtitle);
                    cardbody.appendChild(namea);
    
                    let cardtext = document.createElement('p');
                    cardtext.innerText = `$${(currproduct.price * currproduct.oz[0]).toFixed(2)} ($${currproduct.price}/Ounce)`;
    
                    cardbody.appendChild(cardtext);
    
                    let buybutton = document.createElement('a');
                    buybutton.innerText = "Add to cart";
                    buybutton.classList.add('btn');
                    buybutton.classList.add('buy-btn');
                    buybutton.addEventListener('click', function(){
                      addItemToCartHelper(currproduct.id,currproduct.oz[0],1);
                    })
    
                    cardbody.appendChild(buybutton);


                    carddiv.appendChild(cardbody);
                    cardGroup.appendChild(coldiv);
            }
            
    }
    
    function filterByType( type){
    
    }
    
    function filterByPrice(min,max){
    
    }
    
    function filterBySize(size){
            
    }


    function addItemToCartHelper(productID, oz, qty) {
      const item = products.find(product => product.id === productID);
    
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
    
      addItemToCart(item.id, oz, qty);
    }
    

    

    document.addEventListener('DOMContentLoaded', function() {
      loadAll();
  });

   export default{addItemToCart};