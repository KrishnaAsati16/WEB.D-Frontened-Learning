// function define ->

// function sayMyName(){
//     console.log("krishna")       // abhi name print nhi hua 
// } 

// function use -> means call
//sayMyName();  // call kiya tb print hua 

// function countNumbers(){
//     for(let i =1; i<=100;i++){
//        console.log(i);
//     }
//     }
// countNumbers();

function printingNumbers(nums){     // nums ->parameter
    console.log("PRINTED NUMBER:"+ nums)
}
printingNumbers(10);  // 10->arrgument

// AVERAGE NIKAL LO SAME H ! EASY H 

// return function ->

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }
// let ans =  getSum(1,2,3);
// console.log("return :"+ans);

//  function getMyName(){
//     let fullname = firstname+ " " + lastname;
//     return fullname;
// }
//  let fullname = getMyName("krishna", "asati");
//  console.log("Full name :" ,fullname);

function getMyName(firstname, lastname) { 
    let fullname = firstname + " " + lastname;
    return fullname;
}

let fullname = getMyName("krishna", "asati");
console.log("Full name:", fullname);

// Output: Full name: krishna asati