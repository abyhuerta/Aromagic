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


//aby

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

function loadAll(){
const shopsection = document.getElementById('shopping-section');
        for( currproduct in Products){
                let carddiv = document.createElement('div');
                carddiv.classList.add('card');

                let cardimg = document.createElement('img');
                cardimg.src = currproduct.images[0];
                cardimg.classList.add('card-img-top');

                let cardbody = docuemnt.createElement('div');
                cardbody.classList.add('card-body');

                let cardtitle = document.createElement('h5');
                cardtitle.textContent = currproduct.name;

                let cardtext = docuemnt.createElement('p');
                cardtext.textContent = currproduct.price;

                let buybutton = document.createElement('a');
                buybutton.classList.add('btn');
        }
}