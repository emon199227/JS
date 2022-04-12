//object literals
function studentinfo(name,age){
    return{
        name,
        age
    }
}
console.log(studentinfo("Emon",29));

//object then function
let message = {
   body :  function(){
       return `Hi I am emon<br>`
   }
}
console.log(message.body());
document.write(message.body());
//object then function antoher way
let sms = {
    body (){
        return `object then function antoher way</br>`
    }
 }
 console.log(sms.body());
 document.write(sms.body());
 //object then function antoher 3rd way
let smsOther = {
    'body name' (){
        return `object then function antoher 3rd way`
    }
 }
 console.log(smsOther['body name']());
 document.write(smsOther['body name']());
 