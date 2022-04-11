//spread operator 
function addNumber(x,y,z){
   return x+y+z;
}
let number = [1,2,3]
document.write("Spread operator add : "+addNumber(...number));
let anotherNumber =[5,6,...number]
document.write("</br>Push array : "+anotherNumber);
//concat using 
let number1 = [1,2,3]
let number2 = [4,5,6]
let final = number1.concat(number2);
document.write("<br>Using Concat : "+final+"<br>");
//concat with out using
let finalNumber = [...number1,...number2]; 
document.write("<br>Without Using Concat : "+finalNumber+"<br>");
//object concat without using concat function
let p1={
   name : "Emon",
   age : 29

}
let p2={
   country : 'Bangladesh',
   hobbies :'Programming'
}
let p = [...p1, ...p2];
console.log(p)