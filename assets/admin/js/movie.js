let films = JSON.parse(localStorage.getItem("films"));
let tbody = document.querySelector("tbody");

// selector modal input
let movieName = document.querySelector("#movie_name");
let director = document.querySelector("#director");
let yearRelease = document.querySelector("#release_year");
let backgroundImg = document.querySelector("#background");
let actors = document.querySelector("#actors");
let rating = document.querySelector("#rating");
let posterImg = document.querySelector("#poster");
let posterImgName = document.querySelector("#iconImage");
let national = document.querySelector("#national");
let description = document.querySelector("#description");
var genre = [];
// nút submit của modal
let submitBtn = document.querySelector(".modal-button");
function saveFilms(films) {
  localStorage.setItem("films", JSON.stringify(films));
}
function deleteMovie(index) {
  films.splice(index, 1);
  saveFilms(films);
  location.reload();
}
function saveInputMovie(index) {
  var categoryList = document.querySelector("addList");
  var items = document.querySelectorAll(".addList li");
  for (var i = 0; i < items.length; i++) {
    genre.push(items[i].textContent);
  }
  console.log(genre.join(","));
  film = {
    name: `${movieName.value}`,
    img: `${posterImgName.value}`,
    release_year: `${yearRelease.value}`,
    genres: `${genre.join(" ,")}`,
    poster: `${posterImg.value}`,
    runtime: `100m`,
    rating: `${rating.value}`,
    background_img: `${backgroundImg}`,
    director: `${director.value}`,
    cast: `${actors.value.split(",")}`,
    nationality: `${national.value}`,
    summary: `${description.value}`,
    episode: 8,
  };

  if (index < 0) films.push(film);
  else films[index] = film;
  saveFilms(films);
  location.reload();
}
function updateMovie(index) {
  openModal();
  console.log(index);
  movieName.value = films[index].name;
  posterImgName.value = films[index].img;
  yearRelease.value = films[index].release_year;
  genre.value = films[index].genres;
  posterImg.value = films[index].poster;
  rating.value = films[index].rating;
  backgroundImg.value = films[index].background_img;
  director.value = films[index].director;
  actors.value = films[index].cast;
  national.value = films[index].nationality;
  description.value = films[index].summary;
  // deleteMovie(index);
  submitBtn.setAttribute("onclick", `saveInputMovie(${index})`);
}

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < films.length; i++) {
    tbody.innerHTML += `
      <tr >
          <td class="dt-type-numeric"><p>${i + 1}</p></td>
          <td class="dt-type-numeric" ><img src="${
            films[i].img
          }" height="50rem" alt=""></td>
          <td class="dt-type-numeric"><p>${films[i].nationality}</p></td>
          <td class="dt-type-numeric"><p>${films[i].genres}</p></td>
          <td class="dt-type-numeric" > <p style="display: flex; align-items: center; justify-content: flex-end; ">${
            films[i].rating
          } &ensp;<img
              width="30"
              height="30"
              src="https://img.icons8.com/color/48/imdb.png"
              alt="imdb"
            /></p></td>
          <td class="status dt-type-numeric">
              <button  onclick="deleteMovie(${i})" class="text-dark delBtn"><i
                      class="fa-solid fa-trash-can"></i>
                  Delete</button>
              <button onclick="updateMovie(${i})" class="text-dark updateBtn"><i
                      class="fa-solid fa-wrench"></i>
                  Update</button>
      
          </td>
      </tr>`;
  }
  new DataTable("#table");
});

let genres = JSON.parse(localStorage.getItem("currentGenres"));
console.log(genres);
let genresList = document.querySelector("#genresList");
for (let i = 0; i < genres.length; i++) {
  genresList.innerHTML += `
   <option >${genres[i]}</option>
   `;
}
function addGenres() {
  var selectElement = document.getElementById("genresList");
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  var ulElement = document.querySelector(".addList");
  var liElement = document.createElement("li");
  liElement.textContent = selectedOption.textContent;
  liElement.setAttribute("class", "p-2 list-group-item  ");
  ulElement.appendChild(liElement);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = `&ensp; <i class="fa-solid fa-trash-can"></i>`;
  deleteButton.className = "deleteButton";
  deleteButton.onclick = function () {
    ulElement.removeChild(liElement);
  };
  deleteButton.setAttribute("class", "btn p-1 item");
  liElement.appendChild(deleteButton);
  ulElement.appendChild(liElement);
}
