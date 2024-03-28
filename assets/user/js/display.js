let films = JSON.parse(localStorage.getItem("films"));
let images = JSON.parse(localStorage.getItem("films"));
function renderFilm() {
  let filmList = document.getElementById("filmList");
  filmList.innerHTML = "";

  films.forEach((film, index) => {
    let filmElement = document.createElement("div");
    filmElement.addEventListener("click", function () {
      window.location.href = `info.html?filmId=${index}`;
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

function renderImg() {
  let imgList = document.getElementById("slideshow");

  images.forEach((image, index) => {
    let imgContainer = document.createElement("div");

    imgContainer.classList.add("slideshow-item");
    if (index === 0) {
      imgContainer.classList.add("active");
    }

    imgContainer.addEventListener("click", function () {
      window.location.href = `info.html?filmId=${index}`;
    });

    let imageElement = document.createElement("img");
    imageElement.src = image.background_img;

    let nameElement = document.createElement("img");
    nameElement.src = image.img;

    let contentElement = document.createElement("div");
    contentElement.classList.add("slideshow-content");
    contentElement.appendChild(nameElement);

    imgContainer.appendChild(imageElement);
    imgContainer.appendChild(contentElement);

    imgList.appendChild(imgContainer);
  });
}
//tìm kiếm sản phẩm
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

// Gắn sự kiện keyup cho ô nhập liệu để tìm kiếm khi người dùng nhập liệu
document.getElementById("searchInput").addEventListener("keyup", searchFilms);

renderImg();
renderFilm();

// Slideshow
let slides = document.querySelectorAll(".slideshow-item");
let currentIndex = 0;

// Tự động chuyển đổi giữa các hình ảnh sau mỗi 3 giây
setInterval(() => {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}, 3000);

let currentUser = JSON.parse(localStorage.getItem("currentUser")) || "";
let username = currentUser.username;
function history() {
  window.location.href = `/pages/user/history.html?username=${username}`;
}
function profile() {
  console.log(username);
  window.location.href = `/pages/user/userinfo.html?username=${username}`;
}
function login() {
  window.location.href = "/pages/user/login.html";
}
function logout() {
  swal({
    title: "có phải bạn muốn đăng xuất ra khỏi trang web!",
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
    let fullname = currentUser.name;
    avtURL = currentUser.avatarUrl;
    usernameLink.innerHTML = `<img src="${avtURL}" style="width: 50px; height :100%; border-radius: 50%;">`;
    usernameDrop.innerHTML = `${fullname}`;
  } else {
    signinBtn.style.display = "block";
    usernameBtn.style.display = "none";
  }
});


let checkAdmin = document.getElementById("admin");
if(currentUser.status === "Admin"){
  checkAdmin.style.display ="block";
} else {
  checkAdmin.style.display="none";
}

let premium = document.getElementById("premium");
if(currentUser.status ==='Premium'){
  premium.style.display = 'none';
} else{
  premium.style.display= 'block';
}


let renderUpcoming = document.querySelector(".upcoming  .movies-list");



for (let i = 0; i < 4; i++) {
  renderUpcoming.innerHTML += `
  <li>
  <div class="movie-card">
    <a href="/pages/info.html?filmId=${i}">          
      <figure class="card-banner">
        <img src="${films[i].poster}" alt="The Northman movie poster">
      </figure>
    </a> 

    <div class="title-wrapper">
      <a href="">
        <h3 class="card-title">${films[i].name}</h3>
      </a>

      <time datetime="">${films[i].release_year}</time>
    </div>

    <div class="card-meta">
      <div class="badge badge-outline">HD</div>

      <div class="duration">
        <ion-icon name="time-outline"></ion-icon>

        <time datetime="PT137M">${films[i].runtime}</time>
      </div>

      <div class="rating">
        <ion-icon name="star"></ion-icon>

        <data>${films[i].rating}</data>
      </div>
    </div>

  </div>
</li>
  `;
}

let renderTopRated = document.querySelector(".top-rated  .movies-list");

for (let i = 4; i < 12; i++) {
  renderTopRated.innerHTML += `
  <li>
  <div class="movie-card">
    <a href="/pages/info.html?filmId=${i}">          
      <figure class="card-banner">
        <img src="${films[i].poster}" alt="The Northman movie poster">
      </figure>
    </a> 

    <div class="title-wrapper">
      <a href="">
        <h3 class="card-title">${films[i].name}</h3>
      </a>

      <time datetime="">${films[i].release_year}</time>
    </div>

    <div class="card-meta">
      <div class="badge badge-outline">HD</div>

      <div class="duration">
        <ion-icon name="time-outline"></ion-icon>

        <time datetime="PT137M">${films[i].runtime}</time>
      </div>

      <div class="rating">
        <ion-icon name="star"></ion-icon>

        <data>${films[i].rating}</data>
      </div>
    </div>

  </div>
</li>
  `;
}

let renderTvSeries = document.querySelector(".tv-series  .movies-list");

for (let i = 12; i < 16; i++) {
  renderTvSeries.innerHTML += `
  <li>
  <div class="movie-card">
    <a href="/pages/info.html?filmId=${i}">          
      <figure class="card-banner">
        <img src="${films[i].poster}" alt="The Northman movie poster">
      </figure>
    </a> 

    <div class="title-wrapper">
      <a href="">
        <h3 class="card-title">${films[i].name}</h3>
      </a>

      <time datetime="">${films[i].release_year}</time>
    </div>

    <div class="card-meta">
      <div class="badge badge-outline">HD</div>

      <div class="duration">
        <ion-icon name="time-outline"></ion-icon>

        <time datetime="PT137M">${films[i].runtime}</time>
      </div>

      <div class="rating">
        <ion-icon name="star"></ion-icon>

        <data>${films[i].rating}</data>
      </div>
    </div>

  </div>
</li>
  `;
}
