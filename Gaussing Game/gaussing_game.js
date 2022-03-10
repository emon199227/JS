//Gaussing Game 
var numofWon=0;
var numofLost=0;
var j=5;
for(var i=1;i<=5;i++)
{
  
    var gausNumber =parseInt(prompt("Enter the number 1 to 5 :"+j));
    var randomNumber = Math.floor(Math.random()*5)+1;
    if(gausNumber==randomNumber)
    {
        document.write("</br>You Have Won ! ! !");
        numofWon++;
    }
    else
    {
        document.write("</br>You Have Lost. Random Number was : "+randomNumber);
        numofLost++;
    
    }
    j--;
}

document.write("</br></br></br>Total Number of Won : "+numofWon+"</br></br>Total Number of Lost : "+numofLost);
