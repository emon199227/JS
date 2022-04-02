//find input field
const input = document.querySelector("input");
//blur event
input.addEventListener('blur',function(){
    console.log("Blur is Occured ");
});

//Focus event
input.addEventListener('focus',function(){
    console.log("Focus is Occured ");
});

//focusin event
input.addEventListener('focusin',function(){
    console.log("Focusin is Occured ");
});

//Focusout event
input.addEventListener('focusout',function(){
    console.log("Focus out is Occured ");
});

//Focus event include color
input.addEventListener('focus',function(){
    input.style.background = "orange";
    input.style.padding = "2rem";
});

//blur event include color
input.addEventListener('blur',function(){
    input.style.background = "transparent";
    input.style.padding = "0";
});

//blur event include alert
input.addEventListener('blur',function(e){
    alert(e.target.value);
    //value convert upper case 
    input.value = e.target.value.toUpperCase();
    
});