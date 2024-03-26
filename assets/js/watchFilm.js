let films = JSON.parse(localStorage.getItem("films"));
    // Lấy thông tin từ URL
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let filmName = urlParams.get("film"); 
    let episodeNumber = urlParams.get("ep");
    var data = films.find((film) => film.name === filmName);

    // Lấy currentUser từ localStorage khi người dùng đăng nhập
    document.addEventListener("DOMContentLoaded", function () {
      // Lấy thông tin từ URL
      let queryString = window.location.search;
      let urlParams = new URLSearchParams(queryString);
      let filmName = urlParams.get("film");
      let episodeNumber = urlParams.get("ep");

      // Lấy dữ liệu người dùng hiện tại từ localStorage
      let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

      // Thêm lịch sử xem
      function addToHistory(filmName, episodeNumber) {
        // Kiểm tra xem người dùng đã có lịch sử hay chưa
        if (!currentUser.history) {
          currentUser.history = [];
        }

        // Kiểm tra xem bộ phim và tập phim đã có trong lịch sử hay chưa
        let existingHistoryIndex = currentUser.history.findIndex(
          (entry) => entry.film === filmName && entry.episode === episodeNumber
        );

        if (existingHistoryIndex === -1) {
          // Nếu không tìm thấy, thêm mục mới vào cuối danh sách lịch sử
          currentUser.history.push({ film: filmName, episode: episodeNumber });
          // Cập nhật dữ liệu người dùng trong localStorage
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          let userList = JSON.parse(localStorage.getItem("userList"));
          const userIndex = userList.findIndex(
            (user) => user.username === currentUser.username
          );
          if (userIndex !== -1) {
            userList[userIndex] = currentUser;
            localStorage.setItem("userList", JSON.stringify(userList));
          }
        }
      }

      // Thực hiện hàm thêm vào lịch sử xem
      addToHistory(filmName, episodeNumber);
    });

    // Hiển thị thông tin trên trang
    let filmInfoDiv = document.getElementById("filmInfo");
    filmInfoDiv.innerHTML = `
          <h2>Watch ${filmName}, Episode ${episodeNumber}</h2>
          <p>${data.summary}</p>
      `;

    //render ep
    //render ep
    function renderInfoRight(data, episodeNumber) {
      const background = document.createElement("div");
      background.classList.add("background");

      const streamInfo = document.createElement("div");
      streamInfo.classList.add("stream-info");
      for (let i = 0; i < data.episode; i++) {
        let buttonEp = document.createElement("div");
        buttonEp.classList.add("stream-info");

        // Kiểm tra xem có phải là tập phim hiện tại không để thay đổi nền
        let temp = i + 1;
        if (temp === parseInt(episodeNumber)) {
          buttonEp.classList.add("episode-link");
        }

        buttonEp.innerHTML = `<a  .episode-link href="/pages/watchFilm.html?film=${
          data.name
        }&ep=${i + 1}">
                  <img src="${data.background_img}" alt="">
                  Episode ${i + 1}<i
                    class="fa-solid fa-circle-play fa-2xl"
                    style="color: #00ff40"
                  ></i>
                </a>`;
        background.appendChild(buttonEp);
      }
      background.appendChild(streamInfo);

      const infoRight = document.createElement("div");
      infoRight.classList.add("info-right");

      infoRight.appendChild(background);

      document.body.appendChild(infoRight);
    }
    // Sử dụng hàm renderInfoRight với tham số currentEpisode truyền vào
    renderInfoRight(data, episodeNumber);

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