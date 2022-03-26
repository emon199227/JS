//loop in array 
//array size assign 
var arrayvalue=parseInt(prompt("Enter a Number ! How many number you input : "));

//array declaration 
var num = new Array();
for(j=1;j<=arrayvalue;j++)
{
    num[j]=parseInt(prompt("Enter the number  "+j+" :"));
}


var sum = 0;
//using loop to access array index 
for(var i= 1;i<=arrayvalue;i++)
{
sum=sum+num[i];

}
document.write("Total sum of array : "+sum);