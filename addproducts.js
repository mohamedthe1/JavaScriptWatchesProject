var myarr=[];
var my_new_product;

function add_prod(){
    var prod_name=document.getElementById("ProductName").value;
    var prod_id=document.getElementById("inputid").value;
    var price=document.getElementById("price").value;
    var title=document.getElementById("inputtitle").value;
    var image=document.getElementById("formFileLg").value;
    var cat_id=document.getElementById("catid").value;

 my_new_product=
    {
        prod_id:parseInt(prod_id),
        prod_name:prod_name,
        title:title,
        price:parseInt(price),
        image:image,
        cat_id:parseInt(cat_id),   
    }
    
     if(localStorage.getItem("products")!=null){
         myarr=JSON.parse(localStorage.getItem("products"));
         console.log(myarr);
     }
     else{
         myarr=[];
     }
     console.log(my_new_product);
     myarr.push(my_new_product);
     console.log(myarr);
     localStorage.setItem("products",JSON.stringify(myarr));
     console.log(JSON.parse(localStorage.getItem("products")));
     alert("you have succesfuly add product");
     window.location="admin.html";
}