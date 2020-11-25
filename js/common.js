// 头部**********************
var nav = document.querySelector(".head-nav")
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
  
}
var list = document.querySelector('.list')
var allsp = document.querySelector(".allsp");

allsp.onmouseenter = function(){
    showsp.style.display = "none";
}


//**************
var showspbox = document.querySelectorAll('.showsp div');
console.log(showspbox[0]);

var ollist = document.querySelectorAll(".list ol");
console.log(ollist[0]);
  ajax({
    url:'http://127.0.0.1:5500/data/product.json',
    type: 'get',
    dataType:'json',
    type: 'get',
    success:function(json){
      console.log(json)
      var spdata = '';
      var mlistdata = '';
      var listdata = '';
      json.forEach(element => {
        console.log(element.imgurl)
        spdata += '<a href="#"><img src='+ element.imgurl+' alt=""><h3>'+element.title +'</h3><p>'+element.price+'</p></a>'
        mlistdata += '<li><a href="#"><img src='+ element.imgurl+' alt=""><span>'+element.title +'</span></a></li>'
        // listdata += ''
      });
      showspbox[0].innerHTML = spdata;
      ollist[0].innerHTML = mlistdata;

    }
  })







