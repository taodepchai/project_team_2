var filmId = 0;
let films = JSON.parse(localStorage.getItem("films"));
document.addEventListener("DOMContentLoaded", function () {
  let urlParams = new URLSearchParams(window.location.search);

  filmId = parseInt(urlParams.get("filmId"));

  let data = films[filmId];

  document.body.style.backgroundImage = `url('${data.background_img}')`;
  function renderFilmData(data) {
    const filmTitle = document.createElement("div");
    filmTitle.classList.add("film-title");
    const filmTitleImg = document.createElement("img");
    filmTitleImg.setAttribute("src", data.img);
    filmTitleImg.setAttribute("width", "300px");
    filmTitleImg.setAttribute("height", "145px");
    filmTitle.appendChild(filmTitleImg);

    const releaseInfo = document.createElement("div");
    releaseInfo.classList.add("release-info");
    releaseInfo.innerHTML = `
                <p>${data.runtime}</p>
                <p>${data.release_year}</p>
                <p style="display: flex; align-items: center">
                  ${data.rating}
                  <img width="48px" height="48px" src="https://img.icons8.com/color/48/imdb.png" alt="imdb" />
                </p>
              `;

    const genres = document.createElement("div");
    genres.classList.add("genres");
    genres.innerHTML = `
                <h2>GENRES</h2>
                <div class="genres-element">
                  ${data.genres
                    .map((genre) => `<button>${genre}</button>`)
                    .join("")}
                </div>
              `;

    const cast = document.createElement("div");
    cast.classList.add("cast");
    cast.innerHTML = `
                <h2>CAST</h2>
                <div class="cast-element">
                  ${data.cast
                    .map((actor) => `<button>${actor}</button>`)
                    .join("")}
                </div>
              `;

    const directors = document.createElement("div");
    directors.classList.add("directors");
    directors.innerHTML = `
                <h2>DIRECTORS</h2>
                <div class="directors-element">
                  <button>${data.director}</button>
                </div>
              `;

    const summary = document.createElement("div");
    summary.classList.add("summary");
    summary.innerHTML = `
                <h2>SUMMARY</h2>
                <div class="summary-element">
                  <p>${data.summary}</p>
                </div>
              `;

    const actionButtons = document.createElement("div");
    actionButtons.classList.add("action-button");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const library = currentUser.library || [];
    const filmExistsInLibrary = library.some((film) => film.name === data.name);

    actionButtons.innerHTML = `
                <div class="action-button-element">
                  <button class="${
                    filmExistsInLibrary
                      ? "remove-from-library-button"
                      : "add-to-library-button"
                  }" data-film-id="${filmId}"><img src="/assets/img/${
      filmExistsInLibrary ? "remove" : "new"
    }-folder.png" alt="" /> &ensp; ${
      filmExistsInLibrary ? "Remove from Library" : "Add to Library"
    }</button>
                  <button><i class="fa-solid fa-clapperboard" style="color: #ffffff"></i> Trailer</button>
                  <button><i class="fa-solid fa-share-nodes" style="color: #ffffff"></i></button>
                </div>
              `;

    const infoLeft = document.createElement("div");
    infoLeft.classList.add("info-left");
    infoLeft.appendChild(filmTitle);
    infoLeft.appendChild(releaseInfo);
    infoLeft.appendChild(genres);
    infoLeft.appendChild(cast);
    infoLeft.appendChild(directors);
    infoLeft.appendChild(summary);
    infoLeft.appendChild(actionButtons);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    infoContainer.appendChild(infoLeft);

    document.body.appendChild(infoContainer);
  }

  renderFilmData(data);

  function renderInfoRight(data) {
    const background = document.createElement("div");
    background.classList.add("background");

    const streamInfo = document.createElement("div");
    streamInfo.classList.add("stream-info");
    for (let i = 0; i < data.episode; i++) {
      let buttonEp = document.createElement("div");
      buttonEp.classList.add("stream-info");
      buttonEp.innerHTML = `<button>
                <img src="${data.background_img}" alt="">
                Episode ${i + 1}<i
                  class="fa-solid fa-circle-play fa-2xl"
                  style="color: #00ff40"
                ></i>
              </button>`;
      background.appendChild(buttonEp);
    }
    background.appendChild(streamInfo);

    const infoRight = document.createElement("div");
    infoRight.classList.add("info-right");

    infoRight.appendChild(background);

    document.body.appendChild(infoRight);
  }
  renderInfoRight(data);
  console.table(films);
  let addToLibraryButton = document.querySelector(".add-to-library-button");

  addToLibraryButton.addEventListener("click", function () {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser == "") {
      alert("Vui lòng đăng nhập để sử dụng chức năng này.");
      return;
    }
    let filmId = parseInt(this.getAttribute("data-film-id"));
    let userList = JSON.parse(localStorage.getItem("userList"));
    let library = currentUser.library || [];
    let filmExists = false;

    // Kiểm tra xem phim đã tồn tại trong thư viện chưa
    for (let i = 0; i < library.length; i++) {
      if (library[i].name === films[filmId].name) {
        filmExists = true;
        break;
      }
    }

    if (filmExists) {
      // Nếu phim đã tồn tại trong thư viện, loại bỏ sự kiện click và thay đổi nút thành "Remove from Library"
      this.removeEventListener("click", arguments.callee);
      this.innerHTML = `<img src="/assets/img/remove-folder.png" alt="" /> &ensp; Remove from Library`;
      this.classList.remove("add-to-library-button");
      this.classList.add("remove-from-library-button");
      alert("Phim đã tồn tại trong thư viện của bạn.");
      return;
    }

    // Nếu phim chưa tồn tại trong thư viện, thêm phim vào thư viện và cập nhật local storage
    library.push(films[filmId]);
    currentUser.library = library;
    localStorage.setItem(`currentUser`, JSON.stringify(currentUser));
    userList.forEach((element) => {
      if (element.username == currentUser.username) {
        element = currentUser;
      }
    });
    localStorage.setItem("userList", JSON.stringify(userList));

    // Thay đổi nút thành "Remove from Library" ngay sau khi thêm phim vào thư viện
    this.innerHTML = `<img src="/assets/img/remove-folder.png" alt="" /> &ensp; Remove from Library`;
    this.classList.remove("add-to-library-button");
    this.classList.add("remove-from-library-button");
    alert("Phim đã được thêm vào thư viện của bạn.");
  });

  // Xử lý sự kiện click cho nút "Remove from Library"
  document.addEventListener("click", function (event) {
    if (
      event.target &&
      event.target.classList.contains("remove-from-library-button")
    ) {
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      let filmId = parseInt(event.target.getAttribute("data-film-id"));
      let library = currentUser.library || [];

      // Xóa phim khỏi thư viện của người dùng
      library = library.filter((film) => film.name !== films[filmId].name);
      currentUser.library = library;

      localStorage.setItem(`currentUser`, JSON.stringify(currentUser));

      // Xóa thành công, cập nhật giao diện và hiển thị thông báo
      event.target.closest(
        ".add-to-library-button"
      ).innerHTML = `<img src="/assets/img/new-folder.png" alt="" /> &ensp; Add to Library`;
      event.target
        .closest(".add-to-library-button")
        .classList.remove("remove-from-library-button");
      event.target
        .closest(".add-to-library-button")
        .classList.add("add-to-library-button");
      alert("Phim đã được xóa khỏi thư viện của bạn.");
    }
  });
});
