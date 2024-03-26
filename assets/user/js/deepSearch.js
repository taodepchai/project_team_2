films = JSON.parse(localStorage.getItem("films"));
images = JSON.parse(localStorage.getItem("films"));

function renderFilm(filmsToRender) {
  let filmList = document.getElementById("filmList");
  filmList.innerHTML = "";

  filmsToRender.forEach((film, index) => {
    let filmElement = document.createElement("div");
    filmElement.addEventListener("click", function () {
      window.location.href = `/pages/user/detailsLSearch.html?filmName=${film.name}`;
    });
    filmElement.id = `film-${index}`;
    filmElement.classList.add("film-items");

    let imageElement = document.createElement("img");
    imageElement.src = film.poster;

    let nameElement = document.createElement("h2");
    nameElement.innerHTML = `${film.name}`;

    filmElement.appendChild(imageElement);
    filmElement.appendChild(nameElement);

    filmList.appendChild(filmElement);
  });
}

// ấn nút mũi tên thì cuộn trang phim
function scrollFilms(direction) {
  let container = document.getElementById("filmList");
  let scrollAmount = 400;
  if (direction === -1) {
    container.scrollLeft -= scrollAmount;
  } else {
    container.scrollLeft += scrollAmount;
  }
  //khi đến cuối mà ấn tiếp thì chuyển về đầu tiên
  let maxScrollLeft = container.scrollWidth - container.clientWidth;
  if (direction === 1 && container.scrollLeft >= maxScrollLeft) {
    container.scrollTo({ left: 0, behavior: "smooth" });
  } else if (direction === -1 && container.scrollLeft === 0) {
    container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
  }
}
document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    searchFilms();
  });
function searchFilms() {
  // Lấy giá trị từ khóa tìm kiếm
  let keyword = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  // Lặp qua danh sách sản phẩm và ẩn hoặc hiển thị tùy thuộc vào từ khóa tìm kiếm
  let filmList = document.querySelectorAll(".film-items");
  filmList.forEach((film) => {
    let filmName = film.querySelector("h2").textContent.toLowerCase();
    if (filmName.includes(keyword)) {
      film.style.display = "block";
    } else {
      film.style.display = "none";
    }
  });
}

function filterFilmsByGenre() {
  // Lấy danh sách các ô checkbox thể loại
  let genreCheckboxes = document.querySelectorAll('input[name="genre"]');

  // Tạo một mảng chứa giá trị của các ô checkbox đã được chọn
  let checkedGenres = Array.from(genreCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  // Kiểm tra xem có checkbox nào được chọn không
  if (checkedGenres.length === 0) {
    renderFilm(films);
    return;
  }

  // Lọc danh sách phim dựa trên các ô checkbox đã được chọn
  let filteredFilms = films.filter((films) => {
    // Đếm số lượng thể loại được chọn mà bộ phim chứa
    let count = checkedGenres.reduce((total, genres) => {
      return total + (films.genres && films.genres.includes(genres) ? 1 : 0);
    }, 0);

    // Nếu số lượng thể loại được chọn mà bộ phim chứa bằng với số lượng thể loại được chọn
    // thì bộ phim sẽ được lọc vào danh sách kết quả
    return count === checkedGenres.length;
  });

  // Hiển thị lại danh sách phim đã được lọc
  renderFilm(filteredFilms);
}

// Gắn sự kiện click cho nút search để kích hoạt tìm kiếm
document.querySelector("button").addEventListener("click", searchFilms);

// Gắn sự kiện keyup cho ô nhập liệu để kích hoạt tìm kiếm khi người dùng nhập liệu
document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      searchFilms();
    }
  });

// Gắn sự kiện change cho các ô checkbox để kích hoạt việc lọc phim khi chọn thể loại
let genreCheckboxes = document.querySelectorAll('input[name="genre"]');
genreCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", filterFilmsByGenre);
});

renderFilm(films);

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
    } else {
      swal("Đăng xuất thất bại.");
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
