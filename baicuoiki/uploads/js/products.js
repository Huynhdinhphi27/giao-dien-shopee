// js/products.js
const detailButtons = document.querySelectorAll('.product-item button');

detailButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productItem = button.parentElement;
    const productName = productItem.querySelector('h3').innerText;
    const productPrice = productItem.querySelector('p').innerText;
    const productImage = productItem.querySelector('img').src;

    // Tạo mô tả giả lập (có thể mở rộng sau)
    const productDescription = "Đây là sản phẩm chất lượng cao, phù hợp với mọi lứa tuổi và phong cách.";

    // Lưu vào localStorage
    localStorage.setItem('productDetail', JSON.stringify({
      name: productName,
      price: productPrice,
      image: productImage,
      description: productDescription
    }));

    // Chuyển hướng tới trang chi tiết
    window.location.href = 'detail.html';
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const product = {
                id: this.dataset.id,
                name: this.dataset.name,
                price: parseInt(this.dataset.price),
                image: this.dataset.image,
                quantity: 1
            };

            addToCart(product);
            alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
        });
    });

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(item => item.id === product.id);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    }
});