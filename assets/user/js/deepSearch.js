films = JSON.parse(localStorage.getItem("films"));
images = JSON.parse(localStorage.getItem("films"));
let year = [];

function renderFilms(films) {
  let filmList = document.getElementById("filmList");
  filmList.innerHTML = "";

  films.forEach((film, index) => {
    year.push(film.release_year);
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

document.getElementById("searchInput").addEventListener("keyup", function () {
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

let currentGenres = JSON.parse(localStorage.getItem("currentGenres"));
document.addEventListener("DOMContentLoaded", function () {
  renderGenres();
  // Lắng nghe sự kiện change của các checkbox thể loại
  function renderGenres() {
    let bodyLeft = document.getElementById("body_left");
    bodyLeft.innerHTML = ""; // Xóa nội dung cũ trước khi render

    if (currentGenres) {
      // Tạo thẻ details
      let genresDetails = document.createElement("details");
      genresDetails.setAttribute("class", "genres");
      let summary = document.createElement("summary");
      summary.textContent = "Genres"; // Tiêu đề của details
      genresDetails.appendChild(summary); // Thêm summary vào details
      let genresDiv = document.createElement("div"); // Tạo một div để chứa các thẻ label
      genresDetails.appendChild(genresDiv); // Thêm div vào details

      // Tạo các thẻ label cho các thể loại và thêm vào div genresDiv
      currentGenres.forEach((genre) => {
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.name = "genre";
        input.value = genre;
        label.appendChild(input);
        label.appendChild(document.createTextNode(genre));
        genresDiv.appendChild(label);
        genresDiv.appendChild(document.createElement("br"));
      });

      bodyLeft.appendChild(genresDetails); // Thêm details vào bodyLeft
    }
  }

  let genreCheckboxes = document.querySelectorAll(".body_left .genres input");
  genreCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      filterFilmsByGenre(currentGenres);
    });
  });
});

let currentNational = JSON.parse(localStorage.getItem("currentNational"));
document.addEventListener("DOMContentLoaded", function () {
  renderNational();
  // Lắng nghe sự kiện change của các checkbox thể loại
  function renderNational() {
    let bodyLeft = document.getElementById("body_left");
    // Xóa nội dung cũ trước khi render

    if (currentNational) {
      // Tạo thẻ details
      let nationalDetails = document.createElement("details");
      nationalDetails.setAttribute("class", "national");
      let summary = document.createElement("summary");
      summary.textContent = "National";
      nationalDetails.appendChild(summary);
      let nationalDiv = document.createElement("div");
      nationalDetails.appendChild(nationalDiv);

      currentNational.forEach((national) => {
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "national";
        input.value = national.name;
        label.appendChild(input);
        label.appendChild(document.createTextNode(national.name));
        nationalDiv.appendChild(label);
        nationalDiv.appendChild(document.createElement("br"));
      });

      bodyLeft.appendChild(nationalDetails); // Thêm details vào bodyLeft
    }
  }

  let nationalRadio = document.querySelectorAll(".body_left .national input");
  nationalRadio.forEach((radio) => {
    radio.addEventListener("change", function () {
      filterFilmsByNational(currentNational);
    });
  });
});

function filterFilmsByGenre(currentGenres) {
  // Lấy danh sách các ô checkbox thể loại
  let genreCheckboxes = document.querySelectorAll(".body_left .genres input");

  // Tạo một mảng chứa giá trị của các ô checkbox đã được chọn
  let checkedGenres = [];
  genreCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedGenres.push(checkbox.value);
    }
  });
  // Kiểm tra xem có checkbox nào được chọn không
  if (checkedGenres.length === 0) {
    renderFilms(films);
  }

  // Lọc danh sách phim dựa trên các ô checkbox đã được chọn
  let filteredFilms = films.filter((film) => {
    let filmGenres = film.genres || [];
    // Kiểm tra xem mỗi bộ phim có chứa tất cả các thể loại đã chọn không
    return checkedGenres.every((genre) => filmGenres.includes(genre));
  });
  // Hiển thị lại danh sách phim đã được lọc

  renderFilms(filteredFilms);
}

