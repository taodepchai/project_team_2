import { createCommentBox, createUserComment } from "./tempcomment.js";
import { $DATA } from "./datacomment.js";
import { CurrentUser } from "./comment.js";

const time = [];
setInterval(() => {
  if (time.length) {
    time.forEach(([func, userId]) => func());
  }
}, 0);

function getElementByTagName(element) {
  const elements = [...document.querySelectorAll(`${element}`)];
  return elements.filter(
    (element) => element.getAttribute("data-id") == this.id
  )[0];
}

export function getElementByClassName(classname) {
  const elements = [...document.querySelectorAll(`.${classname}`)];
  return elements.filter(
    (element) => element.getAttribute("data-id") == this.id
  )[0];
}

export function getElementById(id) {
  const elements = [...document.querySelectorAll(`#${id}`)];
  return elements.filter(
    (element) => element.getAttribute("data-id") == this.id
  )[0];
}

export function replyingTo() {
  const temp = createCommentBox.call(this);
  const li = getElementByTagName.call(this, "li");

  !this.open &&
    Object.defineProperty(this, "open", {
      enumerable: false,
      writable: true,
      value: false,
    });

  if (!this.open) {
    li.append(temp);
    showRefName.call(this);
    this.open = true;

    return;
  }

  li.lastElementChild.remove();
  this.open = false;
}

function getReferenceName() {
  const username = this.user.username;
  return username;
}

function showRefName() {
  const refName = getReferenceName.call(this);

  const textArea = getElementByTagName.call(this, "textArea");
  textArea.value = `@${refName}, `;
}

export function upVote() {
  const span = getElementByTagName.call(this, "span");
  const score = this.score;
  const newScore = score + 1;
  this.score = newScore;
  span.textContent = `${this.score}`;
}

export function downVote() {
  const span = getElementByTagName.call(this, "span");
  const score = this.score;
  const newScore = score > 0 ? score - 1 : score;
  this.score = newScore;
  span.textContent = `${this.score}`;
}

function getCommentContent() {
  const textArea = getElementByTagName.call(this, "textArea");
  const span = document.createElement("span");
  let content = textArea.value.trim();
  const pureText = content.replace(/@(?:[a-z]+),/, "").trim();

  return pureText;
}

function updateTime() {
  const span = getElementById.call(this, "time--js");
  span.textContent = this.createdAt;
}

export function reply() {
  const user = new CurrentUser(
    $DATA.currentUser.username,
    $DATA.currentUser.image
  );
  user.replyingTo = this.user.username;
  user.content = getCommentContent.call(this);
  if (this.replies) {
    this.replies.push(user);
  } else {
    $DATA.comments.forEach((comment) => {
      if (comment.replies.length) {
        comment.replies.forEach((reply) => {
          if (reply.id === this.id) comment.replies.push(user);
        });
      }
    });
  }

  const li = getElementByTagName.call(this, "li");

  let ul;
  this.replies ? (ul = li.children[1].firstElementChild) : (ul = li.parentNode);

  const temp = createUserComment.call(user);
  ul.append(temp);
  li.lastElementChild.remove();

  time.push([updateTime.bind(user), user.id]);
  showTime.call(user);

  this.open = false;
}

export function send() {
  const ul = document.querySelector(".comment__container");
  const textArea = document.querySelector(".section__commentbox textarea");
  const user = new CurrentUser(
    $DATA.currentUser.username,
    $DATA.currentUser.image
  );

  user.content = textArea.value.trim();
  const temp = createUserComment.call(user);
  ul.append(temp);

  time.push([updateTime.bind(user), user.id]);
  showTime.call(user);

  textArea.value = "";

  $DATA.comments.push(user);
}

function deleteTemplate() {
  const li = getElementByTagName.call(this, "li");
  const parent = li.parentNode;
  parent.removeChild(li);
}
function deleteTimeRunner(id) {
  time.forEach(([func, userId], index) => {
    if (userId == id) time.splice(index, 1);
  });
}

export function deleteComment() {
  this.active = false;
  Object.defineProperty(this, "status", {
    enumerable: false,
    value: "Deleted",
  });
  deleteTemplate.call(this);
  deleteTimeRunner(this.id);
  console.log(this);
}


function editTemplate() {
  const textArea = getElementByClassName.call(this, "input__edit");
  const div = getElementByClassName.call(this, "comment__body");
  const content = textArea.value.trim();
  const p = div.firstElementChild;

  const pureText = content.replace(/@(?:[a-z]+),/i, "").trim();

  p.innerHTML = this.replyingTo
    ? `<span>@${this.replyingTo}</span>, ${pureText}`
    : `${pureText}`;
  this.content = pureText;

  removeEditBox.call(this);
}

