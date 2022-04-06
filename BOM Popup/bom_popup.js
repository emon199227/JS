//find html button
const pop = document.querySelector("button");
//find html paragraph 
const para = document.querySelector("p");
//button call action function
pop.addEventListener('click',deletesomething);
//create a function 
function deletesomething(){
    let value = confirm("Do you want to Delet ?");
    if(value)
    {
        para.textContent="Deleted Succesful ";
    }
    else
    {
        para.textContent="Deleted UnSuccesful ";
    }
}
