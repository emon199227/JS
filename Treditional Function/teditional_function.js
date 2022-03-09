//create Function 
function square(num)
{
    var result = num*num;
    document.write("Result : "+result+"</br>");
}
square(5);
square(10);

//another function 
function square2(num1,num2)
{
    var result = num1*num2;
    return result;
}
document.write(square2(5,6));

var x = square2(5,10);
document.write("</br>"+x);