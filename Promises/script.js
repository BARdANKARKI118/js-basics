//promises

// let myPromise=new Promise((resolve,reject)=>{
//     let isCakeavailable=true;

//     if (isCakeavailable){
//         resolve("Promise resolve");
//     }
//     else{
//         reject("Promise reject");
//     }
// });

// console.log(myPromise);

// let response = fetch("https://fakeapi.net/products")
//   .then((res) => {
//   return res.json();
// })
// .then((msg) => {
//   console.log(msg);
// })
// .catch((err) => {
//   console.log(err);
// });


// console.log(response);


// //Async Await
// async function print(){
//   return 'Hello world';
// }

// console.log(print());

// async function fetchData(){
//     try{
//         let response=await fetch("https://fakeapi.net/products");
//         let data=await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// fetchData();

let numPromise = new Promise((resolve, reject) => {
  let data = Math.floor(Math.random() * 100 ); 

  if(data%2 === 0){
    resolve(`${data} is even`);
  }
  else{
    reject(`${data} is Odd`);
  }
})
numPromise.then((response) => {
  console.log(response);
}). catch((error) => {
  console.log(error);
});


console.log(numPromise);