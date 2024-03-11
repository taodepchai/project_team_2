var originalInfo = {}; // Move this outside of the DOMContentLoaded event listener

document.addEventListener("DOMContentLoaded", function () {
  // Truy cập thông tin từ local storage
  const userInfo = JSON.parse(localStorage.getItem("userList"));
  const usernameParam = new URLSearchParams(window.location.search).get(
    "username"
  );
  userInfo.forEach((user) => {
    if (user.username === usernameParam) {
      // Hiển thị thông tin từ local storage lên trang
      document.getElementById("username").textContent = user.username;
      document.getElementById("name").textContent = user.name;
      document.getElementById("email").textContent = user.email;
      document.getElementById("phone").textContent = user.phone;
      document.getElementById("password").textContent = user.password;
      document.getElementById("status").textContent = user.status;

      // Hiển thị avatar từ localStorage
      const avatarURL = localStorage.getItem(`avatarURL_${user.username}`);
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

function clearErrorMessages() {
  //xóa thông báo lỗi
  var errorInputs = document.querySelectorAll(".error");
  errorInputs.forEach(function (input) {
    input.classList.remove("error");
  });

  var errorContainer = document.getElementById("error-messages");
  errorContainer.innerHTML = "";
}

function editAvatar() {
  //thay avatar
  var editAvatarInput = document.getElementById("edit-avatar-input");
  editAvatarInput.click();
}

function handleAvatarChange() {
  //hoàn tất thay đổi avatar
  var editAvatarInput = document.getElementById("edit-avatar-input");
  var avatar = document.getElementById("avatar");

  var file = editAvatarInput.files[0];
  if (file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      avatar.src = e.target.result;

      // Lưu đường dẫn của ảnh vào localStorage với key phụ thuộc vào tên tài khoản
      const userInfo = JSON.parse(localStorage.getItem("userList"));
      const usernameParam = new URLSearchParams(window.location.search).get(
        "username"
      );
      const currentUser = userInfo.find(
        (user) => user.username === usernameParam
      );
      if (currentUser) {
        localStorage.setItem(
          `avatarURL_${currentUser.username}`,
          e.target.result
        );
      }
    };

    reader.readAsDataURL(file);
  }
}

function editInfo() {
  //sửa thông tin
  document.getElementById("edit-username").value =
    document.getElementById("username").textContent;

  originalInfo.name = document.getElementById("name").textContent;
  originalInfo.email = document.getElementById("email").textContent;
  originalInfo.phone = document.getElementById("phone").textContent;
  originalInfo.password = document.getElementById("password").textContent;

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

  document.getElementById("edit-button").style.display = "none";
  document.getElementById("edit-buttons").style.display = "block";
}

function undoEdit() {
  //hoàn tác thay đổi
  document.getElementById("name").textContent = originalInfo.name;
  document.getElementById("email").textContent = originalInfo.email;
  document.getElementById("phone").textContent = originalInfo.phone;
  document.getElementById("password").textContent = originalInfo.password;

  document.getElementById("personal-info").style.display = "block";
  document.getElementById("edit-form").style.display = "none";
  document.getElementById("avatar-container").style.display = "none";
  document.getElementById("edit-button").style.display = "block";
  document.getElementById("edit-avatar").style.display = "block";
  document.getElementById("edit-buttons").style.display = "none";
  clearErrorMessages();
}

function saveInfo() {
  //Lưu thông tin đã thay đổi
  var avatarInput = document.getElementById("edit-avatar-input");
  var avatar = document.getElementById("avatar");
  var editedEmail = document.getElementById("edit-email").value.trim();
  var editedPhone = document.getElementById("edit-phone").value;
  var editedPassword = document.getElementById("edit-password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  var errorMessages = [];
  var errorContainer = document.getElementById("error-messages");
  errorContainer.innerHTML = "";

  if (!isValidEmail(editedEmail)) {
    console.log(isValidEmail(editedEmail));
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

  if (errorMessages.length > 0) {
    errorMessages.forEach(function (message) {
      var errorMessageElement = document.createElement("p");
      errorMessageElement.innerText = message;
      errorContainer.appendChild(errorMessageElement);
    });

    errorContainer.scrollIntoView({ behavior: "smooth" });
  } else {
    document.getElementById("personal-info").style.display = "block";
    document.getElementById("edit-form").style.display = "none";
    document.getElementById("avatar-container").style.display = "none";

    document.getElementById("edit-buttons").style.display = "none";
    document.getElementById("edit-button").style.display = "block";
    document.getElementById("avatar-container").style.display = "block";
  }

  if (errorMessages.length === 0) {
    // Lưu thông tin chỉnh sửa vào originalInfo hoặc tạo một đối tượng mới
    const updatedUserInfo = {
      username: document.getElementById("edit-username").value,
      name: document.getElementById("edit-name").value,
      email: document.getElementById("edit-email").value,
      phone: document.getElementById("edit-phone").value,
      password: document.getElementById("edit-password").value,
      status: document.getElementById("edit-status").value,
    };

    updateUserInfoInLocalStorage(updatedUserInfo);
    location.reload();
  }
}

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

function isValidEmail(email) {
  //nhận diện email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
