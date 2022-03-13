//element find and add
var link=document.getElementsByTagName("a")[0];
document.write("</br>Find element : "+link+"</br>");
link.innerHTML="Emon";
link.style.textDecoration="none"
link.style.color="red";
link.style.fontSize="1.5rem";
link.href="http://google.com";
//another element find and add
var heading1=document.getElementsByTagName("h1")[0];
heading1.innerHTML="Love U ";
//html element create 
var heading3=document.createElement("h1");
var txt=document.createTextNode("This heading 3");
heading3.appendChild(txt);
var mydiv=document.getElementById("my-div");
mydiv.appendChild(heading3);
//remove element 
var head2= document.getElementsByTagName("h1")[1];
mydiv.removeChild(head2);

//add elemnt in top
var heading0=document.createElement("h1");
var txt0=document.createTextNode("This heading 0");
heading0.appendChild(txt0);
mydiv.insertBefore(heading0,heading1);