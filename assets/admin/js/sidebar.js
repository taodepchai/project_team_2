
let sidebar=document.querySelector("#sidebar");
console.log(sidebar);

window.onload=function () {
    
    sidebar.innerHTML=`
    <div
    class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
    <a href="/"
        class="d-flex align-items-center align-middle px-0 text-white ">
        <span> Menu</span>
    </a>
    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li class="nav-item">
            <a onclick() href="#" class="nav-link align-middle px-0 text-white">
                <i class="fa-solid fa-globe"></i> <span> National</span>
            </a>
        </li>
        <li>
            <a href="#" class="nav-link px-0 align-middle text-white">
                <i class="fa-solid fa-chart-line"></i><span> Dashboad</span>  </a>
         
        </li>
        <li>
            <a href="#" class="nav-link px-0 align-middle text-white">
                <i class="fa-solid fa-film"></i> <span> Movie</span></a>
        </li>
        <li>
            <a href="#" class="nav-link px-0 align-middle text-white">
                <i class="fa-solid fa-user"></i> <span> User</span> </a>
        </li>
        <li>
            <a href="#" class="nav-link px-0 align-middle text-white">
              <i class="fa-solid fa-layer-group"></i>  <span> Category</span> </a>
        </li>
        
    </ul>
    <hr>
    </div>`;
}