var filmId = "";
let films = JSON.parse(localStorage.getItem("films"));
document.addEventListener("DOMContentLoaded", function () {
  let urlParams = new URLSearchParams(window.location.search);

  filmName = urlParams.get("filmName");

  let data = films.find((film) => film.name === filmName);

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
    actionButtons.innerHTML = `
          <div class="action-button-element">
            <button class="add-to-library-button" data-film-id="${filmId}><img src="/vendor/images/new-folder.png" alt="" /> &ensp; Add to Library</button>
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

  // Thêm sự kiện click vào nút "Add to Library"
  addToLibraryButton.addEventListener("click", function () {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser == "") {
      alert("Vui lòng đăng nhập để sử dụng chức năng này.");
      return;
    }
    // Lấy filmId từ thuộc tính data-film-id của nút "Add to Library"
    let filmId = parseInt(this.getAttribute("data-film-id"));
    let userList = JSON.parse(localStorage.getItem("userList"));
    let library = currentUser.library || [];
    for (let i = 0; i < library.length; i++) {
      if (library[i].name === films[filmId].name) {
        alert("Phim đã tồn tại trong thư viện của bạn.");
        return;
      }
    }
    let updatedLibrary = [...currentUser.library, films[filmId]];
    currentUser.library = updatedLibrary;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    const userIndex = userList.findIndex(
      (user) => user.username === currentUser.username
    );
    if (userIndex !== -1) {
      userList[userIndex] = currentUser;
      localStorage.setItem("userList", JSON.stringify(userList));
    }
    alert("Phim đã được thêm vào thư viện của bạn.");
  });
});
