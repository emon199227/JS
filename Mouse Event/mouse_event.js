console.clear();
const div = document.querySelector("div");
//mouse click
div.addEventListener("click",function(){
    alert("Click");
});

//double click 
div.addEventListener("dblclick",function(){
         alert("Double Click is occerd");
     });


//mouse down
div.addEventListener("mousedown",function(){
    alert("Mouse Down is occerd");
});

//mouse up
div.addEventListener("mouseup",function(){
    alert("Mouse Up is occerd");
});

//mouse enter 
div.addEventListener("mouseenter",function(){
    alert("Mouse Entered is occerd");
});

//mouse leave 
div.addEventListener("mouseleave",function(){
    alert("Mouse Leave is occerd");
});

//mouse moved 
div.addEventListener("mousemove",function(){
    alert("Mouse Moved is occerd");
});

//mouse Over
div.addEventListener("mouseover",function(){
    alert("Mouse Over is occerd");
});

//screen value
div.addEventListener("mouseover",function(e){
    console.log("Client X : "+e.clientX+"Client Y :"+e.clientY);
    console.log("Offset X : "+e.offsetX+"OffsetY :"+e.offsetY);
});
