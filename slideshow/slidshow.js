//find slideshow element and qunatity 
const slideshoElement = document.querySelectorAll(".slideshow-element");
let countElemts = 1; 

setInterval(() => {
    countElemts++;
    let currentElement = document.querySelector(".current");
    //console.log(currentElement);
    //current class  remove 
    currentElement.classList.remove("current");
    //current class  add
    if(countElemts>slideshoElement.length){
       slideshoElement[0].classList.add("current");
       countElemts=1;
    }
    else{
        currentElement.nextElementSibling.classList.add("current");

    }
    
    
}, 2000);