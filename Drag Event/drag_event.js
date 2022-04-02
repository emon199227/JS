//find the element
const div = document.querySelector('div');
const para = document.querySelector("p");
//drag start
para.addEventListener('dragstart',function(e){
e.dataTransfer.setData("Text",e.target.id);

});
//drag over
div.addEventListener('dragover',function(e){
e.preventDefault();

});

//drop
div.addEventListener('drop',function(e){
    let id = e.dataTransfer.getData("Text");
    div.appendChild(document.getElementById(id));
    e.preventDefault();

});