import products from './catalog.js'
import { db } from './firebaseConfig.js';
import { collection,addDoc } from 'firebase/firestore';
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
                    cardtitle.innerText = currproduct.name;
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
                    cardtext.innerText = `$${currproduct.price}`;
    
                    cardbody.appendChild(cardtext);
    
                    let buybutton = document.createElement('a');
                    buybutton.innerText = "Add to cart";
                    buybutton.classList.add('btn');
                    buybutton.addEventListener('click', function(){
                      addItemToCart(currproduct.id);
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

    function exportProductNum(){
      //send product id to product.html
      console.log(selectedProductNum)

    }

    function addItemToCart(productID){
      
    }

    

    document.addEventListener('DOMContentLoaded', function() {
      loadAll();
  });
// //for product .js
// function getProductIdFromUrl() {
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const productId = urlParams.get('id'); // Get the product ID from the URL

//   return productId;
// }

// // Use this product ID to load the specific product details
// const productId = getProductIdFromUrl();
// // Now, you can fetch the product details using the productId
// console.log(productId);



   export default{exportProductNum,addItemToCart};