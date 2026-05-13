//DESCRIPTION ---------->

// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.


 // promise -> resolve , reject 

               // EXAMPLE OF SYNCRONOUS CODE ------>
//  let firstPromise = new Promise((resolve , reject) => {
//      console.log("krishna")
//     //  resolve(1001)      // promised full filled
//       reject(new Error("internal serverr"))      // uncaught
// }
// )



             // EXAMPLE OF ASYNCRONOUS CODE ------>
// function myName(){
//     console.log("my name is krishna")
// }             

// setTimeout(myName,10000)


// let promise1 = new Promise((resolve,reject)=>{
//     let success = true ;
//     if(success){
//         resolve("promise fullfilled")
//     }
//     else{
//         reject("promise rejected")
//     }
// });

// promise1.then((message)=>{
//     console.log("first msg:"+message)
// }).then((message)=>{
//     console.log("second msg:"+ message)        // chaining process 
// }).then((message)=>{
//     console.log("third msg:" + message)
// })

// promise1.then((message) => {
//     console.log(("this ka message"+ meaasge)) // normal process
// }).catch((error)=>{
//     console.log("Error"+error)
// })


// Multiple promise create 

 let promise1 = new Promise((resolve,reject)=>{
        setTimeout(resolve,1000,"first")
 })

 
 let promise2 = new Promise((resolve,reject)=>{
        setTimeout(resolve,2000,"second")
 })

 
 let promise3 = new Promise((resolve,reject)=>{
        setTimeout(resolve,3000,"third")
 })

 Promise.add([promise1,promise2,promise3]).then((values) => {
    console.log(values)
 })


