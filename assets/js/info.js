document.addEventListener("DOMContentLoaded", function () {
  let urlParams = new URLSearchParams(window.location.search);
  let filmId = parseInt(urlParams.get("filmId"));
  let films = JSON.parse(localStorage.getItem("films"));
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
        ${data.genres.map((genre) => `<button>${genre}</button>`).join("")}
      </div>
    `;

    const cast = document.createElement("div");
    cast.classList.add("cast");
    cast.innerHTML = `
      <h2>CAST</h2>
      <div class="cast-element">
        ${data.cast.map((actor) => `<button>${actor}</button>`).join("")}
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
        }" data-film-id="${filmId}">
          <img src="/assets/img/${
            filmExistsInLibrary ? "remove" : "new"
          }-folder.png" alt="" /> &ensp; ${
      filmExistsInLibrary ? "Remove from Library" : "Add to Library"
    }
        </button>
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

  document.addEventListener("click", function (event) {
    if (
      event.target &&
      event.target.classList.contains("add-to-library-button")
    ) {
      handleAddToLibrary(event.target);
    }

    if (
      event.target &&
      event.target.classList.contains("remove-from-library-button")
    ) {
      handleRemoveFromLibrary(event.target);
    }
  });

  function handleAddToLibrary(button) {
    let filmId = parseInt(button.getAttribute("data-film-id"));
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // Kiểm tra nếu người dùng chưa đăng nhập
    if (!currentUser) {
      alert("Vui lòng đăng nhập để sử dụng chức năng này.");
      return;
    }

    let username = currentUser.username;
    let userList = JSON.parse(localStorage.getItem("userList"));

    // Tìm người dùng trong danh sách
    let user = userList[username];
    console.log(user);
    // Kiểm tra xem người dùng đã tồn tại trong danh sách chưa
    if (!user) {
      alert("Người dùng không tồn tại.");
      return;
    }

    let library = user.library || [];
    let filmExists = library.some((film) => film.name === films[filmId].name);

    // Kiểm tra xem phim đã tồn tại trong thư viện của người dùng chưa
    if (filmExists) {
      alert("Phim đã tồn tại trong thư viện của bạn.");
      return;
    }

    // Thêm phim vào thư viện của người dùng
    library.push(films[filmId]);

    // Cập nhật thông tin thư viện và lưu vào local storage
    user.library = library;
    userList[username] = user;
    localStorage.setItem("userList", JSON.stringify(userList));

    // Cập nhật lại trạng thái của nút thành "Remove from Library"
    button.innerHTML = `<img src="/assets/img/remove-folder.png" alt="" /> &ensp; Remove from Library`;
    button.classList.remove("add-to-library-button");
    button.classList.add("remove-from-library-button");
  }

  function handleRemoveFromLibrary(button) {
    let filmId = parseInt(button.getAttribute("data-film-id"));
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // Kiểm tra nếu người dùng chưa đăng nhập
    if (!currentUser) {
      alert("Vui lòng đăng nhập để sử dụng chức năng này.");
      return;
    }

    let username = currentUser.username;
    let userList = JSON.parse(localStorage.getItem("userList"));

    // Tìm người dùng trong danh sách
    let user = userList[username];

    // Kiểm tra xem người dùng đã tồn tại trong danh sách chưa
    if (!user) {
      alert("Người dùng không tồn tại.");
      return;
    }

    let library = user.library || [];

    // Xóa phim khỏi thư viện của người dùng
    library = library.filter((film) => film.name !== films[filmId].name);

    // Cập nhật thông tin thư viện và lưu vào local storage
    user.library = library;
    userList[username] = user;
    localStorage.setItem(`userList`, JSON.stringify(userList));

    // Cập nhật lại trạng thái của nút thành "Add to Library"
    button.innerHTML = `<img src="/assets/img/new-folder.png" alt="" /> &ensp; Add to Library`;
    button.classList.remove("remove-from-library-button");
    button.classList.add("add-to-library-button");
  }
});