export function removeEditBox() {
  const div = getElementByClassName.call(this, "comment__body");
  const textArea = getElementByClassName.call(this, "input__edit");
  const divUpdate = textArea.nextElementSibling;

  div.removeChild(textArea);
  div.removeChild(divUpdate);
  div.setAttribute("aria-toggle", "false");
}
function editTime() {
  const date = new Date();
  const day = String(date).match(/(?:\w+)\s(?:\d+)\s(?:\d+)/i)[0];
  const time = String(date).match(/(\w+):(\w+)/i)[0];

  const mergeDate = `${day} - ${time}`;

  return mergeDate;
}

function refreshTimer() {
  if (time.length) {
    time.forEach(([func, id]) => {
      if (id !== this.id) {
        time.push([updateTime.bind(this), this.id]);
      }
    });
  } else {
    time.push([updateTime.bind(this), this.id]);
  }

  if (this.timeID) clearInterval(this.timeID);
  showTime.call(this);
}

export function edit() {
  if (!this.edited) {
    Object.defineProperty(this, "edited", {
      enumerable: false,
      writable: true,
      value: {
        edited: true,
        time: editTime(),
      },
    });
  }

  this.edited.time = editTime();
  editTemplate.call(this);
  refreshTimer.call(this);
}

export class Time {
  constructor(user, time = null) {
    this.seconds = time ? time.seconds : null || 0;
    this.minute = time ? time.minute : null || 0;
    this.hour = time ? time.hour : null || 0;
    this.day = time ? time.day : null || 0;
    this.week = time ? time.week : null || 0;
    this.month = time ? time.month : null || 0;
    this.year = time ? time.year : null || 0;

    function updateTime() {
      if (this.seconds > 59) {
        this.seconds = 0;
        this.minute = this.minute + 1;
      }
      if (this.minute > 59) {
        this.minute = 0;
        this.hour = this.hour + 1;
      }
      if (this.hour > 23) {
        this.hour = 0;
        this.day = this.day + 1;
      }
      if (this.day > 6) {
        this.day = 0;
        this.week = this.week + 1;
      }
      (() => {
        const months =
          "Jan_Feb_March_April_May_June_July_Aug_Sep_Oct_Nov_Dec".split("_");
        const currMonth = months[new Date().getMonth()];

        const resetWeek = () => {
          this.week = 0;
          this.month = this.month + 1;
        };

        if (currMonth === months[1]) {
          if (this.week > 2) resetWeek();
        } else {
          if (this.week > 3) resetWeek();
        }
      })();

      if (this.month > 11) {
        this.month = 0;
        this.year = this.year + 1;
      }

      (() => {
        if (
          !this.minute &&
          !this.hour &&
          !this.day &&
          !this.week &&
          !this.month &&
          !this.year
        ) {
          user.createdAt = "Just now";
        }
        if (
          this.minute &&
          !this.hour &&
          !this.day &&
          !this.week &&
          !this.month &&
          !this.year
        ) {
          user.createdAt =
            this.minute > 1 ? `${this.minute} minutes ago` : `a minute ago`;
        }
        if (this.hour && !this.day && !this.week && !this.month && !this.year) {
          user.createdAt =
            this.hour > 1 ? `${this.hour} hours ago` : `an hour ago`;
        }
        if (this.day && !this.week && !this.month && !this.year) {
          user.createdAt = this.day > 1 ? `${this.day} days ago` : `a day ago`;
        }
        if (this.week && !this.month && !this.year) {
          user.createdAt =
            this.week > 1 ? `${this.week} weeks ago` : `a week ago`;
        }
        if (this.month && !this.year) {
          user.createdAt =
            this.month > 1 ? `${this.month} months ago` : `a month ago`;
        }
        if (this.year) {
          user.createdAt =
            this.year > 1 ? `${this.year} years ago` : `a year ago`;
        }
      })();

      this.seconds = this.seconds + 1;
    }

    const timeId = setInterval(updateTime.bind(this), 1000);

    if (!user.timeID) {
      Object.defineProperty(user, "timeID", {
        enumerable: false,
        writable: true,
        value: timeId,
      });
    } else {
      user.timeID = timeId;
    }
  }
}

function showTime() {
  new Time(this);
}
