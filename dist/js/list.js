"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var mlistbox = document.querySelectorAll(".displaybox .listdisplay");
console.log(mlistbox[0]);

(function () {
  var _ajax, _ajax2;

  ajax((_ajax = {
    url: 'http://127.0.0.1:5500/data/product.json',
    type: 'get',
    dataType: 'json'
  }, _defineProperty(_ajax, "type", 'get'), _defineProperty(_ajax, "success", function success(json) {
    var mlistdata = '';
    json.forEach(function (element) {
      mlistdata += '<li><a href="#"><img src=' + element.imgurl + ' alt=""><span>' + element.title + '</span><button class="add-cart" code="' + element.code + '">加入购物车</button></a></li>';
    });
    mlistbox[0].innerHTML = mlistdata;
  }), _ajax));
  ajax((_ajax2 = {
    url: 'http://127.0.0.1:5500/data/tv.json',
    type: 'get',
    dataType: 'json'
  }, _defineProperty(_ajax2, "type", 'get'), _defineProperty(_ajax2, "success", function success(json) {
    var tvdata = '';
    json.forEach(function (element) {
      tvdata += '<li><a href="#"><img src=' + element.imgurl + ' alt=""><span>' + element.title + '</span><button class="add-cart" code="' + element.code + '">加入购物车</button></a></li>';
    });
    mlistbox[1].innerHTML = tvdata;
  }), _ajax2));
})();

$('.m-content').on('click', '.add-cart', function () {
  // 获取当前点击商品的编号
  console.log($(this));
  var code = $(this).attr('code');
  console.log(code);

  if (localStorage.getItem('goods')) {
    var goodsArr = JSON.parse(localStorage.getItem('goods'));
  } else {
    var goodsArr = [];
  }

  var hasgoods = false;

  if (goodsArr.length > 0) {
    $.each(goodsArr, function (index, item) {
      console.log(index, item);

      if (item.code === code) {
        item.num++;
        hasgoods = true;
        return false;
      }
    });
  }

  if (!hasgoods) {
    goodsArr.push({
      code: code,
      num: 1
    });
  }

  localStorage.setItem('goods', JSON.stringify(goodsArr));
  alert('添加购物车成功');
});