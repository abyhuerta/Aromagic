import Products from "./catalog.js"
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

   let destPrice = document.getElementById('prdPrice');
   destPrice.innerText = `$${Products[currProd].price}`;

   let destStock = document.getElementById('prdStock');
   destStock.innerText = `Stock: ${Products[currProd].stock}`;

   let sizeLen = 0;
   sizeLen = Products[currProd].oz.length;

   let sizeImg = 0;
   sizeImg = Products[currProd].images.length;

   let prdOZ = document.getElementById('prdOZ');
   prdOZ = Products[currProd].oz[0];
   
   if (Products[currProd].images && Products[currProd].images.length > 0) {
    // Set the first image as the main image
    destImg.src = Products[currProd].images[0];
    destImg.classList.add('active');
} else {
    // Fallback image if there are no images
    destImg.src = './src/assets/imgs/blank_candle.jpg';
    destImg.classList.add('active');
}

for(let j = 0; j < sizeImg; j++)
  {
 
    let a = document.createElement('img');
    a.src = Products[currProd].images[j];
    a.classList.add('altImages');
    prdImg.appendChild(a);
  }

for(let i = 0; i < sizeLen; i++)
  {
    let li=document.createElement('li');
    prdOZ.appendChild(li);
    let a=document.createElement('a');
    a.innerText = Products[currProd].oz[i];
    a.classList.add('dropdown-item');
    li.appendChild(a);

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

