// js/detail.js
const productData = JSON.parse(localStorage.getItem('productDetail'));

if (productData) {
  document.getElementById('product-name').innerText = productData.name;
  document.getElementById('product-image').src = productData.image;
  document.getElementById('product-price').innerText = `Giá: ${productData.price}`;
  document.getElementById('product-description').innerText = productData.description;
} else {
  document.body.innerHTML = '<p>Không tìm thấy thông tin sản phẩm.</p>';
}

