//image assign in array
var photos = ["images/slide-1.jpg","images/slide-2.jpg","images/slide-3.jpg"];
var imagetag=document.querySelector("img");


var count=0;
//previous button script 
function prev()
{
    count--;
    if(count<0)
    {
      count=photos.length-1;
      imagetag.src =photos[count]; 
    }
    else
    {
       imagetag.src=photos[count]; 
    }

}


function next()
{
    count++;
    if(count>photos.length)
    {
      count=0;
      imagetag.src =photos[count]; 
    }
    else 
    {
       imagetag.src=photos[count]; 
    }

}

