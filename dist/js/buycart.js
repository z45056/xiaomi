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


if (localStorage.getItem("goods")) {
  var shop = function shop(address) {
    $.ajax({
      url: address,
      type: 'get',
      dataType: 'json',
      success: function success(json) {
        var domStr = '';
        var list_div = document.createElement("div");
        list_div.className = "list";
        $.each(goodsArr, function (index, item) {
          $.each(json, function (index, obj) {
            if (item.code === obj.code) {
              var add_price = obj.price * item.num;
              domStr += "<div class=\"list\">\n                            <div class=\"list-check\">\n                                <input type=\"checkbox\" name=\"goods\" >\n                            </div>\n                            <div class=\"list-img\">\n                                <img src=\"".concat(obj.imgurl, "\" alt=\"\">\n                            </div>\n                            <div class=\"list-sp\">").concat(obj.title, "</div>\n                            <div class=\"list-price\">").concat(obj.price, "</div>\n                            <div class=\"list-mun\">").concat(item.num, "</div>\n                            <div class=\"list-tatol\">").concat(add_price, "</div>\n                            <div class=\"list-action\">\n                                <span code =\"").concat(item.code, "\"> x</span>\n                            </div>\n                        </div>\n                        ");
            }
          });
          $('.list-body').append(domStr);
          domStr = '';
        });
      }
    });
  };

  var goodsArr = JSON.parse(localStorage.getItem("goods"));
  shop("http://127.0.0.1:5500/data/product.json");
  shop("http://127.0.0.1:5500/data/tv.json");
  $('.list-body').on('click', 'span', function () {
    $(this).parent().parent().remove();
    console.log($(this).parent().parent());
    var code = $(this).attr('code');
    $.each(goodsArr, function (index, item) {
      if (item.code === code) {
        goodsArr.splice(index, 1);
        return false;
      }
    });

    if (goodsArr.length > 0) {
      localStorage.setItem('goods', JSON.stringify(goodsArr));
    } else {
      localStorage.removeItem('goods');
      nodata = '<li style="line-height: 70px; text-align: center;">购物车暂无数据!<a href="./list.html" class="b-color">点击马上购物</a></li>';
      $('.list-body').html(nodata);
    }
  });
  var add_price = $(".list-body").children();
  console.log(add_price);
}