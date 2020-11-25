var  mlists = document.querySelectorAll(".displaybox .mlist")
var  dislists = document.querySelectorAll(".displaybox .listdisplay")
console.log(dislists)
for(var i = 0 ; i< mlists.length ; i++){
  mlists[i].index = i
  mlists[i].onclick = function(){
    if(this.nextElementSibling.style.display == "none"){
      this.nextElementSibling.style.display = "block"
    }else{
      this.nextElementSibling.style.display = "none"
    }
  }

 
}


var mlistbox = document.querySelectorAll(".displaybox .listdisplay");
console.log(mlistbox[0]);

ajax({
  url:'http://127.0.0.1:5500/data/product.json',
  type: 'get',
  dataType:'json',
  type: 'get',
  success:function(json){
    var mlistdata = '';
    json.forEach(element => {
      console.log(element.imgurl)
      mlistdata += '<li><a href="#"><img src='+ element.imgurl+' alt=""><span>'+element.title +'</span></a></li>'
    });
    mlistbox[0].innerHTML = mlistdata;
  
  }
})
