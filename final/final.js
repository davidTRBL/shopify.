let cart = [];

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");

  cartCount.textContent = cart.length;

  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(itemElement);
  });
}

function checkout() {
  alert("Checkout functionality is not implemented in this example.");
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted! This is a demo.");
  });
