//find the element
const form = document.querySelector('form');
const name = form.querySelector('div #name');
const email = form.querySelector('div #email');
const password = form.querySelector('div #password');

form.addEventListener('submit',formHandler);

//create a function to contror a form
function formHandler(e)
{
e.preventDefault();
const userInfo = 
{
    name: name.value,
    email:email.value,
    password:password.value,
};

console.log(userInfo);
name.value="";
email.value="";
password.value="";

};


