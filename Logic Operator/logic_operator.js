//Calculate grading point using logic operator 
var marks=prompt("Enter Your markes : ");
if(marks>100 || marks<0)
{
    document.write("Invalid ");
}
else if(marks>=80 && marks<=100)
{
    document.write("Your Grad : A+ ");
}
   
else if(marks>=70 && marks<=79)
{
    document.write("Your Grad : A ");
}
else if(marks>=60 && marks<=69)
{
    document.write("Your Grad : A- ");
}
    
else if(marks>=50 && marks<=59)
{
    document.write("Your Grad : B ");
}
    

else if(marks>=40 && marks<=49)
{
    document.write("Your Grad : C ");
}
    

else if(marks>=34 && marks<=39)
{
    document.write("Your Grad : D ");
}
else
{
    document.write("Faild  ");
}
   

