//find button
const clockBtn = document.querySelector(".clock-btn");
//find sms paragraph 
const clockSms = document.querySelector(".clock-sms");
//--------------------Clock event ---------------------------------
//button add evemtlistener and call function
clockBtn.addEventListener('click',startclock);
//create a function startclock
function startclock(){
   let date = new Date();
   let hours = date.getHours();
   let minute = date.getMinutes();
   let second = date.getSeconds();

   //formate the clock 
   minute = formatTime(minute);
   second = formatTime(second);
   let time = hours + " : "+minute+ " : "+second;
   //set the time in paragaraph 

   clockSms.textContent = time;
   //set Interval
   setInterval(startclock,1000);
}
//time formal like that 01,02,03
function formatTime(value){
   if(value<10){
      value = "0"+value;

   }
   return value;

}