//console clear 
console.clear();
//href 
console.log(location.href);
//protocol
console.log(location.protocol);
//host name 
console.log(location.hostname);
//port number 
console.log(location.port);
//path name 
console.log(location.pathname);
//find html element 
var locationDiv=document.querySelector(".location-div");
//select first p
var p1 =locationDiv.children[0];
//href element peint by p1 
p1.textContent = location.href;
//select second p
var p2 =locationDiv.children[1];
//hostname element peint by p2 
p2.textContent = location.hostname;
//select third p
var p3 =locationDiv.children[2];
//protocol element peint by p3 
p3.textContent = location.protocol;
//select 4th p
var p4 =locationDiv.children[3];
//port element peint by p2 
p4.textContent = location.port;
//select 5th p
var p5 =locationDiv.children[4];
//path name element peint by p2 
p5.textContent = location.pathname;
//find button
const visitbutton = document.getElementById("visit-button");
//listiner add
visitbutton.addEventListener("click",function(){
    location.assign("http://www.google.com")

});