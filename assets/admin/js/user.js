let userList = JSON.parse(localStorage.getItem("userList"));
let tbody = document.querySelector("tbody");

function lockAcc(index) {
  openAlertModal();
  console.log(1);
}
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < userList.length; i++) {
    tbody.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${userList[i].name}</td>
          <td>${userList[i].username}</td>
          <td>${userList[i].phone}</td>
          <td>${userList[i].email}</td>
          <td>${userList[i].date}</td>
          <td class="status">
              <a href="javascript:void(0)" onclick=""><i class="fa-solid fa-eye"></i></a>
              <a href="javascript:void(0)" onclick="lockAcc(${i})"><i class="fa-solid fa-lock-open"></i></a>
              <a href="javascript:void(0)" onclick=""><i class="fa-solid fa-crown"></i></a>
          </td>
        </tr> 
      `;
  }
  new DataTable("#table");
});
// Sự kiện mở(khóa acc); 
function lockAcc(index) {
  Swal.fire({
    title: "Tài khoản này sẽ bị khóa?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      let statusAcc = document.querySelectorAll(".status");
      statusAcc[index].innerHTML = `
          <td class="status">
              <a href="javascript:void(0)" onclick=""><i class="fa-solid fa-eye"></i></a>
              <a href="javascript:void(0)" onclick="openAcc(${index})"><i class="fa-solid fa-lock"></i></a>
              <a href="javascript:void(0)" onclick=""><i class="fa-solid fa-crown"></i></a>
          </td>
        `;
    }
  });
}
function openAcc(index) {
  Swal.fire({
    title: "Tài khoản này sẽ được mở khóa?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      let statusAcc = document.querySelectorAll(".status");
      statusAcc[index].innerHTML = `
          <td class="status">
              <a href="javascript:void(0)" onclick=""><i class="fa-solid fa-eye"></i></a>
              <a href="javascript:void(0)" onclick="lockAcc(${index})"><i class="fa-solid fa-lock-open"></i></a>
              <a href="javascript:void(0)" onclick=""><i class="fa-solid fa-crown"></i></a>
          </td>
        `;
    }
  });
}
