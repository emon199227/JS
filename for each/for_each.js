//using  for loop 

document.write("Using for loop <br>");
var num = [10,20,30,40,50];
for (var i=0;i<num.length;i++){
    document.write(num[i]+"</br>");
    

}
//using for each
document.write("Using for Each <br>");
var numbers = [70,80,90,100,110];
var squarenum=[];
//cal each function
numbers.forEach(myFunction)
//create myFunction 
function myFunction(x){
    document.write(x+"</br>");
}
document.write("Using for Each  another way <br>");
numbers.forEach(function (n){
    document.write(n+"</br>");
    squarenum.push(n*n);


})
document.write("</br>Square Number : </br>"+squarenum+"</br>");

//new value assign
document.write("<br> New value assign : <br> main value is : "+numbers+"<br>");
numbers.forEach(function(x,index,arr){
    arr[index] = x+5;
})
document.write("New Value is :"+numbers);