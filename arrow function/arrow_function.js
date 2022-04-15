//treditonal Function
function display1(){
    document.write("Treditional Function </br>");
}
//arrow function 
const display2 =() =>{
    document.write("This Arrow Function </br>")
}
display2();
display1();

//treditonal Function
function message1(){
    return "Treditional Function message  </br>";
}

//arrow function 
const message2 =() =>{
    return "Arraow  Function message  </br>";
}
document.write(message1());
document.write(message2());

//treditonal Function
function add1(num1,num2){
    return "treditonal Function : </br>"+num1+num2+"<br>";
}

//arrow function 
const add2 =(num1,num2) =>{
    return num1+num2;
}
document.write(add1(5,6));
document.write(add2(10,12));