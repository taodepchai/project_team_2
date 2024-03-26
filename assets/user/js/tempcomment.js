"use strict";

import { $DATA } from "./datacomment.js";
import {
  replyingTo,
  getElementByClassName,
  edit,
  reply,
  removeEditBox,
  deleteComment,
  send,
} from "./eventcomment.js";
import { isCurrentUser } from "./comment.js";

const model = document.querySelector(".model");
const btnCancel = document.querySelector(".card__btn_cancel");
const btnDelete = document.querySelector(".card__btn_delete");
const btnSend = document.querySelector(".section__btn .btn");

btnSend.addEventListener("click", send);

btnCancel.addEventListener("click", closeModel);

btnDelete.addEventListener("click", function () {

  deleteComment.call(user);
  closeModel();
});

let user = null;

function openModel() {
  model.classList.remove("hidden");
  user = this;
}

function closeModel() {
  model.classList.add("hidden");
}

export function createNestedComment() {
  const div = document.createElement("div");
  const ul = document.createElement("ul");

  div.setAttribute("class", "comment__nested");
  div.append(ul);

  return div;
}

export function createCommentBox() {
  const divComment = document.createElement("div");
  const div = document.createElement("div");
  const divAvater = document.createElement("div");
  const img = document.createElement("img");
  const divCommentBox = document.createElement("div");
  const textArea = document.createElement("textarea");
  const divSecBtn = document.createElement("div");
  const button = document.createElement("button");

  divComment.setAttribute("class", "section__comment");
  divAvater.setAttribute("class", "section__avater");
  img.setAttribute("src", $DATA.currentUser.image.webp);
  img.setAttribute("alt", `profile of ${$DATA.currentUser.username}`);
  divCommentBox.setAttribute("class", "section__commentbox");
  textArea.setAttribute("data-id", this.id);
  divSecBtn.setAttribute("class", "section__btn");
  button.setAttribute("class", "btn");
  button.textContent = "REPLY";

  button.addEventListener("click", reply.bind(this));

  divAvater.append(img);
  divCommentBox.append(textArea);
  divSecBtn.append(button);
  div.append(divAvater, divCommentBox, divSecBtn);
  divComment.append(div);

  return divComment;
}

function createCommentColSecOne() {
  const divColSectionOne = document.createElement("div");
  const div = document.createElement("div");
  const span = document.createElement("span");

  return divColSectionOne;
}

function createCommentColSecTwo() {
  const divColSectionTwo = document.createElement("div");
  const divCommentHeader = document.createElement("div");
  const divCommentInfo = document.createElement("div");
  const divUserInfo = document.createElement("div");
  const divAvater = document.createElement("div");
  const img = document.createElement("img");
  const divUserName = document.createElement("div");
  const spanName = document.createElement("span");
  const divCurrUser = document.createElement("div");
  const spanUserTag = document.createElement("span");
  const divCommentTime = document.createElement("div");
  const spanTime = document.createElement("span");

  divColSectionTwo.setAttribute("class", "col-section-2");
  divCommentHeader.setAttribute("class", "comment__header");
  divCommentInfo.setAttribute("class", "comment__info__wrapper");
  divUserInfo.setAttribute("class", "user__info__container");
  divAvater.setAttribute("class", "u__avater");
  img.setAttribute("src", `${this.user.image.webp}`);
  img.setAttribute("alt", `profile of ${this.user.username}`);
  divUserName.setAttribute("class", "u__name");
  spanName.textContent = this.user.username;
  divCurrUser.setAttribute("class", "current_user");
  divCommentTime.setAttribute("class", "comment__time");
  spanTime.setAttribute("id", "time--js");
  spanTime.setAttribute("data-id", this.id);
  spanTime.textContent = this.createdAt;
  spanUserTag.textContent = "you";

  divCurrUser.append(spanUserTag);
  isCurrentUser
    ? divUserInfo.append(divAvater, divUserName, divCurrUser)
    : divUserInfo.append(divAvater, divUserName);

  divAvater.append(img);
  divUserName.append(spanName);
  divCommentTime.append(spanTime);
  divCommentInfo.append(divUserInfo, divCommentTime);
  divCommentHeader.append(divCommentInfo);
  divColSectionTwo.append(divCommentHeader);

  return divColSectionTwo;
}

