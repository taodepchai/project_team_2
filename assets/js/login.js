document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      login();
    });
  }
});

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const agreeCheckbox = document.getElementById("agree");

  if (email === "" || password === "") {
    alert("Vui lòng điền đầy đủ thông tin đăng nhập.");
    return;
  }

  if (!agreeCheckbox.checked) {
    alert("Vui lòng đồng ý với các điều khoản dịch vụ.");
    return;
  }

  const userListString = localStorage.getItem("userList");
  if (!userListString) {
    alert("Không có tài khoản người dùng nào được tìm thấy.");
    return;
  }

  let userList;
  try {
    userList = JSON.parse(userListString);
  } catch (error) {
    console.error("Lỗi khi phân tích cú pháp dữ liệu người dùng:", error);
    alert("Đã xảy ra lỗi khi đọc dữ liệu người dùng.");
    return;
  }

  if (!Array.isArray(userList)) {
    console.error("Dữ liệu người dùng không phải là một mảng.");
    alert("Dữ liệu người dùng không hợp lệ.");
    return;
  }

  const loggedInUser = userList.find(
    (user) => user.email === email && user.password === password
  );

  if (loggedInUser) {
    alert("Đăng nhập thành công!");
    localStorage.setItem("isLoggedIn", "true");
    console.log(loggedInUser.username);
    localStorage.setItem("username", loggedInUser.username);
    window.location.href = "/pages/display.html";
  } else {
    alert(
      "Đăng nhập không thành công. Vui lòng kiểm tra tên đăng nhập và mật khẩu."
    );
  }
}
