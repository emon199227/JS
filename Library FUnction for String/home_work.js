//Home Work
document.write("::Home Work ::<br/>1.get 1st name from user <br/> 2.get 2nd name from user  <br/> 3.add without using library function  <br/> 4.print full name  <br/> 5.total length of full name  <br/> 6.convert full name into uper case ");
//input first name from user 
var first_name = prompt("Enter Your First Name  : ");
//input last name from user 
var last_name = prompt("Enter Your First Name  : ");
//add first name and last name 
var full_name= first_name+" "+last_name;
//print full name 
document.write("<br/>:::Result:::  <br/> Full Name :  "+full_name);
//total length of full name 
document.write("<br/> Total length :"+full_name.length);
//convert full name into upper case 
var txt_home_work=full_name.toUpperCase();
document.write("<br>convert upper case : "+txt_home_work);