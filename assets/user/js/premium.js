var modal = document.getElementById("myModal");
var modal2=document.getElementById("myModal2")
var btn = document.querySelector("button");

btn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function openModal(index) {
  if (index==1) { 
    modal.style.display = "block";
  }
  else modal2.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
  modal2.style.display = "none";
}
//---------------nuts save----------
function modalButtonSave() {
    swal({
    title: "Bạn chắc chứ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Đăng ký hoàn tất!", {
        icon: "success",
      });
    }
  });
}
// ------------nút buy-----------------
function modalButtonBuy() {
    swal({
    title: "Bạn chắc chứ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Thanh toán hoàn tất!", {
        icon: "success",
      });
    }
  });
}
