document.addEventListener("DOMContentLoaded", function () {
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    let cart = [];

    // Function to update cart UI
    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let listItem = document.createElement("li");
            listItem.textContent = `${item.name} - ₹${item.price} x ${item.quantity}`;

            // Remove button
            let removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-item");
            removeButton.setAttribute("data-index", index);
            listItem.appendChild(removeButton);

            cartList.appendChild(listItem);
            
