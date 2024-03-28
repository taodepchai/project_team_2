var modal = document.getElementById("myModal");
var modal2=document.getElementById("myModal2")
var btn = document.querySelector("button");
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

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
      let getPremium = document.querySelectorAll(`input[name='getPremium']`);
        getPremium.forEach(premium =>{
          if(premium.checked){
            let signPremium = JSON.parse(localStorage.getItem('premium')) || [];
              var newPremium = {
                user: currentUser,
                premiumPack: premium.value,
              }
              signPremium.push(newPremium);
              localStorage.setItem("premium",JSON.stringify(signPremium));
        }});
      swal("Thanh toán hoàn tất!", {
        icon: "success",
      });
    }
  });
}
