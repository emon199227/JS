console.clear();
const div = document.querySelector("div");
//mouse click
div.addEventListener("click",function(e){
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.innerHTML);
    console.log(e.target.textContent);
    
});

//button event

const buttons = document.querySelectorAll("btn");

Array.from(buttons).map((button)=>{


button.addEventListener("click",function(){
    console.log("Clicked");
    
});
});

