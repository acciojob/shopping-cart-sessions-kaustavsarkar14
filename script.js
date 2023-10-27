const products = [
   { id: 1, name: "Product 1", price: 10 },
   { id: 2, name: "Product 2", price: 20 },
   { id: 3, name: "Product 3", price: 30 },
   { id: 4, name: "Product 4", price: 40 },
   { id: 5, name: "Product 5", price: 50 },
];

let cartItems = JSON.parse(sessionStorage.getItem('cart')) ||  []
// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

// Render product list
function renderProducts() {
   products.forEach((product) => {
      const li = document.createElement("li");
      li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>`;
      productList.appendChild(li);
   });
}

// Render cart list
function renderCart() {
   cartList.innerHTML = ''
   cartItems.forEach((product, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="removeFromCart(${index})">Remove</button>`;
      cartList.appendChild(li);
   });
}

// Add item to cart
function addToCart(productId) {
   cartItems.push(products[productId - 1])
   renderCart()
   saveData()
}

// Remove item from cart
function removeFromCart(productId) {
   console.log("prev", cartItems)
   cartItems.splice(productId, 1)
   console.log("after", cartItems)
   renderCart()
   saveData()
}

// Clear cart
function clearCart() {
   cartItems = []
   console.log(cartItems)  
   renderCart()
   saveData()
}

function saveData(){
   sessionStorage.setItem('cart', JSON.stringify(cartItems))
}

// Initial render
renderProducts();
renderCart();
