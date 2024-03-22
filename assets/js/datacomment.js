export const $DATA = {
  currentUser: {
    image: {
    },
    username: "Dũng",
  },
  comments: [

    {
      id: 2,
      content:
        "Phim như cc, nói chung là xóa web,Phim như cc, nói chung là xóa web, Phim như cc, nói chung là xóa web, cái gì quan trọng nói 3 lần",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
        },
        username: "Linhtranne",
      },
      replies: [
        
      ],
    },
  ],
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
