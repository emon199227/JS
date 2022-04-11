"use strict"
//hoisting value assign then variable declar
x=20;
if(true){
    y=10;
    document.write(`y = ${y}`);
    var y;
}
document.write(`x = ${x}`);
var x;