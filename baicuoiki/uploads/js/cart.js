
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartTableBody = document.querySelector('#cart-table tbody');
const totalPriceEl = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');

function renderCart() {
  cartTableBody.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price.toLocaleString()}đ</td>
      <td>
        <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="qty-input" />
      </td>
      <td>${itemTotal.toLocaleString()}đ</td>
      <td><button data-index="${index}" class="delete-btn">Xóa</button></td>
    `;

    cartTableBody.appendChild(tr);
  });

  totalPriceEl.textContent = `Tổng tiền: ${total.toLocaleString()}đ`;

  // Nếu giỏ hàng trống disable nút thanh toán
  checkoutBtn.disabled = cart.length === 0;
}

renderCart();

// Cập nhật số lượng
cartTableBody.addEventListener('change', function (e) {
  if (e.target.classList.contains('qty-input')) {
    const index = e.target.dataset.index;
    let qty = parseInt(e.target.value);
    if (qty < 1) qty = 1;
    cart[index].quantity = qty;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
});

// Xóa sản phẩm
cartTableBody.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
});

// Chuyển đến trang thanh toán
checkoutBtn.addEventListener('click', () => {
  window.location.href = 'checkout.html';
});
// cart.js
document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tbody = document.querySelector("#cart-table tbody");
  let total = 0;

  cart.forEach(item => {
    const tr = document.createElement("tr");
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    tr.innerHTML = `
      <td><img src="${item.image}" alt="${item.name}" width="60"/></td>
      <td>${item.name}</td>
      <td>${item.price.toLocaleString()} đ</td>
      <td>${item.quantity}</td>
      <td>${itemTotal.toLocaleString()} đ</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("total-price").textContent = `Tổng cộng: ${total.toLocaleString()} đ`;
});