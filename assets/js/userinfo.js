function editAvatar() { // Hàm sửa avatar
    var avatarInput = document.getElementById('avatar-input');
    avatarInput.click();
  }
  
  function handleAvatarChange() { //Hàm lấy Avatar từ file máy tính
    var avatarInput = document.getElementById('avatar-input');
    var avatar = document.getElementById('avatar');
  
    var file = avatarInput.files[0];
    if (file) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        avatar.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  function editInfo() { // Hàm sửa info của user
    document.getElementById('personal-info').style.display = 'none';
    document.getElementById('edit-form').style.display = 'block';
    document.getElementById('avatar-container').style.display = 'block';
    document.getElementById('edit-name').classList.remove('error');
    document.getElementById('edit-email').classList.remove('error');
    document.getElementById('edit-phone').classList.remove('error');
    document.getElementById('edit-name').value = document.getElementById('name').innerText;
    document.getElementById('edit-email').value = document.getElementById('email').innerText;
    document.getElementById('edit-phone').value = document.getElementById('phone').innerText;

    document.getElementById('edit-avatar').style.display = 'none';
    
    document.getElementById('edit-button').style.display = 'none';
    document.getElementById('edit-buttons').style.display = 'block';
  }
  
  function undoEdit() { //Hàm hoàn tác chỉnh sửa
    document.getElementById('personal-info').style.display = 'block';
    document.getElementById('edit-form').style.display = 'none';
    document.getElementById('avatar-container').style.display = 'none';
    document.getElementById('edit-button').style.display = 'block';
  }
  
  function saveInfo() { //Hàm lưu thay đổi
    var avatarInput = document.getElementById('avatar-input');
    var avatar = document.getElementById('avatar');
  
    if (avatarInput.files.length > 0) {
      var file = avatarInput.files[0];
      var reader = new FileReader();
  
      reader.onload = function(e) {
        avatar.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    }
    document.getElementById('personal-info').style.display = 'block';
    document.getElementById('edit-form').style.display = 'none';
    document.getElementById('avatar-container').style.display = 'none';
    
    document.getElementById('edit-buttons').style.display = 'none';
    
    document.getElementById('edit-button').style.display = 'block';
    document.getElementById('avatar-container').style.display = 'block';
  }