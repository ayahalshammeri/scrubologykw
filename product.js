// Create a cart array to hold the products
let cart = [];

// Function to add a product to the cart
function addToCart(productId, productName, color, topSize, pantsSize, notes, price) {
    let quantity = 1; // Default quantity is 1, you can modify it
    let totalPrice = price * quantity;

    // Create a product object
    let product = {
        product_id: productId,
        product_name: productName,
        quantity: quantity,
        color: color,
        top_size: topSize,
        pants_size: pantsSize,
        notes: notes,
        price_per_item: price,
        total_price: totalPrice
    };

    // Add product to the cart
    cart.push(product);

    // Update cart in local storage (optional)
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to checkout or update checkout page
    window.location.href = "checkout.html"; // Redirects to checkout
}

// Function to load cart details on checkout page
function loadCart() {
    let cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
        // Display cart items on the checkout page
        console.log(cartData);
    }
}