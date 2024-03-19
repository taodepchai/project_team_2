const userId = {
    name: null,
    identity: null,
    image: null,
    mes: null,
    date: null,
}
const userComment = document.querySelector(".userComment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");
userComment.addEventListener("input", e => {
    if (!userComment.value) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");
    } else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled");
    }
})


function addPost() {
    if (!userComment.value) return;
    userId.name = userName.value;
    if (userId.name === "Anonymous") {
        userId.identity = true;
        userId.image = "usser.png"
    }
    userId.mes = userComment.value;
    userId.date = new Date().toLocaleString();
    let publish =
        `<div class="parents">
            <img src = "${userId.image}">
            <div>
                <h2>${userId.name}</h2>
                <p>${userId.mes}</p>
                <div class = "engagements"><i class="fa-solid fa-thumbs-up"></i><i class="fa-solid fa-share-nodes"></i></div>
                <span class="date">${userId.date}</span>
            </div>
        </div>`;
    comments.innerHTML += publish;
    userComment.value = "";
}

publishBtn.addEventListener("click",addPost);
