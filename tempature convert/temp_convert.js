//Farhenit to celsious Conversion 
var farhenhit = parseFloat(prompt("Enter your Farhenhit value : "));
var cels = (farhenhit - 32) * (5/9);
document.write(":::Farhenhit to celsious conversion :::<br/>Your Farhenhit value is :"+farhenhit+"<br/>Celsious Value is : "+cels);

//Celsious  to Farhenhit  Conversion 
var cels = parseFloat(prompt("Enter your Celsious value : "));
var farhenhit = (cels * (9/5))+32;
document.write("<br/>:::Celsious to Farhenhit conversion :::<br/>Your Celsious value is :"+cels+"<br/>Farhenhit Value is : "+farhenhit);