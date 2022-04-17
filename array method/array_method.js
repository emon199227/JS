//find return the valuee of the  first element of that pass certain condition 
let numbers = [5,55,14,5,78];
const evenNumber =(value,index,array)=>{
    if(value%2===0)
    return value;
}
let firstEvenNumber = numbers.find(evenNumber);
let firstEvenNumberIndex = numbers.findIndex(evenNumber);
document.write("Find value array method : <br>Even Number :"+firstEvenNumber+"<br> Even Number Index : "+firstEvenNumberIndex);
//object find return 
const students = [
    {
        id : 101,
        gpa : 1.25
    },
    {
        id : 102,
        gpa : 5.00
    },
    {
        id : 103,
        gpa : 2.50
    },
    {
        id : 104,
        gpa : 4.00
    },
    {
        id : 105,
        gpa : 3.78
    }
    
    
]
//var mainValue= students.find(x=>x.gpa>3);
console.log(students.find(x=>x.gpa>3));