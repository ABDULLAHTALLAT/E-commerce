// script.js
document.getElementById("menu-button").addEventListener("click", function() {
    document.getElementById("dropdown-content").classList.toggle("show");
  });
  
// Elemente for Login Modal
document.addEventListener('DOMContentLoaded', () => {
    var loginBtn = document.getElementById('loginBtn');
    var signUpBtn = document.getElementById('signUpBtn');
    var loginModal = document.getElementById('loginModal');
    var signUpModal = document.getElementById('signUpModal');
    var closeLoginModal = document.getElementById('closeLoginModal');
    var closeSignUpModal = document.getElementById('closeSignUpModal');
    var loginForm = document.getElementById('loginForm');
    var signUpForm = document.getElementById('signUpForm');
    var authButtons = document.getElementById('auth-buttons');
    var accountIcon = document.getElementById('accountIcon');
    var accountIconImage = document.getElementById('accountIconImage');
    var goToSignUp = document.getElementById('goToSignUp');

    // Open modals
    loginBtn.onclick = () => loginModal.style.display = 'block';
    signUpBtn.onclick = () => signUpModal.style.display = 'block';

    // Close modals
    closeLoginModal.onclick = () => loginModal.style.display = 'none';
    closeSignUpModal.onclick = () => signUpModal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == loginModal) loginModal.style.display = 'none';
        if (event.target == signUpModal) signUpModal.style.display = 'none';
    };

    // Transition from login to sign up
    goToSignUp.onclick = () => {
        loginModal.style.display = 'none';
        signUpModal.style.display = 'block';
    };

    // Handle sign-up form submission
    signUpForm.onsubmit = (e) => {
        e.preventDefault();
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('signUpEmail').value;
        var password = document.getElementById('signUpPassword').value;

        // Save user data to local storage or cookies
        localStorage.setItem('customerName', `${firstName} ${lastName}`);
        localStorage.setItem('customerEmail', email);

        signUpModal.style.display = 'none';
        updateUI();
    };

    // Handle login form submission
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        var email = document.getElementById('loginEmail').value;
        var password = document.getElementById('loginPassword').value;

        // Validate login credentials (basic example)
        if (localStorage.getItem('customerEmail') === email) {
            loginModal.style.display = 'none';
            updateUI();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    // Update UI based on login status
    function updateUI() {
        var customerName = localStorage.getItem('customerName');
        if (customerName) {
            authButtons.style.display = 'none';
            accountIcon.style.display = 'block';
        } else {
            authButtons.style.display = 'flex';
            accountIcon.style.display = 'none';
        }
    }

    // Check login status on page load
    updateUI();

    // Account icon click redirects to the account page
    accountIcon.onclick = () => {
        window.location.href = 'profile.html'; // Redirect to account page
    };
});


document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector('.slider');
    var slides = document.querySelectorAll('.slide');
    var slideWidth = slides[0].clientWidth; // Assuming all slides have the same width
    var currentSlide = 0;
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    
    setInterval(nextSlide, 10000); // Change slide every 5 seconds (adjust as needed)
});
// Example product data
var products = {
    1: {
        name: "Product Name 1",
        price: "$99.99",
        description: "This is a great product that you will love!",
        image: "images/products/product-img-13.jpg"
    },
    2: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/proudact2/316YrQite8L._AC_SR300,300.jpg"
    },
    3: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/حقعيشؤف4/iphone14-6.jpg"
    },
    4: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/prudact3/41J58vOj2cL._AC_UF894,1000_QL80_.jpg"
    },
    5: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/products/product-img-10.jpg"
    },
    6: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/prudact3/41J58vOj2cL._AC_UF894,1000_QL80_.jpg"
    },
    7: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/prudact3/Food_Preparation_Appliances.png"
    },
    8: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/حقعيشؤف4/iphone14-6.jpg"
    },
    9: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/prudact3/Irons_.webp"
    },
    10: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/prudact3/61jdHppdlrL.jpg"
    },
    9: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/products/product-img-10.jpg"
    },
    10: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/حقعيشؤف4/HP-ZBook-Studio-G7-bd-Price.webp"
    },
    11: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/prudact3/cRob1u48HpvkT19q1zHcAfGyOFildv0kN2ir1WoT.webp"
    },
    12: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/products/product-img-10.jpg"
    },
    13: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/حقعيشؤف4/rwgpyu-1655196719.jpg"
    },
    14: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/حقعيشؤف4/mb808_0004_layer_1_1.jpg"
    },
    15: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/حقعيشؤف4/samsung-a54-5g-_8_128_-awesome-graphite-1.jpg"
    },
    16: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/حقعيشؤف4/Mobile_.webp"
    },
    17: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/حقعيشؤف4/D-2.jpg"
    },
    18: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/حقعيشؤف4/jbl-205-bt-wireless-speaker-with-microphone.jpg"
    },
    19: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/products/product-single-img-4.jpg"
    },
    20: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/proudact2/images.jpeg"
    },
    21: {
        name: "Product Name 2",
        price: "$79.99",
        description: "Another great product with amazing features.",
        image: "images/حقعيشؤف4/rwgpyu-1655196719.jpg"
    },
};

