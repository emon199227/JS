//find the element
const input = document.querySelector('input');
const para = document.querySelector("p");
//copy event
input.addEventListener('copy',function()
{
    para.innerText="You Haved Copies";
});

//cut event
input.addEventListener('cut',function()
{
    para.innerText="You Haved Cut";
});

//paste event
input.addEventListener('paste',function()
{
    para.innerText="You Haved Paste";
});