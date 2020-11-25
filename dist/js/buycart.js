"use strict";

var all_select = document.querySelector(".all-select");
var pay = document.querySelector(".pay");
console.log(pay);

pay.onclick = function () {
  if (confirm("你确定吗？")) {
    setTimeout(function () {
      alert("您当前余额不足");
    }, 1000);
  }
}; // 添加商品列表


var sp_list;