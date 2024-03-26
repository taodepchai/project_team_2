let genreList = JSON.parse(localStorage.getItem("currentGenres"));
let tbody = document.querySelector("tbody");
let submitBtn = document.querySelector(".modal-button");
let genres = document.querySelector(".genres");
function saveGenres(genres) {
  localStorage.setItem("currentGenres", JSON.stringify(genres));
}
function deleteGenres(index) {
  genreList.splice(index, 1);
  saveGenres(genreList);
  location.reload();
}
function saveInputGenres() {
  genre = genres.value;
  genreList.push(genre);
  saveGenres(genreList);
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < genreList.length; i++) {
    tbody.innerHTML += `
        <tr >
            <td class="dt-type-numeric"><p>${i + 1}</p></td>
            <td class="dt-type-numeric"><p>${genreList[i]}</td>
          
            <td class="status dt-type-numeric">
                <button onclick="deleteGenres(${i})" class="text-dark delBtn"><i
                        class="fa-solid fa-trash-can"></i>
                    Delete</button>
            
        
            </td>
        </tr>`;
  }
  new DataTable("#table");
});
