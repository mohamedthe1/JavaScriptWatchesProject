
    var total_price=0;
    var my_orders=JSON.parse(localStorage.getItem("mycart"));
    for(var i=0;i<my_orders.length;i++){
        var maindiv=document.createElement("div");
        maindiv.classList.add("maindiv");
        maindiv.setAttribute("style","margin-top:70px")
        var img=document.createElement("img");
        img.setAttribute("src",`${my_orders[i]["image"]}`);
        img.classList.add("img");
        maindiv.append(img);
        var smaldiv=document.createElement("div");
        var plus=document.createElement("button");
        plus.classList.add("pluseandminus");
        plus.textContent="+";
        plus.setAttribute("onclick",`add(${my_orders[i]["prod_id"]})`);
        smaldiv.append(plus);
        var counter=document.createElement("input");
        counter.classList.add("counter");
        counter.setAttribute("type","text");
        counter.setAttribute("id",`${my_orders[i]["prod_id"]}`)
        counter.value="1";
        smaldiv.append(counter);
        var min=document.createElement("button");
        min.classList.add("pluseandminus");
        min.setAttribute("onclick",`minus(${my_orders[i]["prod_id"]})`);
        min.textContent="-";
        smaldiv.append(min);
        maindiv.append(smaldiv);
        var div1=document.createElement("div");
        div1.classList.add("name3");
        div1.append(my_orders[i]["prod_name"]);
        maindiv.append(div1);
        var div2=document.createElement("div");
        div2.classList.add("price2");
        var price_id=parseInt(my_orders[i]["prod_id"])+1;
        div2.setAttribute("id",`${price_id}`);
        total_price+=parseInt(my_orders[i]["price"]);
        div2.append(my_orders[i]["price"]," $");
        maindiv.append(div2);
        var but1 =document.createElement("button");
        but1.classList.add("deletebtn");
        but1.textContent="Delete This Order";
        but1.setAttribute("onclick",`delet(${my_orders[i]["prod_id"]})`);
        maindiv.append(but1);
        document.body.append(maindiv);var but =document.createElement("button");
        }
        document.write("<br>");
        var b =document.createElement("div");
        b.classList.add("container");
        var r =document.createElement("div");
        r.classList.add("row");
        var c =document.createElement("div");
        c.classList.add("col","alert","alert-success","text-center","h1");
        c.setAttribute("role","alert");
        r.append(c);
        c.innerHTML=`Total Price Is ${total_price} $`;
        b.append(r);
        document.body.append(b);
        var c2 =document.createElement("div");
        c2.classList.add("col",);
        var but =document.createElement("button");
        but.classList.add("btn","btn-success","d-block","m-auto","mb-2")
        but.textContent="Confirm Your Orders";
        but.setAttribute("onclick","condirmation()")
        c2.append(but);
        b.append(c2);
        document.body.append(b);

    function add(x){
        var qauntity_text=document.getElementById(`${x}`);
        var qauntity_nom=parseInt(qauntity_text.value);
        qauntity_nom+=1;
        qauntity_text.value=qauntity_nom.toString();
        var price_dive=x+1;
        var price1=document.getElementById(`${price_dive}`);
        for(var i=0;i<my_orders.length;i++){
            if(my_orders[i]["prod_id"]==x){
                var price=my_orders[i]["price"];
                price1.innerHTML=my_orders[i]["price"]*parseInt(qauntity_text.value)+" $";   
            }
        }
        total_price+=price;
                c.innerHTML="Total Price Is "+total_price+" $";
    }
    function minus(x){
        var qauntity_text=document.getElementById(`${x}`);
        var qauntity_nom=parseInt(qauntity_text.value);
        if(qauntity_text.value>0){
        qauntity_nom-=1;
        qauntity_text.value=qauntity_nom.toString();
        var price_dive=x+1;
        var price1=document.getElementById(`${price_dive}`);
        for(var i=0;i<my_orders.length;i++){
            if(my_orders[i]["prod_id"]==x){
                var price=my_orders[i]["price"];
                price1.innerHTML=my_orders[i]["price"]*parseInt(qauntity_text.value)+" $";   
            }
        }
        total_price-=price;
                c.innerHTML="Total Price Is "+total_price+" $";
    }
    }
    function condirmation(){
        localStorage.removeItem("mycart");
        alert("you confirmed your orders , orders will arrive within 3 days");
        window.location="home.html";
    }
    function delet(x){
        var returnFromCart = JSON.parse(localStorage.getItem("mycart"));
        for (let index = 0; index < returnFromCart.length; index++) {
        const element = returnFromCart[index];
        if (element["prod_id"] == x) {
            console.log(returnFromCart[index]);
            returnFromCart.splice(index, 1);
        }
        }
        localStorage.setItem("mycart", JSON.stringify(returnFromCart));
        alert("Product is Deleted from your cart");
        window.location="cart.html";   
    }