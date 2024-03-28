// Biến lưu trữ thông tin gốc của người dùng
var originalInfo = {};
var tempUser = JSON.parse(localStorage.getItem("currentUser"));
// Sự kiện DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const userInfo = JSON.parse(localStorage.getItem("userList"));
  const usernameParam = new URLSearchParams(window.location.search).get(
    "username"
  );
console.log(userInfo);
  userInfo.forEach((user) => {
    if (user.username === usernameParam) {
      console.log(user.password);
      // Hiển thị thông tin người dùng từ local storage
      document.getElementById("username").textContent = user.username;
      document.getElementById("name").textContent = user.name;
      document.getElementById("email").textContent = user.email;
      document.getElementById("phone").textContent = user.phone;
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

  // Ẩn ô chỉnh sửa mật khẩu và các trường liên quan đến mật khẩu
  document.getElementById("edit-password").style.display = "none";
  document.getElementById("confirm-password").style.display = "none";
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
  // Lưu thông tin gốc trước khi chỉnh sửa
  originalInfo.name = document.getElementById("name").textContent;
  originalInfo.email = document.getElementById("email").textContent;
  originalInfo.phone = document.getElementById("phone").textContent;

  // Hiển thị form chỉnh sửa
  document.getElementById("personal-info").style.display = "none";
  document.getElementById("edit-form").style.display = "block";
  document.getElementById("change-password-form").style.display = "none";
  document.getElementById("changePassword").style.display = "none";
  document.getElementById("avatar-container").style.display = "block";
  document.getElementById("edit-name").classList.remove("error");
  document.getElementById("edit-email").classList.remove("error");
  document.getElementById("edit-phone").classList.remove("error");
  document.getElementById("edit-name").value = originalInfo.name;
  document.getElementById("edit-email").value = originalInfo.email;
  document.getElementById("edit-phone").value = originalInfo.phone;
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
// Lưu thông tin đã chỉnh sửa
function saveInfo() {
  swal({
    title: "Bạn có chắc chắn muốn thay đổi thông tin của bạn thôi?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      var avatarInput = document.getElementById("edit-avatar-input");
      var avatar = document.getElementById("avatar");
      var editedEmail = document.getElementById("edit-email").value.trim();
      var editedPhone = document.getElementById("edit-phone").value;
      var errorMessages = [];
      var currentPassword = tempUser.password;
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
    
      // Hiển thị thông báo lỗi
      if (errorMessages.length > 0) {
        errorMessages.forEach(function (message) {
          var errorMessageElement = document.createElement("p");
          errorMessageElement.innerText = message;
          errorContainer.appendChild(errorMessageElement);
        });
    
        errorContainer.scrollIntoView({ behavior: "smooth" });
      } else {
        // Lấy thông tin người dùng từ localStorage
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const userList = JSON.parse(localStorage.getItem("userList"));
    
        // Cập nhật thông tin chỉnh sửa vào thông tin người dùng hiện tại
        currentUser.name = document.getElementById("edit-name").value;
        currentUser.email = editedEmail;
        currentUser.phone = editedPhone;
        currentUser.password = currentPassword;
    
        // Cập nhật thông tin người dùng trong danh sách người dùng
        userList.forEach(function (user, index) {
          if (user.username === currentUser.username) {
            userList[index] = currentUser;
          }
        });
    
        // Lưu lại danh sách người dùng đã được cập nhật vào localStorage
        localStorage.setItem("userList", JSON.stringify(userList));
    
        // Hiển thị lại thông tin người dùng
        document.getElementById("name").textContent = currentUser.name;
        document.getElementById("email").textContent = currentUser.email;
        document.getElementById("phone").textContent = currentUser.phone;
    
        // Hiển thị thông báo thành công
        var successMessageElement = document.createElement("p");
        successMessageElement.innerText = "Thông tin đã được cập nhật thành công.";
        errorContainer.appendChild(successMessageElement);
        errorContainer.scrollIntoView({ behavior: "smooth" });
        location.reload();
      }
    }
  });
  
}

// Cập nhật thông tin người dùng trong localStorage
function updateUserInfoInLocalStorage(updatedUserInfo) {
  const userList = JSON.parse(localStorage.getItem("userList"));

  // Tìm và cập nhập thông tin người dùng trong danh sách
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

function changePasswordForm() {
  var changePasswordForm = document.getElementById("change-password-form");
  changePasswordForm.style.display = "block";
}

function verifyOldPassword() {
  var oldPassword = document.getElementById("old-password").value;
  var userPassword = tempUser.password; // Mật khẩu hiện tại của người dùng

  if (oldPassword !== userPassword) {
    var errorMessageElement = document.createElement("p");
    errorMessageElement.innerText = "Mật khẩu cũ không chính xác.";
    var errorContainer = document.getElementById("error-messages");
    errorContainer.innerHTML = "";
    errorContainer.appendChild(errorMessageElement);
    errorContainer.scrollIntoView({ behavior: "smooth" });
    return false;
  }

  return true;
}

function changePassword() {
  
  document.getElementById("personal-info").style.display = "none";
  document.getElementById("edit-form").style.display = "none";
  document.getElementById("changePassword").style.display = "none";
  document.getElementById("change-password-form").style.display = "block";
}

document
  .getElementById("change-password-button")
  .addEventListener("click", changePassword);

// Hàm lưu mật khẩu mới
function savePassword() {
  swal({
            title: "Bạn có chắc chắn muốn đổi mật khẩu?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                  var oldPassword = document.getElementById("old-password").value;
                  var newPassword = document.getElementById("new-password").value;
                  var confirmPassword = document.getElementById("confirm-new-password").value;
                  var errorContainer = document.getElementById("error-messages");
                  errorContainer.innerHTML = "";
                
                  // Kiểm tra xem mật khẩu mới và xác nhận mật khẩu mới có khớp nhau không
                  if (newPassword !== confirmPassword) {
                    var errorMessageElement = document.createElement("p");
                    errorMessageElement.innerText =
                      "Mật khẩu mới và Xác nhận mật khẩu mới không khớp.";
                    errorContainer.appendChild(errorMessageElement);
                    errorContainer.scrollIntoView({ behavior: "smooth" });
                    return;
                  }
                
                  // Kiểm tra xem mật khẩu hiện tại có đúng không
                  var userPassword = tempUser.password; // Mật khẩu hiện tại của người dùng
                  if (oldPassword !== userPassword) {
                    var errorMessageElement = document.createElement("p");
                    errorMessageElement.innerText = "Mật khẩu cũ không chính xác.";
                    errorContainer.appendChild(errorMessageElement);
                    errorContainer.scrollIntoView({ behavior: "smooth" });
                    return;
                  }
                
                  // Lưu mật khẩu mới vào thông tin người dùng và cập nhật vào localStorage
                  var updatedUserInfo = {
                    username: document.getElementById("username").textContent,
                    name: document.getElementById("name").textContent,
                    email: document.getElementById("email").textContent,
                    phone: document.getElementById("phone").textContent,
                    status: document.getElementById("status").textContent,
                    avatarUrl: document.getElementById("avatar").src,
                    password: newPassword, // Lưu mật khẩu mới
                  };
                
                  updateUserInfoInLocalStorage(updatedUserInfo);
                  location.reload();
                }
            });
}
