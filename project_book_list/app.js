//element selection 
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const button = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

//event listenr 
button.addEventListener('click',function(e){
    e.preventDefault();
    //data validation 
    if (title.value == '' ){
        alert("Title is empty ! please input Title Data ");
    }
     else if(author.value == '' ){
         alert("Author is empty ! please input Author Data ");
     }
     else if(year.value == ''){
         alert("year is empty ! please input Year Data ");
     }
    else{
        //create new element like that title author and year 
        const newRow = document.createElement('tr');
        //create new title 
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        //create new Author 
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
         //create new year
         const newYear = document.createElement('th');
         newYear.innerHTML = year.value;
         newRow.appendChild(newYear);
         //book list row introducing chaild 
         bookList.appendChild(newRow);
        
    }
    //after data insert then value is null validation 
    title.value='';
    author.value='';
    year.value='';

});