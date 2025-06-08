// console.log(document);

// let h1=document.getElementsByTagName('h1');
// let hello_id=document.getElementById("hello");
// let hello_class=document.getElementsByClassName("p");
// let hello_class1=document.querySelector(".p");

// //id name 
// hello_id.style.color = "red";
// console.log(hello_class);

// hello_id.innerHTML="<i>Hello</i>"
// //console.log(hello_id.innerText="Nepathya");

// //tagName 
// h1[1].style.color="blue";

// //class name 
// //hello_class[0].style.color="green";
// hello_class1.style.fontSize="12px";



// console.log(hello);
// console.log(h1);

// 

let dark=document.getElementById("dark");
let hide=document.getElementById("hide");
let para=document.getElementById("para");

function hideText(){
    if(hide.innerText=="Hide"){
        para.style.display="none";
        hide.innerText="show";
    }
    else if(hide.innerText=="show"){
        para.style.display="block";
        hide.innerText="Hide";
    }
}

function changeColor(){
    if(dark.innerText=="Dark")
    {
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        dark.innerText="light";
    }
    else if(dark.innerText=="light")
    {
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        dark.innerText="Dark";
    }
}

hide.addEventListener("click",hideText);
dark.addEventListener("click",changeColor);