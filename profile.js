// profile.js

// Function to display profile products
function displayProfileProducts() {
    var profileProducts = JSON.parse(localStorage.getItem('profileProducts')) || [];
    var profileContainer = document.getElementById('profile-products');
    var productCount = document.getElementById('product-count');

    // Clear any existing content
    profileContainer.innerHTML = '';

    // Update the product count
    productCount.textContent = profileProducts.length;

    profileProducts.forEach((item, index) => {
        var row = document.createElement('tr');

        row.innerHTML = `
            <td><input type="checkbox" checked></td>
            <td>
                <img src="${item.image}" alt="Product Image">
                <span>${item.name}</span>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <span class="status ${item.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${item.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
            </td>
            <td>
                <button class="${item.inStock ? 'add-to-cart' : 'contact-us'}">
                    ${item.inStock ? 'Add to Cart' : 'Contact Us'}
                </button>
            </td>
            <td class="remove-btn" onclick="removeProduct(${index})">&#128465;</td>
        `;

        profileContainer.appendChild(row);
    });
}

// Function to remove a product from the profile list
function removeProduct(index) {
    var profileProducts = JSON.parse(localStorage.getItem('profileProducts')) || [];
    profileProducts.splice(index, 1);
    localStorage.setItem('profileProducts', JSON.stringify(profileProducts));
    displayProfileProducts();
}

// Load profile products when the profile page loads
window.onload = displayProfileProducts;




//////////////////////////////////////////////
var sampleProfileProducts = [
    { id: 1, name: "Organic Banana", price: 35.00, inStock: true, image: "images/products/product-img-3.jpg" },
    { id: 2, name: "Fresh Kiwi", price: 20.97, inStock: false, image: "images/products/product-img-8.jpg" },
    { id: 3, name: "Golden Pineapple", price: 35.00, inStock: true, image: "images/products/product-img-9.jpg" },
    { id: 4, name: "BeatRoot", price: 29.00, inStock: true, image: "images/products/product-img-10.jpg" },
    { id: 5, name: "Fresh Apple", price: 70.00, inStock: true, image: "images/products/product-img-11.jpg" }
];

localStorage.setItem('profileProducts', JSON.stringify(sampleProfileProducts));
// profile.js

// Function to get a cookie value by name
function getCookie(name) {
    var value = `; ${document.cookie}`;
    var parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  // Function to load the user profile from cookies or local storage
  function loadUserProfile() {
    // Try to get the name and email from cookies
    var name = getCookie('name');
    var email = getCookie('email');
  
    // If not found in cookies, try local storage
    if (!name) {
      name = localStorage.getItem('name');
    }
    if (!email) {
      email = localStorage.getItem('email');
    }
  
    // If still not found, use default values
    if (!name) {
      name = 'Name not found';
    }
    if (!email) {
      email = 'Email not found';
    }
  
    // Update the profile details in the HTML
    document.getElementById('name').textContent = name;
    document.getElementById('email').textContent = email;
  }
  
  // Call the function to load the profile when the page loads
  document.addEventListener('DOMContentLoaded', loadUserProfile);
  


  // Set name and email in cookies (expires in 7 days)
document.cookie = "name=Jane Doe; max-age=" + 7*24*60*60;
document.cookie = "email=jane.doe@example.com; max-age=" + 7*24*60*60;



// Set name and email in local storage
localStorage.setItem('name', 'abdullah tallat');
localStorage.setItem('email', 'tallata363@gmail.com');
