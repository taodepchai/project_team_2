document.addEventListener("DOMContentLoaded", function () {
      let signinBtn = document.getElementById("signinBtn");
      let usernameBtn = document.getElementById("usernameBtn");
      let usernameLink = document.getElementById("usernameLink");
      let usernameDrop = document.getElementById("dropdownUsername");
      if (currentUser) {
        signinBtn.style.display = "none";
        usernameBtn.style.display = "block";
        let username = currentUser.username;
        avtURL = currentUser.avatarUrl;
        usernameLink.innerHTML = `<img src="${avtURL}" style="width: 50px; height :100%; border-radius: 50%;">`;
        usernameDrop.innerHTML = `${username}`  

      } else {
        signinBtn.style.display = "block";
        usernameBtn.style.display = "none";
      }
    });