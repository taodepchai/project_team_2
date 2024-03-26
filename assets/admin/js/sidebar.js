let sidebar = document.querySelector("#sidebar");

window.onload = function () {
  sidebar.innerHTML = `
    <div
    class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
    <a href="/"
        class="d-flex align-items-center align-middle px-0 text-white ">
        <span> Menu</span>
    </a>
    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li class="nav-item">
            <a  href="http://127.0.0.1:5501/pages/admin/national.html" class="nav-link align-middle px-0 text-white">
                <i class="fa-solid fa-globe"></i> <span> National</span>
            </a>
        </li>
        <li>
            <a href="http://127.0.0.1:5501/pages/admin/dashboad.html" class="nav-link px-0 align-middle text-white">
                <i class="fa-solid fa-chart-line"></i><span> Dashboard</span>  </a>
         
        </li>
        <li>
            <a href="http://127.0.0.1:5501/pages/admin/movie.html"" class="nav-link px-0 align-middle text-white">
                <i class="fa-solid fa-film"></i> <span> Movie</span></a>
        </li>
        <li>
            <a href="http://127.0.0.1:5501/pages/admin/user.html"" class="nav-link px-0 align-middle text-white">
                <i class="fa-solid fa-user"></i> <span> User</span> </a>
        </li>
        <li>
            <a href="http://127.0.0.1:5501/pages/admin/genres.html"" class="nav-link px-0 align-middle text-white">
              <i class="fa-solid fa-layer-group"></i>  <span> Genres</span> </a>
        </li>
        <li>
            <a href="http://127.0.0.1:5501/pages/user/login.html"" class="nav-link px-0 align-middle text-white">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> <span> Sign out</span> </a>
        </li>
        
    </ul>
    <hr>
    </div>`;
};

function openPages(position) {
  location.assign(`http://127.0.0.1:5501${position}.html`);
}