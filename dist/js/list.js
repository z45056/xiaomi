"use strict";

var mlists = document.querySelectorAll(".displaybox .mlist");
var dislists = document.querySelectorAll(".displaybox .listdisplay");
console.log(dislists);

for (var i = 0; i < mlists.length; i++) {
  mlists[i].index = i;

  mlists[i].onclick = function () {
    if (this.nextElementSibling.style.display == "none") {
      this.nextElementSibling.style.display = "block";
    } else {
      this.nextElementSibling.style.display = "none";
    }
  };
}