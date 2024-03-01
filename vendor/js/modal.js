var modal = document.getElementById("myModal");
var btn = document.querySelector("button");
var closeModal = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
closeModal.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}


