//valu add or sub value declar or fixed 
var num1=10;
var num2=20;
var sum = num1+num2;
var sub = num1 - num2;
document.write("value declared already <br/>Sum = "+sum+"<br/> Sub = "+sub+"<br/>");

//valu add or sub value input from user  
var value1=prompt("Enter your First Number : ");
var value2=prompt("Enter your First Number : ");
value1=parseInt(value1,10);
value2=parseInt(value2,10);
var addition= value1 + value2;
var subtract = value1 - value2;
document.write("value form user <br/>First value :"+value1+"<br/>Second value :"+value2+"<br/>Addition = "+ addition +"<br/> Subtract = "+subtract);