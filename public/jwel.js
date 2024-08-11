document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.closest('.card-body').querySelector('.card-title').innerText;
            console.log(productName);
            addToCart(productName);
        });
    });

    function addToCart(productName) {
        fetch('/addtocart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productName})
        })
        .then(response => response.text()) // Change to response.text() to handle non-JSON responses
        .then(text => {
            try {
                const data = JSON.parse(text); // Try to parse the response as JSON
                if (data.success) {
                    alert(`${productName} has been added to your cart!`);
                } else {
                    alert('Failed to add product to cart.');
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
                alert('Failed to add product to cart.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});