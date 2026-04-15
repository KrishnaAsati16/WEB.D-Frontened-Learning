// let arr = [1, 2, 3, 4, 5, 6];

// // Array constructor
// let brr = new Array(55, 66, 9990);

// brr.push("01");
// console.log(brr);        // [55, 66, 9990, '01']

// brr.pop();
// console.log(brr);        // [55, 66, 9990]

// brr.shift();             // removes first element
// console.log(brr);        // [66, 9990]

// brr.unshift("50");       // inserts at beginning
// brr.push("90");
// brr.push("80");
// brr.push("70");
// console.log(brr);        // ['50', 9990, '90', '80', '70']


// let sliced = brr.slice(1, 3);
// console.log(sliced);     // [9990, '90']  → index 1 and 2 (end is exclusive)
// console.log(brr);        // original unchanged

// brr.splice(1,2,'krishna')    // [1,2] -> index 1 and 2  se value removed and insert krishna 
// console.log(brr)

// MAP -> method

// let arr = [10,20,30];

// arr.map((number) => {
//     console.log(number+1);
// })
    
//   let ansArray=arr.map((number) => {      // square wala 
//     return number*number;
// })

// console.log(ansArray)

// arr.map((number,index) => {
//     console.log(number);
//     console.log(index);
// })

// FILTER -> METHOD

// let arr = [10,20,3,11,22,47,90,100]

// let evenArray = arr.filter((number) => {
//     if(number % 2 ==0){
//         return true;
//     }
//   else{
//     return false ;
//   }
// });

// console.log(evenArray)

// REDUCE -> METHOD

// let arr = [10,20,30,40]

// let ans = arr.reduce((acc,curr) =>{
//     return acc + curr;
// },0);

// console.log(ans);

// let arr = [some thing]
// arr.sort();

// console.log(arr);

// console.log(arr.indexof(9));

// let arr = [10,20,30];    // FOR EACH

// let length = arr.length;
// console.log("length: "+ length)

// traditional loop 

// for(let index = 0; index <length; index++){
//     console.log((arr[index]));
// }

// arr.forEach((value,index) =>{   // traversing
//     console.log("Numbdr:", value, " Index: ", index );
// })

//let obj = {           // FOR IN ->
//     name : "love",
//     age:25,
//     weight:85,
//     greet: function(){
//         console.log("hello")
//     }
// };

// for(let key in obj) {
//     console.log(key," ",obj[key]);
// }


// let arr = [10,20,30]    // FOR OFF ->
// for(let value of arr){
//     console.log(value);
// }

// let fullName = "krishna";

// for(let val of fullName){
//     console.log(val);
// }


// functions in array 

// let arr = [10,20,30,40,50,60,70]

// function getSum(arr) {
//     let len = arr.length;
//     let sum = 0;
//     for(let index =0; index<len; index++){
//         sum = sum + arr[index];
//     }
//     return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);

// let arr = [10,20,30,40,50,60,70]

// function getSum(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//          sum = sum + value;
//     });
//     return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);

