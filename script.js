"use strict";
// const githubProfile = document.querySelector(".github-profile");
// const body = document.querySelector(".body");
const userName = document.querySelector(".user-nav__user-name");
const searchIcon = document.querySelector(".search__icon");
const inputNode = document.querySelector(".search__input");
const headerNode = document.querySelector(".overview__heading");
// functions
const randomNum = function () {
    return Math.trunc(Math.random() * 256);
};

const changeColor = function () {
    console.log("function called");
    let red = randomNum();
    let green = randomNum();
    let blue = randomNum();
    let color = `rgb(${red},${green},${blue})`;
    inputNode.style.color = color;
    userName.style.color = color;
    headerNode.style.color = color;
    searchIcon.style.fill = color;
    // body.style.backgroundColor = color;
    inputNode.style.borderColor = color;
};

inputNode.addEventListener("keypress", changeColor);
