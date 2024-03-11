function validateForm() {     // Lấy giá trị từ các trường input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var country = document.getElementById('country').value;
    var agree = document.getElementById('agree').checked;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').innerHTML = 'Email không hợp lệ';
    } else {
      document.getElementById('emailError').innerHTML = '';
    }

    var phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phoneError').innerHTML = 'Số điện thoại không hợp lệ';
    } else {
      document.getElementById('phoneError').innerHTML = '';
    }

    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp!');
    } else if (!agree) {
      alert('Bạn phải đồng ý với điều khoản!');
    } else {
      alert('Đăng ký thành công!');
      window.location.href = '/pages/user/login.html';
    }
  }