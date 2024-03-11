document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.querySelector('.netflix-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            if (validateLogin(email, password)) {

                showNotification('Đăng nhập thành công!', 'success');
            } else {

                showNotification('Đăng nhập không thành công. Vui lòng kiểm tra tên đăng nhập và mật khẩu.', 'error');
            }
        });
    }

    var forgotPasswordLink = document.querySelector('.forgot-password-link');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function (event) {
            event.preventDefault();

            showNotification('Chức năng quên mật khẩu sẽ được xử lý ở đây.', 'info');
        });
    }
});

function validateLogin(email, password) {
    return email.trim() !== '' && password.trim() !== '';
}

function showNotification(message, type) {
    var notification = document.createElement('div');
    notification.className = 'notification ' + type;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(function () {
        notification.classList.add('show');
    }, 100);

    setTimeout(function () {
        notification.remove();
    }, 3000);
}
function validateForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const agreeCheckbox = document.getElementById('agree');
    if (email === '' || password === '') {
      alert('Vui lòng các thông tin đầy đủ');
      return false;
    }

    if (!agreeCheckbox.checked) {
      alert('Vui lòng đồng ý với các điều khoản dịch vụ.');
      return false;
    }
}
function isValidEmailOrPhone(input) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]+$/;

    return emailRegex.test(input) || phoneRegex.test(input);
}