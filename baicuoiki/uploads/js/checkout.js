const form = document.getElementById('checkout-form');

// Hàm kiểm tra email đơn giản
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Hàm kiểm tra form
function validateForm(data) {
  if (!data.name.trim()) {
    alert('Vui lòng nhập họ tên');
    return false;
  }
  if (!validateEmail(data.email)) {
    alert('Email không hợp lệ');
    return false;
  }
  if (!data.address.trim()) {
    alert('Vui lòng nhập địa chỉ');
    return false;
  }
  if (!data.phone.trim() || !/^\d{9,11}$/.test(data.phone)) {
    alert('Số điện thoại không hợp lệ (9-11 số)');
    return false;
  }
  return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    address: form.address.value,
    phone: form.phone.value,
  };

  if (!validateForm(formData)) return;

  // Xử lý gửi đơn hàng (giả lập)
  alert(`Cảm ơn ${formData.name} đã đặt hàng!\nChúng tôi sẽ liên hệ bạn sớm.`);

  // Xóa giỏ hàng
  localStorage.removeItem('cart');

  // Chuyển về trang chủ hoặc trang khác
  window.location.href = 'index.html';
});