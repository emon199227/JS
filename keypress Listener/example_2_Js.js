document.addEventListener("keypress",function(event){
    var text = event.key;
    document.querySelector("p").innerHTML="You have clicked </br>"+text;

});