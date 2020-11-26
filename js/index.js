// 头部**********************
var nav = document.querySelector(".head-nav ul")
var navs = document.querySelectorAll(".head-nav ul li");
var showsp = document.querySelector('.showsp');
var dissps = document.querySelectorAll('.showsp>div');
var headbox = document.getElementById("headbox");
for(var i = 1 ; i< navs.length-2 ;i++ ){
  navs[i].index = i;
  navs[i].onmouseenter = function(){
    showsp.style.display = "block";
    headbox.className = "head-b"
    for(var j = 0;j <dissps.length ;j++){
      console.log(this.index)
      navs[j].className = " ";
      dissps[j].style.display = "none"
    }
    navs[this.index].className = "nav-active"
    dissps[this.index].style.display = "block"
  }
}
showsp.onmouseleave = function(){
  showsp.style.display = "none";
  //navs[index].className = ""
}
// 头部获取数据****************


// banner
var b_imgs = document.querySelectorAll(".banner ul li");
var b_perv = document.querySelector(".banner .perv");
var b_next = document.querySelector(".banner .next");
var b_sublist =document.querySelectorAll(".banner ol li");
var bgindex = 0;
var btimer;
animate(b_imgs[bgindex],{'opacity':1},function(){
  btimer = setInterval(() => {
    b_movenext();
  }, 3000);
})
b_next.onclick = function(){
  clearInterval(btimer);
  b_movenext()
  btimer = setInterval(() => {
    b_movenext();
  }, 3000);
}
b_perv.onclick = function(){
  clearInterval(btimer);
  b_moveperv()
  btimer = setInterval(() => {
    b_movenext();
  }, 3000);
}
function b_movenext(){
  b_imgs[bgindex].className = "";
  b_sublist[bgindex].className = "";
  b_imgs[bgindex].style.opacity = "0.1"
  bgindex++;
  if(bgindex > b_imgs.length-1){
    bgindex = 0;
  }
  b_imgs[bgindex].className = "b-show";
  b_sublist[bgindex].className = "b-subshow";
  animate(b_imgs[bgindex],{'opacity':1})
}
function b_moveperv(){
  b_imgs[bgindex].className = "";
  b_sublist[bgindex].className = "";
  b_imgs[bgindex].style.opacity = "0"
  bgindex--;
  if(bgindex < 0){
    bgindex = b_imgs.length-1;
  }
  b_imgs[bgindex].className = "b-show";
  b_sublist[bgindex].className = "b-subshow";
  animate(b_imgs[bgindex],{'opacity':1})
}
for(var i = 0 ;i < b_sublist.length ; i++){
  b_sublist[i].index = i;
  b_sublist[i].onclick = function(){
    clearInterval(btimer);
    b_sublist[bgindex].className=""
    b_sublist[bgindex].className = "";
    b_imgs[bgindex].style.opacity = "0"

    bgindex = this.index;
    b_imgs[bgindex].className = "b-show";
    b_sublist[bgindex].className = "b-subshow";
    animate(b_imgs[bgindex],{'opacity':1});
    btimer = setInterval(() => {
      b_movenext();
    }, 3000);
  }
}


//小米闪购banner图
var f_perv = $1(".flashpay .select .f_perv");
var f_next = $1(".flashpay .select .f_next");
var list_scoll = $1(".scoll")
var f_product_list = $2(".scoll ul li")
var list_index = 0
var f_timer;
var list_length = f_product_list.length
var list_width = f_product_list[0].clientWidth
p_autoplay();
function p_autoplay(){
  f_timer = setInterval(() => {
    f_moveNext();
  }, 3000);
}
f_next.onclick = ()=>{
  clearInterval(f_timer)
  f_moveNext();
  setTimeout(() => {
    p_autoplay();
  }, 2000);
}
f_perv.onclick=()=>{
  clearInterval(f_timer)
  f_movePerv();
  setTimeout(() => {
    p_autoplay();
  }, 2000);
}
function f_moveNext(){
  list_index ++;
  if(list_index>list_length-1){
    list_index = 0;
    list_scoll.scrollLeft = 0;
  }
  animate(list_scoll,{'scrollLeft':list_index*list_width});
  console.log(555)
}
function f_movePerv(){
  list_index--;
  if(list_index < 0){
    list_index = list_length;
    list_scoll = list_index * list_width
  }
  animate(list_scoll,{'scrollLeft':list_index*list_width});
  console.log(666);
}






// 人工客服****************************************************
var qr = document.querySelector(".Qr");
var followimg = document.querySelector(".followimg")
console.log(followimg)
qr.onclick = function(){
  console.log("哈哈哈 ")
}
qr.onmouseenter = function(){
  followimg.style.display = "block"
}
qr.onmouseleave = function(){
  followimg.style.display = "none"
}

var mobile_list=$1(".ml ul")
console.log(mobile_list);
ajax({
  url:'http://127.0.0.1:5500/data/product.json',
  type: 'get',
  dataType:'json',
  type: 'get',
  success:function(json){
    var ml_mobile_data = '';
    json.forEach(element => {
      ml_mobile_data += '<li><a href="goods.html"><img src="'+element.imgurl+'" alt=""><p class="m-name">'+ element.title+'</p><span class="m-content">'+element.parameter+'</span><p class="price">'+element.price+'元起&nbsp;<del>6299元</del></p></a></li>'
    });
    console.log(ml_mobile_data);
    mobile_list.innerHTML = ml_mobile_data; 
    
  }
})

