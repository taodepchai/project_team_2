let userList=JSON.parse(localStorage.getItem("userList"));
let currentUser=JSON.parse(localStorage.getItem("currentUser"));

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let filmName = urlParams.get("film"); 
let episodeNumber = urlParams.get("ep");
let data = films.find((film) => film.name === filmName);


export const $DATA =
 {
  currentUser: {
    image: {
      webp: `${currentUser.avatarUrl}`,
    },
    username: `${currentUser.username}`,
  },
  comments: data.$DATA.comments||[],
};

(function () {
  const flagData = (data) => {
    Object.defineProperty(data, "active", {
      enumerable: false,
      writable: true,
      value: true,
    });
  };

  $DATA.comments.forEach((comment) => {
    if (comment.replies) {
      comment.replies.forEach((reply) => {
        flagData(reply);
      });
    }
    flagData(comment);
  });
})();
export function saveDataComment() {
  let filmsList=JSON.parse(localStorage.getItem("films"));
  for (let i = 0; i < filmsList.length; i++) {
    if (filmsList[i].name===filmName) {
       filmsList[i].$DATA=$DATA;
       break;
    }
  }
  console.log($DATA);

  localStorage.setItem("films",JSON.stringify(filmsList));
}