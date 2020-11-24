"use strict";

// 头部**********************
var nav = document.querySelector(".head-nav");
var navs = document.querySelectorAll(".head-nav ul li");
var showsp = document.querySelector('.showsp');
var dissps = document.querySelectorAll('.showsp>div');
var headbox = document.getElementById("headbox");

for (var i = 0; i < navs.length - 2; i++) {
  navs[i].index = i;

  navs[i].onmouseenter = function () {
    showsp.style.display = "block";
    headbox.className = "head-b";

    for (var j = 0; j < dissps.length; j++) {
      navs[j].className = " ";
      dissps[j].style.display = "none";
    }

    navs[this.index].className = "nav-active";
    dissps[this.index].style.display = "block";
  };
}

showsp.onmouseleave = function () {
  showsp.style.display = "none";
};

var list = document.querySelector('.list');
var allsp = document.querySelector(".allsp");

allsp.onmouseenter = function () {
  showsp.style.display = "none";
};