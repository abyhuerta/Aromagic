import Products from "./catalog.js"

function getProduct(prodID)
{
   
   for(i = 0; i < Products.length(); i++)
 {
   if(prodID == Products[i].id)
   {
   let currentprod = Products[i];
   currentprod.title
   let destination = document.getElementById('product-home');

   let destImg = document.getElementById('cardimg');

   let destDesc =   document.getElementById('prdDesc');
   destDesc.textContent = Products[i].description;

   let destTitle = document.getElementById('prdTitle');
   destTitle.textContent = Products[i].name;

   let destPrice = document.getElementById('prdPrice');
   destPrice.textContent = Products[i].price;

   let destStock = document.getElementById('prdStock');
   destStock.textContent = Products[i].stock;

   for(j = 0; j < Product[i].images.length; j++)
   {
   destImg.src = Products[i].images[j];
   }

   }
  }
}
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

