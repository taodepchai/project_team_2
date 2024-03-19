// Biến lưu trữ thông tin gốc của người dùng
var originalInfo = {};

// Sự kiện DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const userInfo = JSON.parse(localStorage.getItem("userList"));
  const usernameParam = new URLSearchParams(window.location.search).get(
    "username"
  );

  userInfo.forEach((user) => {
    if (user.username === usernameParam) {
      // Hiển thị thông tin người dùng từ local storage
      document.getElementById("username").textContent = user.username;
      document.getElementById("name").textContent = user.name;
      document.getElementById("email").textContent = user.email;
      document.getElementById("phone").textContent = user.phone;
      document.getElementById("password").textContent = user.password;
      document.getElementById("status").textContent = user.status;

      // Hiển thị ảnh đại diện từ localStorage
      const avatarURL = user.avatarUrl;
      console.log(user);
      if (avatarURL) {
        document.getElementById("avatar").src = avatarURL;
      }
    } else {
      console.log(
        "Không tìm thấy thông tin người dùng hoặc username không hợp lệ."
      );
    }
  });
});

// Xóa thông báo lỗi
function clearErrorMessages() {
  var errorInputs = document.querySelectorAll(".error");
  errorInputs.forEach(function (input) {
    input.classList.remove("error");
  });

  var errorContainer = document.getElementById("error-messages");
  errorContainer.innerHTML = "";
}

// Thay đổi ảnh đại diện
function editAvatar() {
  var editAvatarInput = document.getElementById("edit-avatar-input");
  editAvatarInput.click();
}

// Xử lý thay đổi ảnh đại diện
function handleAvatarChange() {
  var editAvatarInput = document.getElementById("edit-avatar-input");
  var avatar = document.getElementById("avatar");
  var file = editAvatarInput.files[0];
  let userList = JSON.parse(localStorage.getItem("userList")) || [];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      avatar.src = e.target.result;
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const userInfo = JSON.parse(localStorage.getItem("userList"));
      const usernameParam = new URLSearchParams(window.location.search).get(
        "username"
      );
      currentUser.avatarUrl = e.target.result;
      console.log(userList);
      if (currentUser) {
        localStorage.setItem(`currentUser`, JSON.stringify(currentUser));

        for (let i = 0; i < userList.length; i++) {
          if ((userList[i].name = currentUser.name)) {
            userList[i] = currentUser;
          }
        }
        console.log(userList);
        localStorage.setItem(`userList`, JSON.stringify(userList));
      }
    };
    reader.readAsDataURL(file);
  }
}

// Chỉnh sửa thông tin người dùng
function editInfo() {
  document.getElementById("edit-username").value =
    document.getElementById("username").textContent;

  // Lưu thông tin gốc trước khi chỉnh sửa
  originalInfo.name = document.getElementById("name").textContent;
  originalInfo.email = document.getElementById("email").textContent;
  originalInfo.phone = document.getElementById("phone").textContent;
  originalInfo.password = document.getElementById("password").textContent;

  // Hiển thị form chỉnh sửa
  document.getElementById("personal-info").style.display = "none";
  document.getElementById("edit-form").style.display = "block";
  document.getElementById("avatar-container").style.display = "block";
  document.getElementById("edit-name").classList.remove("error");
  document.getElementById("edit-email").classList.remove("error");
  document.getElementById("edit-phone").classList.remove("error");
  document.getElementById("edit-password").classList.remove("error");
  document.getElementById("confirm-password").classList.remove("error");
  document.getElementById("edit-name").value = originalInfo.name;
  document.getElementById("edit-email").value = originalInfo.email;
  document.getElementById("edit-phone").value = originalInfo.phone;
  document.getElementById("edit-password").value = "";
  document.getElementById("confirm-password").value = "";
  document.getElementById("edit-avatar").style.display = "block";

  // Hiển thị nút lưu và hủy
  document.getElementById("edit-button").style.display = "none";
  document.getElementById("edit-buttons").style.display = "block";
}

// Hoàn tác chỉnh sửa
function undoEdit() {
  document.getElementById("name").textContent = originalInfo.name;
  document.getElementById("email").textContent = originalInfo.email;
  document.getElementById("phone").textContent = originalInfo.phone;
  document.getElementById("password").textContent = originalInfo.password;

  // Hiển thị lại thông tin cá nhân
  document.getElementById("personal-info").style.display = "block";
  document.getElementById("edit-form").style.display = "none";
  document.getElementById("avatar-container").style.display = "none";
  document.getElementById("edit-button").style.display = "block";
  document.getElementById("edit-avatar").style.display = "block";
  document.getElementById("edit-buttons").style.display = "none";

  // Xóa thông báo lỗi
  clearErrorMessages();
}

// Lưu thông tin đã chỉnh sửa
function saveInfo() {
  var avatarInput = document.getElementById("edit-avatar-input");
  var avatar = document.getElementById("avatar");
  var editedEmail = document.getElementById("edit-email").value.trim();
  var editedPhone = document.getElementById("edit-phone").value;
  var editedPassword = document.getElementById("edit-password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  var errorMessages = [];
  var errorContainer = document.getElementById("error-messages");
  errorContainer.innerHTML = "";

  // Kiểm tra và hiển thị thông báo lỗi nếu có
  if (!isValidEmail(editedEmail)) {
    document.getElementById("edit-email").classList.add("error");
    errorMessages.push("Vui lòng nhập địa chỉ Email hợp lệ.");
  }

  if (isNaN(editedPhone) || editedPhone.length !== 10) {
    document.getElementById("edit-phone").classList.add("error");
    errorMessages.push("Vui lòng nhập số điện thoại hợp lệ (10 số).");
  }

  if (editedPassword.length > 0 && editedPassword.length < 6) {
    document.getElementById("edit-password").classList.add("error");
    errorMessages.push("Mật khẩu phải có ít nhất 6 ký tự.");
  }

  if (editedPassword !== confirmPassword) {
    document.getElementById("edit-password").classList.add("error");
    document.getElementById("confirm-password").classList.add("error");
    errorMessages.push("Mật khẩu và Nhập Lại Mật Khẩu không khớp.");
  }

  // Hiển thị thông báo lỗi
  if (errorMessages.length > 0) {
    errorMessages.forEach(function (message) {
      var errorMessageElement = document.createElement("p");
      errorMessageElement.innerText = message;
      errorContainer.appendChild(errorMessageElement);
    });

    errorContainer.scrollIntoView({ behavior: "smooth" });
  } else {
    // Lưu thông tin chỉnh sửa vào localStorage
    const updatedUserInfo = {
      username: document.getElementById("edit-username").value,
      name: document.getElementById("edit-name").value,
      email: editedEmail,
      phone: editedPhone,
      password: editedPassword,
      status: document.getElementById("edit-status").value,
    };

    updateUserInfoInLocalStorage(updatedUserInfo);
    location.reload();
  }
}

// Cập nhật thông tin người dùng trong localStorage
function updateUserInfoInLocalStorage(updatedUserInfo) {
  const userList = JSON.parse(localStorage.getItem("userList"));

  // Tìm và cập nhật thông tin người dùng trong danh sách
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].username === updatedUserInfo.username) {
      userList[i] = updatedUserInfo;
      break;
    }
  }

  // Lưu danh sách người dùng đã cập nhật vào local storage
  localStorage.setItem("userList", JSON.stringify(userList));
}

// Kiểm tra tính hợp lệ của email
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
