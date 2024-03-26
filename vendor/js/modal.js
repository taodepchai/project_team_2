var modal = document.getElementById("myModal");

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

