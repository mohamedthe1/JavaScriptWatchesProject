
var x= window.location.search.split("=")[1];
var prod_name=document.getElementById("ProductName");
var prod_id=document.getElementById("inputid");
var price=document.getElementById("price");
var title=document.getElementById("inputtitle");
var img=document.getElementById("formFileLg");
var cat_id=document.getElementById("catid");
var return_product = JSON.parse(localStorage.getItem("products"));
var product_arr = return_product.filter((item) => item["prod_id"] == x);
prod_id.value=(product_arr[0]["prod_id"]);
prod_name.value=(product_arr[0]["prod_name"]);
price.value=(product_arr[0]["price"]);
title.value=(product_arr[0]["title"]);
img.value=(product_arr[0]["image"]);
cat_id.value=(product_arr[0]["cat_id"]);
var myarr=JSON.parse(localStorage.getItem("products"));

function update_prod(){
        for(var i=0;i<myarr.length;i++){
        if(myarr[i]["prod_id"]==x){
            myarr[i]["prod_id"]=prod_id.value;
            myarr[i]["prod_name"]=prod_name.value;
            myarr[i]["price"]=price.value;
            myarr[i]["title"]=title.value;
            myarr[i]["image"]=img.value;
            myarr[i]["cat_id"]=cat_id.value;  
        };

    }
    localStorage.setItem("products",JSON.stringify(myarr));
    window.open("admin.html","_self");
}


