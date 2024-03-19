let userList=JSON.parse(localStorage.getItem("userList"));
let tbody = document.querySelector("tbody");
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < userList.length; i++) {
      tbody.innerHTML += `
        <tr>
        <td>${i+1}</td>
        <td>${userList[i].name}</td>
        <td>${userList[i].username}</td>
        <td>${userList[i].phone}</td>
        <td>${userList[i].email}</td>
        <td>${userList[i].date}</td>
        <td class="status">
                <a href="#">
                    <span class="material-symbols-outlined">
                        visibility
                    </span>
                </a>
                <a href="#"><span
                        class="material-symbols-outlined">
                        lock_open
                    </span></a>
                <a href="#"><img
                        src="https://img.icons8.com/?size=512&id=12566&format=png"
                        height="24px" width="24px" alt></a>
            </td>
        </tr> 
      `;
    }
    new DataTable("#table");
  });