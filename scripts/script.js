document.addEventListener("DOMContentLoaded", function () {
  const cartCountElement = document.getElementById("cart-count");
  const addToCartButton = document.getElementById("add-cart");

  // Function to handle adding items to the cart
  function addToCart() {
    // Increment the cart count
    let currentCount = parseInt(cartCountElement.textContent, 10);
    cartCountElement.textContent = currentCount + 1;
  }

  // Attach the addToCart function to the button click event
  addToCartButton.addEventListener("click", addToCart);
});

// Function to store user selection in localStorage
function storeUserSelection() {
  const dietSelect = document.getElementById("dietSelect");
  const organicSelect = document.getElementById("organicSelect");

  const selectedDiet = dietSelect.value;
  const selectedOrganic = organicSelect.value;

  // Store the user's selection in localStorage
  localStorage.setItem(
    "userSelection",
    JSON.stringify({ selectedDiet, selectedOrganic })
  );
}

// Add event listener to trigger storing user selection when the selection changes
document
  .getElementById("dietSelect")
  .addEventListener("change", storeUserSelection);
document
  .getElementById("organicSelect")
  .addEventListener("change", storeUserSelection);
