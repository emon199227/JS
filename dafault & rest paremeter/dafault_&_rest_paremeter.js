//dafault prameter
"use strict"
document.write("Dafault Parameter </br>");

function message(text = "No Text Found "){
   console.log(`${text}`)
   document.write(`${text}`)


}
message("I love Je ES6");
document.write("<br>");
message();

//rest parameter
document.write("</br> Rest Parmeter </br>");
function printNumber(x,y,...z){
   document.write(`X= ${x} ,Y= ${y} ,Z= ${z} `)

}
printNumber(10,20,30,40,50);


