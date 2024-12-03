const products = [
    {
        id: 1,
        name: "The Magic",
        price: 1.39,
        oz: [10, 18, 24],
        images: ['./src/assets/imgs/c1-1.jpg', './src/assets/imgs/c1-2.jpg'],
        stock: 100,
        description: "Experience the enchanting aroma.",
        type: "All Year"
    },
    // Add the rest of your product data here
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Stock: ${product.stock}</p>
            <p>Type: ${product.type}</p>
            <button onclick="editProduct(${product.id})">Edit</button>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;
        productList.appendChild(productCard);
    });
}

function showProductForm() {
    document.getElementById('product-form').style.display = 'block';
    document.getElementById('product-form-elements').reset();
    document.getElementById('edit-id').value = '';
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        document.getElementById('name').value = product.name;
        document.getElementById('price').value = product.price;
        document.getElementById('stock').value = product.stock;
        document.getElementById('description').value = product.description;
        document.getElementById('type').value = product.type;
        document.getElementById('images').value = product.images.join(',');
        document.getElementById('oz').value = product.oz.join(',');
        document.getElementById('edit-id').value = product.id;
        showProductForm();
    }
}

function saveProduct() {
    const id = document.getElementById('edit-id').value;
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const stock = parseInt(document.getElementById('stock').value);
    const description = document.getElementById('description').value;
    const type = document.getElementById('type').value;
    const images = document.getElementById('images').value.split(',').map(img => img.trim());
    const oz = document.getElementById('oz').value.split(',').map(Number);

    if (id) {
        const productIndex = products.findIndex(p => p.id == id);
        if (productIndex !== -1) {
            products[productIndex] = { id: parseInt(id), name, price, oz, images, stock, description, type };
        }
    } else {
        const newProduct = {
            id: products.length + 1,
            name,
            price,
            oz,
            images,
            stock,
            description,
            type
        };
        products.push(newProduct);
    }

    document.getElementById('product-form').style.display = 'none';
    displayProducts();
}

function deleteProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        displayProducts();
    }
}

// Initial display of products
displayProducts();
