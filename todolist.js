i = 0;
const dolist = {
    todo: "",   //存储用户输入的数据
    status: "unfinished",     //分为完成和未完成，默认为未完成
    rating: "normal"   //noraml，important及其他自定义，默认值为normal，快速输入时皆为正常，可手动更改
};

function add() {
    if (document.getElementById("add").value === "") {
        alert("Input Error!");
    } else {

        let div = document.createElement("div");
        div.id = String(i);
        div.style.background = "#000000";
        div.style.width = "760px";
        div.style.height = "205px";
        div.style.position = "static";
        div.style.marginLeft = "500px";
        //div.style.marginTop="100px";
        //div.style.cssFloat="";
        div.style.borderRadius = "5px";
        //div.style.right="600px";
        //div.style.padding= "25px";
        div.style.marginTop = "15px";
        // message.appendChild(div);
        document.body.appendChild(div);
        // div.insertBefore(div,.nextSibling);


        let title = document.createElement("text");
        title.innerText = "NowToDo:  "
        title.style.fontFamily = "Monaco,Times, serif";
        title.style.fontSize = "20px";
        title.style.color = "#F75C2F";
        div.appendChild(title);

        let todoitem = document.createElement("textarea");
        let todoid;
        todoitem.className = "item";
        todoitem.id = String(i) + "todoitem";
        todoid=todoitem.id;
        div.appendChild(todoitem);
        todoitem.defaultValue = document.getElementById("add").value;
        todoitem.readOnly = true;

        // let todobutton = document.createElement("input");
        // todobutton.className = "button";
        // todobutton.id="todobutton";
        // todobutton.type="button";
        // div.appendChild(todobutton);
        // todobutton.value= "Change ";

        let status = document.createElement("text");
        status.innerText = "\n\nStatus :  "
        status.style.fontFamily = "Monaco,Times, serif";
        status.style.fontSize = "20px";
        status.style.color = "white";
        div.appendChild(status);

        let statusitem = document.createElement("textarea");
        let statusid;
        statusitem.className = "item";
        statusitem.id = String(i) + "statusitem";
        statusid=statusitem.id;
        div.appendChild(statusitem);
        statusitem.defaultValue = dolist.status;
        statusitem.readOnly = true;

        let rating = document.createElement("text");
        rating.innerText = "\n\nRating :  ";
        rating.style.fontFamily = "Monaco,Times, serif";
        rating.style.fontSize = "20px";
        rating.style.color = "white";
        div.appendChild(rating);



        let ratingitem = document.createElement("textarea");
        let ratingid;
        ratingitem.className = "item";
        ratingitem.id = String(i) + "ratingitem";
        ratingid=ratingitem.id;
        div.appendChild(ratingitem);
        ratingitem.defaultValue = dolist.rating;
        ratingitem.readOnly = true;


        document.getElementById(todoid).onclick = function () {
            let change = prompt("Change ToDo to what?", "Your ToDo");
            if (change !== null && change !== "") {
                document.getElementById(todoid).innerText = change;
            }
        };

        document.getElementById(ratingid).onclick = function () {
            let change = prompt("Change Rating to what?", "Rating");
            if (change !== null && change !== "") {
                document.getElementById(ratingid).innerText = change;
            }
        };

        document.getElementById(statusid).onmouseover = function () {
            if (document.getElementById(statusid).defaultValue==="unfinished") {
                let change1="completed";
                document.getElementById(statusid).innerText=change1;
                document.getElementById(todoid).style.textDecoration = "line-through";
            }
        };
        i++;
    }

    document.getElementById("add").value = "";
}
