
        var return_products=JSON.parse(localStorage.getItem("products"));
        var arr=[];
        var container=document.createElement("div");
        container.classList.add("container","pt-3");
        var rows =document.createElement("div");
        rows.classList.add("row","justify-content-center","ms-3");
        container.append(rows);
                    for (item of return_products) {
                            if(item["prod_name"]=="Casio"){
                            var card=document.createElement("div");
                            card.classList.add("card");
                            card.setAttribute("style",'width: 18rem')
                            var img=document.createElement("img");
                            img.setAttribute("style","width:320px;height:350px");
                            img.setAttribute("src",`${item["image"]}`)
                            img.classList.add("img-fluid","card-img-top");
                            card.append(img);
                            var div1=document.createElement("div");
                            div1.classList.add("card-body");
                            var name1=document.createElement("h1");
                            name1.classList.add("text-center","d-block","m-auto","bg-light","mb-2");
                            name1.innerHTML=item["prod_name"];
                            div1.append(name1);
                            var price=document.createElement("span");
                            price.classList.add("card-text","badge","text-bg-dark","w-25","d-block","m-auto","mb-2","text-center");
                            price.innerHTML=item["price"]+" $";
                            div1.append(price);
                            var go= document.createElement("a");
                            go.classList.add("btn","btn-primary","d-block", "m-auto","w-50",);
                            go.textContent="pay now";
                            div1.append(go);
                            card.append(div1);
                            card.setAttribute("onclick",`goto(${item["prod_id"]})`);
                            var cols =document.createElement("div");
                            //cols.classList.add("col-9","col-md-6","col-lg-4","my-3");
                            cols.classList.add("col-12","col-md-","col-lg-4","my-3","mx-5","mx-md-0","mx-lg-0");
                            //cols.classList.add("col-12","col-md-6","col-lg-4","my-3","mx-5","mx-md-1","mx-lg-0");
                            cols.append(card);
                            rows.append(cols);
                        };
                        document.body.append(container);
                function goto(x){
                    localStorage.setItem("myid",`${x}`);
                    window.open("product.html","_self");
                
                }
            }


