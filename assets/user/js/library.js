document.addEventListener("DOMContentLoaded", function () {
  // Lấy danh sách phim từ local storage
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let library = currentUser.library || [];
  let filmList = document.querySelector(".film-list ul");
  filmList.innerHTML = "";
  // Duyệt qua danh sách phim và tạo các phần tử hiển thị
  library.forEach(function (film, index) {
    // Tạo phần tử cho từng phim
    let listItem = document.createElement("li");
    listItem.classList.add("film-item");

    let posterImg = document.createElement("img");
    posterImg.src = film.poster;
    posterImg.alt = "Film poster";
    posterImg.classList.add("film-poster");

    let filmInfo = document.createElement("div");
    filmInfo.classList.add("film-info");

    let filmTitle = document.createElement("h3");
    filmTitle.classList.add("film-title");
    filmTitle.textContent = film.name;

    let filmDescription = document.createElement("p");
    filmDescription.classList.add("film-description");
    filmDescription.textContent = film.summary;

    // Tạo nút "Remove from Favorites"
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("film-favorite-btn");
    removeBtn.textContent = "Remove from Favorites";

    // Sự kiện click để xóa phim khỏi thư viện
    removeBtn.addEventListener("click", function () {
      event.stopPropagation();
      swal({
        title: "Bạn có chắc chắn muốn xoá phim khỏi danh sách yêu thích?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Phim đã được xoá khỏi danh sách yêu thích", {
            icon: "success",
          });
          library.splice(index, 1);
          currentUser.library = library;
          listItem.remove();
          // Lưu lại vào trong local của tất cả đối tượng liên quan đến library
          localStorage.setItem(`currentUser`, JSON.stringify(currentUser));
          userList.forEach((element) => {
            if (element.username == currentUser.username) {
              element = currentUser;
            }
          });
          localStorage.setItem("userList", JSON.stringify(userList));
        }
      });
    });

    listItem.addEventListener("click", function () {
      let films = JSON.parse(localStorage.getItem("films"));
      for (let i = 0; i < films.length; i++) {
        if (film.name == films[i].name) {
          window.location.href = `/pages/info.html?filmId=${i}`;
        }
      }
    });

    filmInfo.appendChild(filmTitle);
    filmInfo.appendChild(filmDescription);
    filmInfo.appendChild(removeBtn);

    listItem.appendChild(posterImg);
    listItem.appendChild(filmInfo);

    filmList.appendChild(listItem);
  });
});
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || "";
function profile() {
  let username = currentUser.username;
  console.log(username);
  window.location.href = `/pages/user/userinfo.html?username=${username}`;
}
function login() {
  window.location.href = "/pages/user/login.html";
}
function logout() {
  swal({
    title: "có phải bạn muốn đăng xuất ra khỏi trang web!",
    //text: "có phải bạn muốn đăng xuất ra khỏi trang web!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      localStorage.removeItem("currentUser");
      login();
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  let signinBtn = document.getElementById("signinBtn");
  let usernameBtn = document.getElementById("usernameBtn");
  let usernameLink = document.getElementById("usernameLink");
  let usernameDrop = document.getElementById("dropdownUsername");
  if (currentUser) {
    signinBtn.style.display = "none";
    usernameBtn.style.display = "block";
    let username = currentUser.username;
    avtURL = currentUser.avatarUrl;
    usernameLink.innerHTML = `<img src="${avtURL}" style="width: 50px; height :100%; border-radius: 50%;">`;
    usernameDrop.innerHTML = `${username}`;
  } else {
    signinBtn.style.display = "block";
    usernameBtn.style.display = "none";
  }
});
