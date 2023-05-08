


var return_products=JSON.parse(localStorage.getItem("products"));
var container =document.createElement("div");
container.classList.add("container","pt-3");
var rows =document.createElement("div");
rows.classList.add("row","justify-content-center","ms-3");
container.append(rows);
for(var i=0;i<return_products.length;i++){
    var card=document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style",'width: 20rem');
    var img=document.createElement("img");
    img.setAttribute("src",`${return_products[i]["image"]}`);
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
    go.classList.add("btn","btn-primary","d-block", "m-auto","w-50",);
    go.textContent="pay now";
    div1.append(go);
    card.append(div1);
    card.setAttribute("onclick",`goto(${return_products[i]["prod_id"]})`);
    var cols =document.createElement("div");
    cols.classList.add("col-9","col-md-6","col-lg-4","my-2");
    cols.append(card);
    rows.append(cols);
};
document.body.append(container);

function goto(x){
    localStorage.setItem("myid",`${x}`);
    window.location="delete_item.html";

}









