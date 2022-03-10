//array related method 
var names = ["Anis","Sagir","Miraj","Faysal"];
document.write(names+"</br>now array shift </br>");
//array shift 
names.shift();
document.write(names+"</br>now array unshift </br>");
//array unshift 
names.unshift("Emon");
document.write(names+"</br>now array Splice add element  </br>");

//array splice using add element 
names.splice(3,0,"Karim","Rahim");
document.write(names+"</br>now array Splice remove element  </br>");
//array splice using remove element
names.splice(2,1);
document.write(names+"</br>now array Slice  </br>");

//slice array 
var newName = names.slice(1,2);
document.write(newName+"</br>");
document.write(names+"</br>now array Sorted   </br>");
//sorted 
var sortNames= names.sort();
document.write(sortNames+"</br>now array reverse   </br>");
//reverse 
names.reverse();
document.write(names+"</br>now Number sorting    </br>");
//number sorting 
var num = [10,5,15,2,30,1];
num.sort(function(a,b)
{
    return a-b;
});
document.write(num+"</br>End.........    </br>");
