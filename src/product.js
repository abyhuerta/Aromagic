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
let currProd = 0;
//for(i = 0; i < Products.length(); i++)
//{
  
    //if(exportProductNum == Products[i].id)
      //{
        //currProd = i;
      //}
    
  //}
   let destination = document.getElementById('product-home');

   let destImg = document.getElementById('cardimg');

   let destDesc =   document.getElementById('prdDesc');
   destDesc.innerText = Products[currProd].description;

   let destTitle = document.getElementById('prdTitle');
   destTitle.innerText = Products[currProd].name;

   let destPrice = document.getElementById('prdPrice');
   destPrice.innerText = Products[currProd].price;

   let destStock = document.getElementById('prdStock');
   destStock.innerText = Products[currProd].stock;

   //for(j = 0; j < Product[currProd].images.length; j++)
   //{
   //destImg.src = Products[currProd].images[j];
   //}
   if (currProd.images && currProd.images.length > 0) 
    {
    destImg.src = currProd.images[0];
} else {
    destImg.src = './src/assets/imgs/blank_candle.jpg'; // A fallback image if the array is empty
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

