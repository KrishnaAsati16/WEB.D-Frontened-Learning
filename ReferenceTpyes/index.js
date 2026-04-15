let obj = {
    name : "krishna",
   // "full name" : "krishna Asati"   // agar 2 chij rahe ho to inverted comas lagenge 
   age : 19,
   weight : 100,
   height : "8ft",
   greet : function(){
    console.log("Fahhhhhhhh");
   }
}; 

console.log(obj);
obj.greet();

console.log(typeof(obj)) // shallow copy bante h memmory me

