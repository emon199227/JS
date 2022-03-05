//using loop part 2 sum looping number
var first =parseInt(prompt("Enter Your First Number : "));
var second = parseInt(prompt("Enter Your Second  Number : "));
var sum = 0;
for (var i=first;i<=second;i++)
{
    sum = sum+i;
}
document.write("Result : "+sum);