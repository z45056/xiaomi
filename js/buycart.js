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

var sp_list ;


