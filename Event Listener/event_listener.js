//event lister 
document.querySelector("button").addEventListener("click",myfunction);

//Fuction create 
function myfunction()
{
    alert("Hello ! Emon");

}

//Anonymous function
document.querySelector("#anonymous").addEventListener("click",function(){
   !alert("Hello ! 01712447253"); 
});

//text css add 
var txt = document.querySelector("h1");
//Anonymous function action on add mouse
txt.addEventListener("click",function(){
txt.classList.add("my-style");
});
//Anonymous function action on remove mouse
txt.addEventListener("dblclick",function(){
    txt.classList.remove("my-style");
    });