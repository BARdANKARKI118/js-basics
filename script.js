/*console.log("Hello world");

let firstname='Bardan';
console.log(firstname);

let value;
console.log(value);


//console.log(surname);

var surname='Karki';
console.log(surname);

const number=69;
console.log(number);*/

/*value=1000000n;
console.log(value,typeof(value));

function print()
{
    var age=10;

    console.log(age);

    if (true){
        var age=20;
        console.log(age);
    }
    console.log(age);
}
print();*/

//Operators
/*let x=6;
let y=9;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(parseInt('23')+y);*/

/*let x=5;
let y=19;
// console.log(x=y);
console.log(x==y);
console.log(x===y);
console.log(x!=y);
console.log('2'!==y);
console.log(x>y);
console.log(x<y);*/

/*let age=17;
let liecense=true;
let adult=false;
console.log((age>=18)||liecense);    //eligible to get liecense
console.log(liecense);           //user has liecense
console.log(liecense && (age>=18));  //user can drive*/

/*let a = 5,
  b = 15,
  c = 25;
if (a > b && a > c) {
  console.log("a is greatest");
} else if (b > a && b > c) {
  console.log("b is greatest");
} else if (c > a && c > b);
{
  console.log("c is greatest");
}

if(a>b && a<c)
{
    console.log("a is second greatest");
}
else if(b>a && b<c)
{
    console.log("b is second greatest");
}
else 
{
    console.log("c is second greatest")
}*/

/*let grade = 'f'; 
switch(grade){
    case 'a':
        console.log("excellent");
        break;
    case 'b':
        console.log("good");
        break;
    case 'c':
        console.log("average");
        break;
    case 'd':
        console.log("poor");
        break;
    case 'f':
        console.log("fail");
        break;
    default:
        console.log("invalid grade");
        break;
}*/

//let name=prompt("enter something");
//console.log(grade);
//let a=parseInt(prompt("Enter first number"));
//let b=parseInt(prompt("Enter second number"));
//console.log(a+b);
//console.log(typeof(a));

/*let day=parseInt(prompt("Enter day no."));
 let time=parseInt(prompt("Enter time"));

 switch(day){
  case 1:
    console.log("Today is Sunday");
    break;

     case 2:
    console.log("Today is Monday");
    break;

     case 3:
    console.log("Today is Tuesday");
    break;

     case 4:
    console.log("Today is Wednesday");
    break;

     case 5:
    console.log("Today is Thursday");
    break;

     case 6:
    console.log("Today is Friday");
    break;

     case 7:
    console.log("Today is saturday");
    break;

    default:
      console.log("Enter day between 1 to 7");
      break;

 }
 if(day>=1 && day<=7){
  if(time>=0 && time<=12)
  {
  console.log("Good morning");
  }else if(time>12 && time<=18)
  {
    console.log("good evening")
    }else if(time>18 && time<=24)
    {
      console.log("Good night");
      }
}  */

//pyramid
/*let i,j;
for(let i=0;i<5;i++){
  let result=" ";
  for(j=5;j>i-1;j--){
    result=result+" "
  }
  for(k=0;k<2*i+1;k++){
    result=result+"*"
  }
  console.log(result);
}*/
/*let balance = 1000;
let choice;
let transactions=[];
do {
  choice = parseInt(prompt("Menu:\n1: Check Balance\n2: Deposit Money\n3: Withdraw Money\n4: Exit"));

  switch (choice) {
    case 1:
      console.log("Check balance");
      console.log("Your balance is: " + balance);
      break;

    case 2:
      console.log("Deposit money");
      let deposit = parseInt(prompt("Enter the amount you want to deposit"));
      if (deposit > 0) {
        balance += deposit;
        console.log("Deposited: " + deposit);
        transactions.push("You deposited money"+deposit);
      } else {
        console.log("Invalid deposit amount");
      }
      break;

    case 3:
      console.log("Withdraw money");
      let withdraw = parseInt(prompt("Enter amount you want to withdraw"));
      if (withdraw <= balance) {
        balance -= withdraw;
        console.log("Withdrew: " + withdraw);
        transactions.push("You withdraw"+withdraw);
      } else {
        alert("Invalid balance");
      }
      break;

    case 4:
      console.log("Exit");
      break;

    default:
      console.log("Enter operation from 1 to 4");
      console.log("Please enter a valid choice (1-4)");
      break;
  }
} while (choice !== 4);

if(choice!=4){
  let start=transactions.length-5;
  console.log("Last 5 transactions");
  for(i=start;i<transactions.length;i++){
    console.log(+transactions[i]);
  }
}*/

/*let arr=[];
//let arr1=new arr();
arr.push(1);
arr.push("hello");
console.log(arr);

arr.pop();   //Follows LIFO
console.log(arr);

//removes first element from array
arr.shift();
console.log(arr);

//add element to start
arr.unshift("Hi");
console.log(arr);

//check if element exists
console.log(arr.includes("Hi"));

//get index of an element
console.log(arr.indexOf(3));

//get length of array
console.log(arr.length);

//loop through element of an array
for(let i of arr)
{
  console.log(i);
}*/

//for in is used to print index
//for of is used to print element

//task
/*let arr=[1,2,3,4,5];
let reversed=[];
for(let i=arr.length-1;i>=0;i--)
{
  reversed.push(arr[i]);
}
console.log(reversed)*/

//console.log(x);
//const x=5;

//function
//basic function with no parameter and return value

/*function greet()
{
  console.log("Hello");
}
greet();

//function with parameter 
function greet_user(username,lastname )
{
  console.log("Hello"+username+lastname);
}
greet_user("Bardan","Karki");

//function with return value
function return_result(a,b)
{
  return a+b;
}
let result=return_result(2,3);
console.log(result);*/

/*function basic_calculatot(num1, num2, opr) {
  switch (opr) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      if (num2 == 0) {
        console.log("Infinity");
      } else {
        return num1 / num2;
      }
      break;

    default:
      return invalid;
  }
}
let result = basic_calculatot(1, 2, "*");
console.log(result);

//function without switch case
function basic_calc(a,b,opr)
{
  let result = a.toString() + opr + b.toString();
  console.log(eval(result));
}

basic_calc(1,2,'+');*/

//ananymous function,arrow function

//object-data structure which is use to store key value pair
/*let new_object={};
let new_object2=new Object;

new_object.name="Ramu";
new_object.age=18;
new_object.salary=1234.56;

console.log(new_object);*/

/*let person={
  firstname:"John",
  surname:"Doe",
  age:18
}
//object methods : entries-return array of key-value pair in an object
let text=Object.entries(person);
console.log(text);

//keys:return key of an object
let key=Object.keys(person);
console.log(key);

let values=Object.values(person);
console.log(values);*/

// let myName={
//   firstname:"bardan",
//   surname:"karki",
//   age:19,
// }

// console.log("My name is "+myName.firstname +" "+myName.surname ,"and age is"+myName.age );

/*  write a function areAnargrams(str1,str2) that retuens true if the two strings are anagramas
    (same letters in different orders),and false otherwise

    Hint:Use object to count frequency of letters
       
    Example: areAnargramas("listen","silent";-true)
              areAnargramas("hello","world"-false)
*/

let arr=[1,2,3];
let [x,y]=arr;

console.log(x);
console.log(y);

let arr1=[1,2,3,4,5];
let newarray=[...arr1];
console.log(newarray);

let A=[1,2];
let B=[3,4];
let C=[...A,...B];
console.log(C);