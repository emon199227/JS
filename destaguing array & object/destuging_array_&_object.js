//array destructure 
let numbers = [10,20,30,40,50]
let [num1,num2,num3,num4,num5]= numbers
document.write("array destructure :<br><br><br>"+"Number 1:"+num1+"<br>"+"Number 2:"+num2+"<br>"+"Number 3:"+num3+"<br>"+"Number 4:"+num4+"<br>"+"Number 5:"+num5+"<br>");

//swap variable 
let a=100,b=200;
document.write("Before Swap: <br> A = "+a+"<br>"+"B = "+b+"<br>");
[a,b]=[b,a]
document.write("After Swap: <br> A = "+a+"<br>"+"B = "+b+"<br>");

//Object destructure 
const studentInfo = {
    id : 101,
    fullName :"Emon",
    cgpa : 2.82,
    language :{
        native :'Banla',
        beginer : 'English'
    }

}
const{id,fullName,cgpa,language} = studentInfo
document.write("Object destructure : <br> Id:"+id+"<br>"+"Name :"+fullName+"<br>"+"CGPA :"+cgpa+"<br>"+"Native Language  :"+language.native+"<br>"+"Beginer Language :"+language.beginer+"<br>");

//Function destructure 
document.write("Function destructure : <br>")
const studentBio =({id,nickName})=>{
    document.write(`${id},${nickName}`);

}
//create e object
const student ={
    id:202,
    nickName : "Mofiz"
}
studentBio(student)