//home work  sss
document.write("Home work </br>number%3 and 5 : ");
var j=1;
var sum =0;
while(j<=20)
{
    if(j%3==0 && j%5==0)
    {
    document.write(", "+j);
       sum = sum+j; 
    }
    j++;
}
document.write("</br>Total value : "+sum);
