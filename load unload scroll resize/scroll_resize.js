//Scroll Event 
window.addEventListener('scroll',function(){
    console.log("Scrolling");
    this.document.write("Scrolling ");
});
//Resize Event 
window.addEventListener('resize',function(){
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`Height : ${height},Width :${width}`);
    this.document.write(`Height : ${height},Width :${width}`);
});
//toggle
const details =document.querySelector("details");
details.addEventListener("toggle",function(e)
{
    console.log(e.target.open);
    var result=e.target.open;
    if(result==true)
    {
        alert("Toggle Open");
    }
    else
    {
        alert("Toggle Close");
    }
});