// Get elements
var viewDetailsLinks = document.querySelectorAll('.view-details');
var modal = document.getElementById('productModal');
var closeModal = document.getElementById('closeModal');
var modalProductImage = document.getElementById('modalProductImage');
var modalProductName = document.getElementById('modalProductName');
var modalProductDescription = document.getElementById('modalProductDescription');
var modalProductPrice = document.getElementById('modalProductPrice');

// Add event listeners to each 'View Details' link
viewDetailsLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        var productId = event.target.getAttribute('data-product-id');
        var product = products[productId];

        // Update modal content
        modalProductImage.src = product.image;
        modalProductName.textContent = product.name;
        modalProductDescription.textContent = product.description;
        modalProductPrice.textContent = product.price;

        // Show the modal
        modal.style.display = 'block';
    });
});

// Close the modal when the 'X' is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', () => {
    var countdownElements = document.querySelectorAll('.countdown');

    countdownElements.forEach(element => {
        var endDate = new Date(element.dataset.countdown).getTime();

        var updateCountdown = () => {
            var now = new Date().getTime();
            var distance = endDate - now;

            if (distance < 0) {
                element.innerHTML = "Deal Expired";
                return;
            }

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            element.innerHTML = `${days} days ${hours} hours ${minutes} mins ${seconds} sec`;
        };

        setInterval(updateCountdown, 1000);
    });
});
 // Get the button
 var backToTopBtn = document.getElementById("backToTopBtn");

 // When the user scrolls down 100px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         backToTopBtn.style.display = "block";
     } else {
         backToTopBtn.style.display = "none";
     }
 }

 // When the user clicks on the button, scroll to the top of the document
 backToTopBtn.addEventListener("click", function() {
     window.scrollTo({
         top: 0,
         behavior: "smooth" // Smooth scroll to top
     });
 });

 /////////////////////////////////////
 // scripts.js
 function goToCart() {
    window.location.href = 'cart.html';
    
  }

// Function to update countdown timers
function updateCountdown() {
    var timers = document.querySelectorAll('.timer');
  
    for (var i = 0; i < timers.length; i++) {
      var timer = timers[i];
      var endTime = new Date(timer.getAttribute('data-end-time')).getTime();
      var now = new Date().getTime();
      var timeRemaining = endTime - now;
  
      if (timeRemaining > 0) {
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        timer.querySelector('.countdown').innerHTML = `${days} Days ${hours} Hours ${minutes} Mins ${seconds} Sec`;
      } else {
        timer.querySelector('.countdown').innerHTML = "Offer expired!";
        timer.className = 'timer expired';
      }
    }
  }
  
  // Call to initialize timers
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  // Function to register product on "Add to Cart" button click
  function addToCart(event) {
    var productCard = event.target.parentNode;
    var productName = productCard.querySelector('h3').innerText;
    var productImage = productCard.querySelector('img').src;
    var productOriginalPrice = productCard.querySelector('.original-price').innerText;
    var productDiscountedPrice = productCard.querySelector('.discounted-price').innerText;
  
    // Create an object for the product
    var product = {
      name: productName,
      image: productImage,
      originalPrice: productOriginalPrice,
      discountedPrice: productDiscountedPrice
    };
  
    // Retrieve the current cart items from localStorage
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    
    // Store the updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    // Optional: Provide feedback to the user
    alert(productName + " has been added to your cart!");
  }
  
  // Add event listener to all "Add to Cart" buttons
  var addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', addToCart);
  }
  // Function to add product to cart
function addToCart() {
    // Assuming you have access to product information here
    var product = {
        id: 1, 
        name: "Product Name",
        price: 99.99,
    image:('images/products/images(2).jpeg'),
    };

    // Retrieve existing cart items from local storage or initialize an empty array
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to the cart items array
    cartItems.push(product);

    // Save updated cart items back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Optionally, update UI to reflect addition to cart (e.g., show a confirmation message)
    alert('Product added to cart!');
}
