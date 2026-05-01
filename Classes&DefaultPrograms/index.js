// class Human {
//    // properties
   
//        age
//     // age = 13 ///public
//     #wt = 75  // private 
//     ht = 80;


//     constructor(newAge, newHeight){
//              this.age= newAge
//              this.ht = newHeight
//     }

//     // behaviour 
     
//   walking(){
//         console.log("i am walking", this.#wt);
//  }

//       runing(){
//         console.log("I am running")
//       }

//       get fetchWeight(){
//         return this.#wt

//       }

//       set modiWeight(val){
//         this.#wt = val
//       }
// }

// let obj = new Human(50,190);
// // console.log(obj.#wt)
// console.log(obj.ht,obj.age)

// obj.walking();


// DEFAULT PARAMETER -> allow to use function with default values

// function SayName(myName){
//   console.log("my name is :", myName)
// }

// // SayName()          // show undefined without value pass kare 
// SayName("krishna")   // value pass ki to undefined show nhi ho rha h 


// function solve(val = { age:15, wt:90, ht:190}) // arr bhi insert kr sakte h 
// {
//   console.log("hello ji",val)
// }
// solve()


// null and undefined case 
function solve(val= rahul)
{
  console.log("hello ji -> ",val)   // null wale me null print hota h 
}
solve(null)


function solve(val= "rahul")
{
  console.log("hello ji -> ",val)   // undefined wale me default value print hota h 
}
solve(undefined)

