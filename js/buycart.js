var all_select = document.querySelector(".all-select");
var pay = document.querySelector(".pay");
console.log(pay);

pay.onclick = ()=>{
    if(confirm("你确定吗？")){
        setTimeout(() => {
            alert("您当前余额不足")
        }, 1000);
       
    }   
}

// 添加商品列表

if(localStorage.getItem("goods")){
    var goodsArr = JSON.parse(localStorage.getItem("goods"))
    shop("http://127.0.0.1:5500/data/product.json")
    shop("http://127.0.0.1:5500/data/tv.json")
    function shop(address){
        $.ajax({
            url: address,
            type: 'get',
            dataType: 'json',
            success: function (json){
              var domStr = ''
              var list_div = document.createElement("div")
              list_div.className = "list"
              $.each(goodsArr,function (index,item){
                $.each(json,function (index,obj){
                  if ( item.code === obj.code ) {
                    var add_price = obj.price * item.num;
                    
                    domStr += 
                        `<div class="list">
                            <div class="list-check">
                                <input type="checkbox" name="goods" >
                            </div>
                            <div class="list-img">
                                <img src="${obj.imgurl}" alt="">
                            </div>
                            <div class="list-sp">${obj.title}</div>
                            <div class="list-price">${obj.price}</div>
                            <div class="list-mun">${item.num}</div>
                            <div class="list-tatol">${add_price}</div>
                            <div class="list-action">
                                <span code ="${item.code}"> x</span>
                            </div>
                        </div>
                        `
                        }  
                    })

                    
                    $('.list-body').append(domStr);
                    domStr = ''
                })
              
           
            }
        })
    }

    $('.list-body').on('click','span',function (){
        $(this).parent().parent().remove();
        console.log($(this).parent().parent());
        

        var code = $(this).attr('code');
       
        $.each(goodsArr,function (index,item){
            if (item.code === code) {
              goodsArr.splice(index,1)
              return false}
        })
        if (goodsArr.length > 0) {
            localStorage.setItem('goods',JSON.stringify(goodsArr)) 
        } else {
            
            localStorage.removeItem('goods')
             nodata = '<li style="line-height: 70px; text-align: center;">购物车暂无数据!<a href="./list.html" class="b-color">点击马上购物</a></li>'
            $('.list-body').html(nodata)
        }
    })
    var add_price = $(".list-body").children()
    console.log(add_price)
    
    
    

}








