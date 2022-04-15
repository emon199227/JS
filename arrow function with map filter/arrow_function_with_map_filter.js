
var students = [
    {
       id:101,
       name:"emon",
        gpa :2.82

    },
    {
        id:102,
        name:"Munna",
         gpa :3.82
 
     },
     {
        id:103,
        name:"kamal",
         gpa :1.50
 
     },
     {
         id:104,
         name:"Rahim",
          gpa :4.00
  
      }
]
//treditonal function
function studentNames(){
    return students.filter(function(x){
       return x.gpa>2
    }).map(function(y){
        return y.name;
    });
}

//arrow function
const studentNames1 = () =>{
    return students.filter((x)=>x.gpa>2).map((y)=>y.name);
}

console.log(studentNames())
console.log(studentNames1())
document.write(studentNames1())