// cart.js

// Function to display cart items
function displayCartItems() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  var cartContainer = document.getElementById('cart-items');
  
  // Clear any existing items
  cartContainer.innerHTML = '';

  cartItems.forEach((item, index) => {
      var itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');

      itemDiv.innerHTML = `
          <div class="product-details">
              <img src="images/products/product-img-1.jpg" alt="Product Image">
              <h3>${item.name}</h3>
             
          </div>
          <div class="product-controls">
              <button onclick="updateQuantity(${index}, -1)">-</button>
              <input type="text" value="${item.quantity}" readonly>
              <button onclick="updateQuantity(${index}, 1)">+</button>
              <span class="product-price">$${item.price}</span>
              <span class="remove-btn" onclick="removeItem(${index})">Remove</span>
          </div>
      `;

      cartContainer.appendChild(itemDiv);
  });
}


function updateQuantity(index, change) {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  if (cartItems[index].quantity + change > 0) {
      cartItems[index].quantity += change;
      localStorage.setItem('cart', JSON.stringify(cartItems));
      displayCartItems();
  }
}


function removeItem(index) {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  displayCartItems();
}

// Load cart items when the page loads
window.onload = displayCartItems;



