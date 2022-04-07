//find paragraph element 
const para = document.querySelector("p");
//--------------------set time out---------------------------------------------- 
setTimeout(display,5000);
//create function diplay 
function display(){
   para.textContent = "Display function";
   //console.log("display function");
    
}
//find the button
const saveButton = document.querySelector(".save-btn");
//find message paragraph
const message = document.querySelector(".sms");
//add event listenr 
saveButton.addEventListener('click',saveUser);
//create a function saveUser and after 2 second later sms empty 
function saveUser(){
   message.textContent = "User Registration Successful"; 
   setTimeout(()=>{
       message.textContent="";

   },2000)
}

//--------------------set Interval----------------------------------------------
//find the button
const buttonInteval = document.querySelector(".save-button");
//find interval message paragaraph
const txtMessage = document.querySelector(".txt-sms");
//add event listenr 
buttonInteval.addEventListener('click',displayCount);
//create a function displayCount 
function displayCount(){
   let count = 0;
   txtMessage.textContent=count;
   //call set interval
   setInterval(()=>{
      count++;
      txtMessage.textContent=count;
},1000);

    
}