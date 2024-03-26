// Lấy dữ liệu lịch sử từ local storage
let filmList = JSON.parse(localStorage.getItem("films"));
let userList = JSON.parse(localStorage.getItem("userList"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
document.addEventListener("DOMContentLoaded", function () {
  let urlParams = new URLSearchParams(window.location.search);
  let username = urlParams.get("username");
  let currentUser = userList.find((user) => user.username === username);
  let data = currentUser.history;
  let tempUser = JSON.parse(localStorage.getItem("currentUser"));
  // Phần hiển thị lịch sử
  let feedSection = document.querySelector(".feed__section");

  // Xóa nội dung hiện tại trong phần hiển thị lịch sử
  //feedSection.innerHTML = "";

  // Duyệt qua mỗi mục trong lịch sử và tạo HTML tương ứng
  data.forEach((item) => {
    // Tìm kiếm phim trong filmList
    let film = filmList.find((film) => film.name === item.film);
    if (film) {
      //Tạo phần tử feed__item
      let feedItem = document.createElement("div");
      feedItem.classList.add("feed__item");

      // Tạo phần tử feed__item__thumbnail
      let thumbnailDiv = document.createElement("div");
      thumbnailDiv.classList.add("feed__item__thumbnail");

      // Tạo phần tử feed__item__info
      let infoDiv = document.createElement("div");
      infoDiv.classList.add("feed__item__info");

      //ảnh nền
      let thumbnailImg = document.createElement("img");
      thumbnailImg.src = film.background_img;
      thumbnailDiv.appendChild(thumbnailImg);

      // Tạo phần tử feed__item__info__avatar
      //avt
      let avatarDiv = document.createElement("div");
      avatarDiv.classList.add("feed__item__info__avatar");
      let infoImg = document.createElement("img");
      infoImg.src = currentUser.avatarUrl;
      avatarDiv.appendChild(infoImg);
      // Tạo phần tử chứa thông tin về phim và lượt xem
      let infoContent = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.textContent = `${film.name} ep ${item.episode}`;

      // Tạo nút xoá
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Xoá khỏi lịch sử xem";
      deleteButton.onclick = function () {
        // Xoá mục lịch sử
        swal({
          title: "Bạn có chắc chắn muốn xoá phim lịch sử xem?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal("Phim đã được xoá khỏi lịch sử xem", {
              icon: "success",
            });
            let index = currentUser.history.findIndex(
              (historyItem) =>
                historyItem.film === item.film &&
                historyItem.episode === item.episode
            );
            currentUser.history.splice(index, 1);
            tempUser.history.splice(index, 1);
            localStorage.setItem("currentUser", JSON.stringify(tempUser));
            localStorage.setItem("userList", JSON.stringify(userList));
            // Xóa phần tử hiển thị
            feedItem.remove();
          }
        });
      };

      infoContent.appendChild(h3);
      infoContent.appendChild(deleteButton);

      // Gắn các phần tử con vào feed__item__info
      infoDiv.appendChild(avatarDiv);
      infoDiv.appendChild(infoContent);

      // Gắn các phần tử con vào feed__item
      feedItem.appendChild(thumbnailDiv);
      feedItem.appendChild(infoDiv);

      // Gắn feed__item vào feed__section
      feedSection.appendChild(feedItem);
      // document.getElementById("feed__item").addEventListener("click", function(){
      //window.location.href=`/pages/watchFilm.html?film=${film.name}&ep=${item.episode}`;
      //});
    }
  });
});

function searchHistory() {
  let input = document.querySelector(".input-search").value.toLowerCase();
  let historyItems = document.querySelectorAll(".feed__item");

  historyItems.forEach((item) => {
    let filmName = item.querySelector("h3").textContent.toLowerCase();
    if (filmName.includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
document.getElementById("searchInput").addEventListener("keyup", searchHistory);
// Xóa toàn bộ lịch sử
document
  .getElementById("deleteAllButton")
  .addEventListener("click", function () {
    swal({
      title: "Bạn có chắc chắn muốn xoá toàn bộ lịch sử?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("toàn bộ lịch sử đã được xoá", {
          icon: "success",
        });
        let urlParams = new URLSearchParams(window.location.search);
        let username = urlParams.get("username");
        currentUser.history = [];
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        let currentUserIndex = userList.findIndex(
          (user) => user.username === username
        );
        if (currentUserIndex !== -1) {
          userList[currentUserIndex] = currentUser;
          localStorage.setItem("userList", JSON.stringify(userList));
          document.querySelector(".feed__section").innerHTML = "";
        }
      }
    });
  });
