// Call Stack & Hoisting -> process in which variable declaration and function declaration shift to th top of the scope


// {
// sayName("krishna")
// function sayName(finalName){
//           console.log(finalName);
// }
// }

// sayName("krishna")



// variable case 

// console.log(age)  // undefined 

// var age = 25;



// check function expression syntax case 

// sayHello();
// let sayHello = function(){
//     console.log("hello ")    // reference 
// }




 // class level hosting is not possible 

//  const object1 = new Human();
//  class Human{

//  } 

//  const object1 = new Human(); // isme chal raha h




// function -> first class citizen
// 1. assign the variable
// 2. as argument 
// 3. return 
// 4. data structure 
// 5. as PropertyIndexedKeyframes
// code here 


// function greetMe(greet,FullName){
//     console.log("hello", FullName)
//     greet();
// }

// let greet = function(){
//     console.log("Hii") 
// }
// greetMe(greet,"krishna")

// greet() ;    // assign

// function greetMe(greet,FullName){
//     console.log("hello", FullName)
//     greet();
// }

// function Solve(number){
//     return function(number){
//         return number*number ;
//     }
// }

// let ans = Solve(5)

// let finalAns = ans(10)
// console.log(finalAns)

