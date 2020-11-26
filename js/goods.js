var p_perv = $1(".p-perv")
var p_next = $1(".p-next")
var display_img = $1(".display-img ul")
var goods_img = $2(".display-img ul li")
var goods_index = $2(".display-img ol li")
var bgindex = 0;
var btimer;

animate(goods_img[bgindex],{'opacity':1},function(){
    btimer = setInterval(() => {
      b_movenext();
    }, 3000);
  })
  p_next.onclick = function(){
    clearInterval(btimer);
    b_movenext()
    btimer = setInterval(() => {
      b_movenext();
    }, 3000);
  }
  p_perv.onclick = function(){
    clearInterval(btimer);
    b_moveperv()
    btimer = setInterval(() => {
      b_movenext();
    }, 3000);
  }
  function b_movenext(){
    goods_img[bgindex].className = "";
    goods_index[bgindex].className = "";
    goods_img[bgindex].style.opacity = "0.0"
    bgindex++;
    if(bgindex > goods_img.length-1){
      bgindex = 0;
    }
    goods_img[bgindex].className = "b-show";
    goods_index[bgindex].className = "b-subshow";
    animate(goods_img[bgindex],{'opacity':1})
  }
  function b_moveperv(){
    goods_img[bgindex].className = "";
    goods_index[bgindex].className = "";
    goods_img[bgindex].style.opacity = "0"
    bgindex--;
    if(bgindex < 0){
      bgindex = goods_img.length-1;
    }
    goods_img[bgindex].className = "b-show";
    goods_index[bgindex].className = "b-subshow";
    animate(goods_img[bgindex],{'opacity':1})
  }
  for(var i = 0 ;i < goods_index.length ; i++){
    goods_index[i].index = i;
    goods_index[i].onclick = function(){
      clearInterval(btimer);
      goods_index[bgindex].className=""
      goods_index[bgindex].className = "";
      goods_img[bgindex].style.opacity = "0"
  
      bgindex = this.index;
      goods_img[bgindex].className = "b-show";
      goods_index[bgindex].className = "b-subshow";
      animate(goods_img[bgindex],{'opacity':1});
      btimer = setInterval(() => {
        b_movenext();
      }, 3000);
    }
  }