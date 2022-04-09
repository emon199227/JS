//find the html button and add event listenr
document.querySelector("#checkButton").addEventListener("click",function(){
    var num = document.querySelector("#numTextField").value;
    try{
        if(num<5){
            throw "Input is to low";
        }
        else if(num>10) {
            throw "Input is to high";
        }

    }catch(err){
        console.log(err);
        alert(err);

    }
})