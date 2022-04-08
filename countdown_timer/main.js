//final date assign
const eidulfiter = "02 may 2022";
//coundown box finding 
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minsDiv = document.getElementById("mins");
const secondDiv = document.getElementById("sec");
//create a function countdown 
function countdown(){
    //date convert to date formate 
    const eidDay = new Date(eidulfiter);
    //current date convert to date format
    const currentDate = new Date();
    //calculate total time 
    const totalTime = (eidDay - currentDate)/1000;
    //calculate total day hour minute and second 
    const day = Math.floor(totalTime/3600/24);
    const hours = Math.floor((totalTime/3600) % 24);
    const minute = Math.floor(totalTime/60) %60;
    const second = Math.floor(totalTime)%60;
    //final value assing on the div 
    daysDiv.textContent = day;
    hoursDiv.textContent = hours;
    minsDiv.textContent = minute;
    secondDiv.textContent = second;


//call to function
 }
countdown();
//persecound interval looping 
setInterval(countdown,1000);
