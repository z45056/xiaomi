// 头部**********************
var nav = document.querySelector(".head-nav ul")
var navs = document.querySelectorAll(".head-nav ul li");
var showsp = document.querySelector('.showsp');
var dissps = document.querySelectorAll('.showsp>div');
var headbox = document.getElementById("headbox");
for(var i = 0 ; i< navs.length-2 ;i++ ){
  navs[i].index = i;
  navs[i].onmouseenter = function(){
    showsp.style.display = "block";
    headbox.className = "head-b"
    for(var j = 0;j <dissps.length ;j++){
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
