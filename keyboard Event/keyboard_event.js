//find text area 
const textarea = document.querySelector('textarea');
//keydown
textarea.addEventListener('keydown',function(){
   console.log("key Down "); 
});
//keyPress
textarea.addEventListener('keypress',function(){
    console.log("key Press "); 
 });
 //keydown
textarea.addEventListener('keyup',function(e){
    console.log("key UP "); 
 });
 //asci value 
 textarea.addEventListener('keyup',function(e){
    console.log(e.keyCode); 
 });
  //value code 
  textarea.addEventListener('keyup',function(e){
    console.log(e.code); 
 });
 //Shift key 
 textarea.addEventListener('keyup',function(e){
     if(e.shiftKey)
     {
        console.log("Shift + "+e.key);
     }
     
 });

 //Repeat
textarea.addEventListener('keydown',function(e){
    if(e.repeat)
    {
        alert("do not repeat ");

    }
     
 });

