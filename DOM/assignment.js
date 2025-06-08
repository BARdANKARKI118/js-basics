let decreasebtn=document.getElementById("decreasebtn");
let increasebtn=document.getElementById("increasebtn");
let countlabel=document.getElementById("countlabel");
let count=0;

increasebtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}

decreasebtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}

