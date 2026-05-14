// let promise1 = ((resolve,reject)=>{

// })

// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set timeout block")
//     },100)
// }

//  let output = getData();                 // asyn function humesha ek promise return karta h 

// await -> 

// fetch api -> 



          
async function getData(){
    // get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // parse json - async
    let data = await response.json()
    console.log(response)
}
getData()

// scenario 
// prepare url / api endpoint
// fetch data -> network call -> async
// process data - > sync