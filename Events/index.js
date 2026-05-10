// What is an Event?
// An Event is an action or occurrence that happens in the browser — like a click, keypress, or page load. JavaScript lets you listen for and respond to these events.

// What is an EventTarget?
// An EventTarget is any object that can receive events and have listeners attached to it. This includes DOM elements, window, document, and even custom objects.

// events -> announcement done by brouser.
// event -target -> entity jaha per apka event reccieve hua h 

  
          //  ----------- // code  // code // code -> remember ---------


// let fpara = document.getElementById('fpara');
// fpara.textContent="Hello babbar";

// function changedText(){
//      let fpara = document.getElementById('fpara')
//      fpara.textContent="Krishna";
// }
 
// let fpara = document.getElementById('fpara')

// fpara.addEventListener('click',changedText)

// fpara.removeEventListener('click',changedText)




// phase of event 
// traversing -> div -> article->h1->p(at target face)
// use MDN




// event object -> event triggger= "click"
// When an event happens (click, keypress, etc.), the browser automatically creates an Event Object and passes it to your event handler function. It contains all the details about that event.


// function changedText(event){
//      let fpara = document.getElementById('fpara')
//      fpara.textContent="Krishna";
// }
 
// let fpara = document.getElementById('fpara')

// fpara.addEventListener('click',changedText)

// fpara.removeEventListener('click',changedText)


// Default Action -> 
// using anchir tag 
      // code --> 

// let anchorElement = document.getElementById('fanchor')
//              anchorElement.addEventListener('click',function(event){
//                       event.preventDefault();
//                       anchorElement.textContent = "MAT KAR"            
// });


let paras = document.querySelectorAll('p')

for(let i=0; i<paras.length;i++){
     let para = paras[i]
     para.addEventListener('click',function(){
         alert("you have cllicked on para: "+(i+1)) 
     })
}






