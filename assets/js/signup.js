function validateForm() {
  // Lấy giá trị từ các trường input
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var country = document.getElementById("country").value;
  var agree = document.getElementById("agree").checked;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerHTML = "Email không hợp lệ";
    return;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  var phoneRegex = /^[0-9]{10,}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").innerHTML =
      "Số điện thoại không hợp lệ";
    return;
  } else {
    document.getElementById("phoneError").innerHTML = "";
  }

  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  var existingUser = userList.find(function (user) {
    return user.username === username;
  });

  if (existingUser) {
    alert("Tài khoản đã được sử dụng!");
    return;
  }
  var existingEmail = userList.find(function (user) {
    return user.email === email;
  });

  if (existingEmail) {
    alert("Email đã được sử dụng!");
    return;
  }
  if (password !== confirmPassword) {
    alert("Mật khẩu không khớp!");
    return;
  } else if (!agree) {
    alert("Bạn phải đồng ý với điều khoản!");
    return;
  } else {
    // Tạo đối tượng user mới
    var newUser = {
      username: username,
      password: password,
      name: name,
      email: email,
      phone: phone,
      country: country,
      status: "Normal",
      library:[],
      avatarUrl:"/assets/images/clone.jpg",
      $DATA:{
        comments:[],
      }
    };

    // Thêm user mới vào mảng userList
    userList.push(newUser);

    // Lưu mảng userList vào localStorage
    localStorage.setItem("userList", JSON.stringify(userList));

    alert("Đăng ký thành công!");
    window.location.href = "/pages/user/login.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let currentUser=JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    window.location.href="/pages/display.html";
  }
});