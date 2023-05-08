var products=[
    {
        prod_id:1,
        prod_name:"Rolex",
        title:"amazing rolex watch",
        price:4000,
        image:"img/gallary/xnew_product1.png.pagespeed.ic.GC30TWVUh9.webp"
        ,cat_id:1,   
    },
    {
        prod_id:2,
        prod_name:"Casio",
        title:"amazing Casio watch",
        price:3000,
        image:"img/gallary/xnew_product3.png.pagespeed.ic.xG1joZNkeV.webp"
        ,cat_id:3,   
    },
    {
        prod_id:3,
        prod_name:"Omega",
        title:"omega watch",
        price:5000,
        image:"img/gallary/xnew_product2.png.pagespeed.ic.TisB6MUmE3.webp"
        ,cat_id:2,   
    },
    {
        prod_id:4,
        prod_name:"Omega",
        title:"omega watch",
        price:6000,
        image:"img/gallary/xpopular1.png.pagespeed.ic.V6f1NFO7gC.webp"
        ,cat_id:2,   
    },
    {
        prod_id:5,
        prod_name:"Casio",
        title:"casio watch",
        price:2000,
        image:"img/gallary/xpopular2.png.pagespeed.ic.tyRElexSbg.webp"
        ,cat_id:3,   
    },
    {
        prod_id:6,
        prod_name:"Casio",
        title:"casio watch",
        price:3000,
        image:"img/gallary/xpopular3.png.pagespeed.ic.hSa1p1jqty.webp"
        ,cat_id:3,   
    },
    {
        prod_id:7,
        prod_name:"Omega",
        title:"Omega watch",
        price:7000,
        image:"img/gallary/xpopular4.png.pagespeed.ic.-4ClcOF8fv.webp"
        ,cat_id:2,   
    },
    {
        prod_id:8,
        prod_name:"Rolex",
        title:"Rolex watch",
        price:12000,
        image:"img/gallary/xpopular5.png.pagespeed.ic.ak-jzjbDc8.webp"
        ,cat_id:1,   
    },
    {
        prod_id:9,
        prod_name:"Casio",
        title:"casio watch",
        price:8000,
        image:"img/gallary/xpopular6.png.pagespeed.ic.Q3zrxHTInj.webp"
        ,cat_id:3,   
    },
    {
        prod_id:10,
        prod_name:"Omega",
        title:"Omega watch",
        price:4000,
        image:"img/gallary/image1.jpg"
        ,cat_id:2,   
    },
    {
        prod_id:11,
        prod_name:"Omega",
        title:"Omega watch",
        price:1600,
        image:"img/gallary/image2.jpg"
        ,cat_id:2,   
    },
    {
        prod_id:12,
        prod_name:"Omega",
        title:"Omega watch",
        price:4500,
        image:"img/gallary/image9.jpg"
        ,cat_id:2,   
    },
    {
        prod_id:13,
        prod_name:"Casio",
        title:"casio watch",
        price:8000,
        image:"img/gallary/image5.jpg"
        ,cat_id:3,   
    },
    {
        prod_id:14,
        prod_name:"Casio",
        title:"casio watch",
        price:12000,
        image:"img/gallary/image7.jpg"
        ,cat_id:3,   
    },
    {
        prod_id:15,
        prod_name:"Casio",
        title:"casio watch",
        price:9000,
        image:"img/gallary/image8.jpg"
        ,cat_id:3,   
    },
    {
        prod_id:16,
        prod_name:"Rolex",
        title:"Rolex watch",
        price:7500,
        image:"img/gallary/image4.jpg"
        ,cat_id:1,   
    },
    {
        prod_id:17,
        prod_name:"Rolex",
        title:"Rolex watch",
        price:4500,
        image:"img/gallary/image3.jpg"
        ,cat_id:1,   
    },



];
var userName=localStorage.n1;
//localStorage.setItem("products",JSON.stringify(products));
var product_in_cart= document.getElementById("num_of_prod");
var fromcart=JSON.parse(localStorage.getItem("mycart"));
product_in_cart.innerHTML=`${fromcart.length}`;
var return_products=JSON.parse(localStorage.getItem("products"));
var container =document.createElement("div");
container.classList.add("container","pt-3");
var rows =document.createElement("div");
rows.classList.add("row","justify-content-center","ms-3");
container.append(rows);
for(var i=0;i<return_products.length;i++){
    var card=document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style",'width: 20rem')   ;
    var img=document.createElement("img");
    img.setAttribute("src",`${return_products[i]["image"]}`)
    img.setAttribute("style","width:320px;height:350px");
    img.classList.add("img","card-img-top");
    card.append(img);
    var div1=document.createElement("div");
    div1.classList.add("card-body");
    var name1=document.createElement("h1");
    name1.classList.add("text-center","d-block","m-auto","bg-light","mb-2");
    name1.innerHTML=return_products[i]["prod_name"];
    div1.append(name1);
    var price=document.createElement("span");
    price.classList.add("card-text","badge","text-bg-dark","w-25","d-block","m-auto","mb-2","text-center");
    price.innerHTML=return_products[i]["price"]+" $";
    div1.append(price);
    var go= document.createElement("a");
    go.classList.add("btn","btn-outline-primary","d-block", "m-auto","w-50",);
    go.textContent="Bay now";
    div1.append(go);
    card.append(div1);
    card.setAttribute("onclick",`goto(${return_products[i]["prod_id"]})`);
    var cols =document.createElement("div");
    cols.classList.add("col-9","col-md-6","col-lg-4","my-3");
    cols.append(card);
    rows.append(cols);
};
document.body.append(container);

function goto(x){
    localStorage.setItem("myid",`${x}`);
    window.open(`product.html?id=${x}`,"_self");

}
//search 
var return_products=JSON.parse(localStorage.getItem("products"));
    var name_of_products=[];
    var searchdiv=document.createElement("div");
    searchdiv.setAttribute("id","mysearchdiv");
    for(var i=0;i<return_products.length;i++){
        name_of_products.push(return_products[i]['prod_name']+" "+ return_products[i]['prod_id']);
        
    }
function search(x){
     var resualt=[];
     var ides=[];
     searchdiv.innerHTML='';
     var div3= document.getElementById("divs");
    if(x!=''){  
        div3.classList.remove();
       div3.classList.add("vis");
    for (const iterator of name_of_products) {
        if(iterator.split(" ")[0].toLowerCase().includes(x)){
            resualt.push(iterator.split(" ")[0]);
            ides.push(iterator.split(" ")[1])
            }
        }
        if(resualt.length==0){
            div3.classList.remove();
        div3.classList.add("hid");
        }
       for(var i=0;i<resualt.length;i++){
        var ah=document.createElement("p");
        ah.innerHTML=resualt[i];
        ah.classList.add("elminsearch");
        ah.setAttribute("style","display:block;color: #000;");
        ah.setAttribute("onclick",`gotoproduct(${ides[i]})`);
        searchdiv.append(ah);
       }
       div3.append(searchdiv);
    }
    else{
        div3.classList.remove();
        div3.classList.add("hid");
    }

}
function gotoproduct(y){
    window.location=`product.html?=${y}`;

}