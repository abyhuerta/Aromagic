import Products from './catalog.js'
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
function loadAll(){
    const shopsection = document.getElementById('shopping-section');
            for( currproduct in Products){
                    let carddiv = document.createElement('div');
                    carddiv.classList.add('card');
    
                    let cardimg = document.createElement('img');
                    cardimg.src = currproduct.images[0];
                    cardimg.classList.add('card-img-top');
    
                    carddiv.appendChild(cardimg);
    
                    let cardbody = docuemnt.createElement('div');
                    cardbody.classList.add('card-body');
    
                    let cardtitle = document.createElement('h5');
                    cardtitle.textContent = currproduct.name;
    
                    cardbody.appendChild(cardtitle);
    
                    let cardtext = docuemnt.createElement('p');
                    cardtext.textContent = currproduct.price;
    
                    cardbody.appendChild(cardtext);
    
                    let buybutton = document.createElement('a');
                    buybutton.classList.add('btn');
    
                    cardbody.appendChild(buybutton);
            }
    }
    
    function filterByType(){
    
    }
    
    function filterByPrice(){
    
    }
    
    function filterBySize(){
            
    }