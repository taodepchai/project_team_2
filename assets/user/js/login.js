document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".form");
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    window.location.href = "/pages/display.html";
  }
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      login();
    });
  }
});

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const agreeCheckbox = document.getElementById("agree");
  if (username === "") {
    document.getElementById("usernameError").innerHTML = "Vui lòng điền đầy đủ thông tin tên đăng nhập";
    return;
  }else {
    document.getElementById("usernameError").innerHTML = "";
  }
  if (password === "") {
    document.getElementById("passwordError").innerHTML = "Vui lòng điền đầy đủ thông tin tên mật khẩu";
    return;
  }else {
    document.getElementById("passwordError").innerHTML = "";
  }
  
  if (!agreeCheckbox.checked) {
    document.getElementById("agreeError").innerHTML = "Vui lòng đồng ý với các điều khoản dịch vụ.";
    return;
  }

  const userListString = localStorage.getItem("userList");
  if (!userListString) {
    swal({
          title: "ERROR!",
          text: "Không có tài khoản người dùng nào được tìm thấy!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
      })
    return;
  }

  let userList;
  try {
    userList = JSON.parse(userListString);
  } catch (error) {
    console.error("Lỗi khi phân tích cú pháp dữ liệu người dùng:", error);
    swal({
          title: "ERROR!",
          text: "Đã xảy ra lỗi khi đọc dữ liệu người dùng!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
      })
    return;
  }
  console.log(userList);
  if (!Array.isArray(userList)) {
    console.error("Dữ liệu người dùng không phải là một mảng.");
    document.getElementById("usernameError").innerHTML = "Dữ liệu người dùng không hợp lệ.";
    return;
  } else {
    const loggedInUser = userList.find(
      (user) => user.username === username && user.password === password
    );
    if (loggedInUser) {
      console.log(loggedInUser);
      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
      swal({
    title: "Success",
    text: "Bạn đã đăng nhập thành công",
    icon: "success",
    // buttons: true,
    dangerMode: true,
  })
  .then(() => {
    window.location.href = "/pages/display.html";
  });
      
    } else {
      swal({
          title: "ERROR!",
          text: "Đăng nhập không thành công. Vui lòng kiểm tra tên đăng nhập và mật khẩu!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
      })
    }
  }
}