function filterFilmsByNational(currentNational) {
  // Lấy danh sách các ô radio national
  let nationalRadio = document.querySelectorAll(
    ".national input[type='radio']"
  );

  // Tạo một mảng chứa giá trị của các ô radio đã được chọn
  let radioNational = [];
  nationalRadio.forEach((radio) => {
    if (radio.checked) {
      radioNational.push(radio.value);
      // if (radio.value === "All"){
      //   renderFilms(films);
      //   return;
      // }
    }
  });
  if (radioNational[0] === "All") {
    renderFilms(films);
    return;
  }
  // Kiểm tra xem có radio nào được chọn không
  if (radioNational.length === 0) {
    renderFilms(films);
    return; // Thêm return để kết thúc hàm nếu không có radio nào được chọn
  }

  // Lọc danh sách phim dựa trên các ô radio đã được chọn
  let filteredFilms = films.filter((film) => {
    let filmNational = film.nationality || [];
    // Kiểm tra xem national của bộ phim có trong mảng radioNational hay không
    return radioNational.includes(filmNational);
  });

  // Hiển thị lại danh sách phim đã được lọc
  renderFilms(filteredFilms);
}

// Gắn sự kiện change cho các ô radio để kích hoạt việc lọc phim khi chọn thể loại


renderFilms(films);

let yearList = [...new Set(year)];

yearList.unshift("All");

document.addEventListener("DOMContentLoaded", function () {
  renderyear();
  // Lắng nghe sự kiện change của các checkbox thể loại
  function renderyear() {
    let bodyLeft = document.getElementById("body_left");
    // Xóa nội dung cũ trước khi render

    if (yearList) {
      // Tạo thẻ details
      let yearDetails = document.createElement("details");
      yearDetails.setAttribute("class", "year");
      let summary = document.createElement("summary");
      summary.textContent = "Year";
      yearDetails.appendChild(summary);
      let yearDiv = document.createElement("div");
      yearDetails.appendChild(yearDiv);

      yearList.forEach((year) => {
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "year";
        input.value = year;
        label.appendChild(input);
        label.appendChild(document.createTextNode(year));
        yearDiv.appendChild(label);
        yearDiv.appendChild(document.createElement("br"));
      });

      bodyLeft.appendChild(yearDetails); // Thêm details vào bodyLeft
    }
  }


function filterFilmsByYear(yearList) {
  // Lấy danh sách các ô radio year
  let yearRadio = document.querySelectorAll(
    ".year input[type='radio']"
  );

  // Tạo một mảng chứa giá trị của các ô radio đã được chọn
  let radioYear = [];
  yearRadio.forEach((radio) => {
    if (radio.checked) {
      radioYear.push(radio.value);
      // if (radio.value === "All"){
      //   renderFilms(films);
      //   return;
      // }
    }
  });
  if (radioYear[0] === "All") {
    renderFilms(films);
    return;
  }
  // Kiểm tra xem có radio nào được chọn không
  if (radioYear.length === 0) {
    renderFilms(films);
    return; // Thêm return để kết thúc hàm nếu không có radio nào được chọn
  }
console.log(radioYear);
  // Lọc danh sách phim dựa trên các ô radio đã được chọn
  let filteredFilms = films.filter((film) => {
    let filmYear = film.release_year|| [];
    console.log(filmYear);
    // Kiểm tra xem year của bộ phim có trong mảng radioyear hay không
    return radioYear[0].includes(filmYear);
  });
  console.log(filteredFilms);
  // Hiển thị lại danh sách phim đã được lọc
  renderFilms(filteredFilms);
}
let yearRadio = document.querySelectorAll(".body_left .year input");
yearRadio.forEach((radio) => {
  radio.addEventListener("change", function () {
    filterFilmsByYear(yearList);
  });
});
});
