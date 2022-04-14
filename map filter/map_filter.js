//for each use square 
document.write("For Each Using :");
var numbers = [10,20,30,40,50];
var squareNumber = [];
numbers.forEach(function(x){
    squareNumber.push(x*x);
})
document.write("Square Number :"+squareNumber+"<br>");
//using map
document.write("Map Using : <br>");
var num = [2,3,4,5,6];
var squareNum = num.map(function(n){
    return n*n;
})
document.write("Square Number Another  :"+squareNum+"<br>");

//using Filter
document.write("Filter Using : <br>");
var mainNumber = [12,15,18,2,4,33,8,45,5,50];
var filterNum = mainNumber.filter(function(k){
    return k>10;
})
document.write("Filter Number   :"+filterNum+"<br>");