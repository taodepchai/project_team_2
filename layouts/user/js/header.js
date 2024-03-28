let nav = document.querySelector("nav");
nav.innerHTML = `   
<section class="header-main pc">
<div class="header-left">

    <ul class="navbar-list">
        <!-- Category -->
        <li class="menu-button" onclick="showSidebar()">
            <i class="fa-solid fa-list"></i>
        </li>
        <li>
            <a href="/pages/display.html"> <img src="/vendor/images/logo.png" alt
                width="200px" /></a>
           
        </li>
        <li class="hideOnMobile">
            <a href="/pages/user/deepSearch.html"
                class="navbar-link">Search</a>
        </li>
        <li class="hideOnMobile">
            <a href="/pages/user/library.html"
                class="navbar-link">Library</a>
        </li>

        <li class="hideOnMobile">
            <a href="javascript:void(0)" onclick="history() "
                class="navbar-link">History</a>
        </li>
    </ul>
</div>
<div class="header-right">
    <ul>

        <li class="header-right-search hideOnMobile">
            <input type="text" name id="searchInput"
                placeholder="Search" style="width: 300px;" />
            <button><i
                    class="fa-solid fa-magnifying-glass"></i></button>
        </li>
        <!-- ngôn ngữ -->
        <li class="hideOnMobile">
            <a> Language <i
                    class="fa-solid fa-caret-down"></i></a>
            <div class="header-right-languages">
                <ul>
                    <li>
                        <a href>
                            <div
                                style="display: flex; gap: 5px;">
                                <img
                                    src="/vendor/images/vietNam.png"
                                    alt width="30px">
                                <p
                                    class="vietnamese">vietnamese</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href>
                            <div
                                style="display: flex; gap: 5px;">
                                <img
                                    src="/vendor/images/tiengAnh.png"
                                    alt width="30px">
                                <p class="english">English</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </li>

        <li class="header-right-sign-in"
            id="signinBtn">
            <button onclick="login()">
                Sign in
            </button>
        </li>

        <li>
            <div class="header-right-sign-in" id="usernameBtn"
                style="display:none;">
                <div class="avatarDropdown"
                    onclick="toggleDropdown()"
                    id="usernameLink"></div>
            </div>
            <div class="header-right-sign-in-content"><br>
                <a href id="dropdownUsername"></a><br>
                <button onclick="profile()"><i
                        class="fa-solid fa-user"></i> &ensp;
                    Profile</button><br>
                <a href="javascript:void(0)"
                    onclick="logout()"><i
                        class="fa-solid fa-right-from-bracket"></i>
                    &ensp; Log
                    out</a><br>
                <a href="/pages/user/premium.html"><i
                        class="fa-solid fa-crown"></i> Get
                    premium</a>
            </div>
        </li>

    </ul>
</div>
</section>
<section class="header-main mobile">
<div class="header-left">
    <ul class="navbar-list">
        <li onclick="hideSidebar()"><i
                class="fa-solid fa-x"></i></li>
        <li class="header-right-search">
            <input type="text" name id="searchInput"
                placeholder="Search" style="width: 300px;" />
            <button><i
                    class="fa-solid fa-magnifying-glass"></i></button>
        </li>
        <li>
            <a href="/pages/user/deepSearch.html"
                class="navbar-link">Search</a>
        </li>
        <li>
            <a href="/pages/user/library.html"
                class="navbar-link">Library</a>
        </li>

        <li>
            <a href="javascript:void(0)" onclick="history() "
                class="navbar-link">History</a>
        </li>
    </ul>
</div>
<div class="header-right">
    <ul>

        <!-- ngôn ngữ -->
        <li>
            <a href> Language <i
                    class="fa-solid fa-caret-down"></i></a>
            <div class="header-right-languages">
                <ul>
                    <li>
                        <a href>
                            <div
                                style="display: flex; gap: 5px;">
                                <img
                                    src="/vendor/images/vietNam.png"
                                    alt width="30px">
                                <p
                                    class="vietnamese">vietnamese</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href>
                            <div
                                style="display: flex; gap: 5px;">
                                <img
                                    src="/vendor/images/tiengAnh.png"
                                    alt width="30px">
                                <p class="english">English</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </li>

        <li>
            <div class="header-right-sign-in" id="usernameBtn"
                style="display:none;">
                <div class="avatarDropdown"
                    onclick="toggleDropdown()"
                    id="usernameLink"></div>
            </div>
            <div class="header-right-sign-in-content"><br>
                <a href id="dropdownUsername"></a><br>
                <button onclick="profile()"><i
                        class="fa-solid fa-user"></i> &ensp;
                    Profile</button><br>
                <a href="javascript:void(0)"
                    onclick="logout()"><i
                        class="fa-solid fa-right-from-bracket"></i>
                    &ensp; Log
                    out</a><br>
                <a href="/pages/user/premium.html"><i
                        class="fa-solid fa-crown"></i> Get
                    premium</a>
            </div>
        </li>

    </ul>
</div>
</section>
`;
function history() {
  window.location.href = `/pages/user/history.html?username=${username}`;
}
function profile() {
  console.log(username);
  window.location.href = `/pages/user/userinfo.html?username=${username}`;
}
function login() {
  window.location.href = "/pages/user/login.html";
}
function logout() {
  swal({
    title: "có phải bạn muốn đăng xuất ra khỏi trang web!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      localStorage.removeItem("currentUser");
      login();
    }
  });
}
function showSidebar() {
  const sidebar = document.querySelector(".mobile");
  sidebar.style.display = "flex";
  console.log(1);
}
function hideSidebar() {
  const sidebar = document.querySelector(".mobile");
  sidebar.style.display = "none";
}