function templateDelete() {
  const a = document.createElement("a");
  const span = document.createElement("span");

  a.setAttribute("class", "btn__delete");
  a.setAttribute("data-id", this.id);

  span.textContent = "Delete";
  a.innerHTML = `<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>`;
  a.append(span);

  return a;
}

function templateEdit() {
  const a = document.createElement("a");
  const span = document.createElement("span");

  a.setAttribute("class", "btn__edit");
  a.setAttribute("data-id", this.id);

  span.textContent = "Edit";
  a.innerHTML = `<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>`;
  a.append(span);

  return a;
}

function createCommentColSecThree() {
  const divColSectThree = document.createElement("div");
  const div = document.createElement("div");
  const aDelete = templateDelete.call(this);
  const aEdit = templateEdit.call(this);
  const aBtn = document.createElement("a");
  const i = document.createElement("i");
  const span = document.createElement("span");

  divColSectThree.setAttribute("class", "col-section-3");
  aBtn.setAttribute("class", "btn__reply");

  i.innerHTML = `<svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>`;
  span.textContent = "Reply";
  aBtn.append(i, span);

  aEdit.addEventListener("click", createEditBox.bind(this));
  aDelete.addEventListener("click", openModel.bind(this));
  div.append(aDelete, aEdit);

  if (isCurrentUser) {
    divColSectThree.append(div);
  } else {
    const self = this;
    aBtn.addEventListener("click", replyingTo.bind(self));
    divColSectThree.append(aBtn);
  }

  return divColSectThree;
}

function createContentSec() {
  const div = document.createElement("div");
  const divCommentBody = document.createElement("div");
  const p = document.createElement("p");

  div.setAttribute("class", "col-section-2-span-2");
  divCommentBody.setAttribute("class", "comment__body");
  divCommentBody.setAttribute("data-id", this.id);
  divCommentBody.append(p);
  div.append(divCommentBody);

  if (this.replyingTo) {
    p.innerHTML = `@<span>${this.replyingTo}</span>, ${this.content}`;
  } else {
    p.textContent = this.content;
  }

  return div;
}

export function createUserComment() {
  const li = document.createElement("li");
  const divComment = document.createElement("div");
  const temp1 = createCommentColSecOne.call(this);
  const temp2 = createCommentColSecTwo.call(this);
  const temp3 = createCommentColSecThree.call(this);
  const temp4 = createContentSec.call(this);

  divComment.setAttribute("class", "comment");
  divComment.append(temp1, temp2, temp3, temp4);
  li.setAttribute("data-id", `${this.id}`);
  li.append(divComment);

  return li;
}

function createEditBox() {
  const div = getElementByClassName.call(this, "comment__body");
  const p = div.firstElementChild;
  const textArea = document.createElement("textarea");
  const divUpdate = document.createElement("div");
  const aBtn = document.createElement("a");

  textArea.setAttribute("class", "input__edit");
  textArea.setAttribute("data-id", this.id);
  divUpdate.setAttribute("class", "update");
  aBtn.setAttribute("class", "btn");
  aBtn.textContent = "UPDATE";

  aBtn.addEventListener("click", edit.bind(this));

  if (!div.getAttribute("aria-toggle")) {
    div.setAttribute("aria-toggle", "false");
  }

  if (div.getAttribute("aria-toggle") === "true") {
    p.innerHTML = `<span>@${this.replyingTo}</span>, ${this.content}`;
    removeEditBox.call(this);
  } else {
    textArea.value = p.textContent;
    p.textContent = "";
    divUpdate.append(aBtn);
    div.append(textArea, divUpdate);
    div.setAttribute("aria-toggle", "true");
  }
}
