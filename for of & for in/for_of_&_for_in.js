//for of 
document.write("For Of <br>");
const names = ["s1","s2","s3","s4"]
for(let name of names){
   // console.log(name);
    document.write(name+"<br>");
}
//for in 
document.write("For in <br>");
let students = {
    ID : 101,
    name : "Emon",
    cgpa :2.82
}
for (let studentName in students){
    document.write(studentName+":"+ students[studentName]+"<br>");
   
}
document.write("<br>another way <br>");
for (let studentName in students){
   
    
    document.write(`${studentName}:${students[studentName]}<br>`);
}