let national=JSON.parse(localStorage.getItem("currentNational"));
let tbody = document.querySelector("tbody");
let submitBtn = document.querySelector(".modal-button");
let nationalName=document.querySelector(".national_name");
let linkImg=document.querySelector(".link_img");
function saveNational(national) {
    localStorage.setItem("currentNational",JSON.stringify(national));
}
function deleteNational(index) {
  national.splice(index, 1);
  saveNational(national);
  location.reload();
}
function saveInputNational() {
  nation = {
    name: `${nationalName.value}`,
    img:`${linkImg.value}`
  };

 national.push(nation);
  saveNational(national);
  location.reload();
  
}



document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < national.length; i++) {
      tbody.innerHTML += `
        <tr >
            <td class="dt-type-numeric"><p>${i + 1}</p></td>
            <td class="dt-type-numeric"><p>${national[i].name} <img src=${national[i].img} alt=""width="200px" height="130px" style="object-fit: cover;"></p></td>
          
            <td class="status dt-type-numeric">
                <button onclick="deleteNational(${i})" class="text-dark"><i
                        class="fa-solid fa-trash-can"></i>
                    Delete</button>
            
        
            </td>
        </tr>`;
    }
    new DataTable("#table");
  });