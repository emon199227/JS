//square box
var base = parseFloat(prompt("Enter value of Base : "));
var height = parseFloat(prompt("Enter value of height  : "));
 
var area = base * height;
document.write("Base :"+base+"<br/>Height : "+height+"<br/>value of area for square  : "+area);

//round box
var base_round = parseFloat(prompt("Enter value of Base : "));
var height_round = parseFloat(prompt("Enter value of height  : "));
 
var area_round = (base_round* height_round)/2;
document.write("<br/>Base :"+base_round+"<br/>Height : "+height_round+"<br/>value of area for Round: "+area_round);