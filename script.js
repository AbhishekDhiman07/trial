document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - $${item.price} (x${item.quantity})`;
            cartItemsContainer.appendChild(itemElement);
            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.textContent = `Total Price: $${totalPrice}`;
    }

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', (e) => {
            const productElement = e.target.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
        });
    });

    checkoutButton.addEventListener('click', () => {
        alert('Checkout functionality is not implemented in this demo.');
    });
});
