//String veriable calculate length 
var txt = "Bangladesh";
var len =txt.length;
document.write("Total String : "+len);

//String veriable calculate length another way 
var txt1 = "I Love Bangladesh";

document.write("</br>Total String : "+txt1.length);

//String veriable calculate length input by Usee 
var user_input = prompt("Emter Your Text : ")

document.write("<br/>"+user_input+"    ::Total String by User Input  : "+user_input.length);
//index position character number print 
document.write("<br/>"+user_input+"   3 number position charcter is : "+ user_input.charAt(2));

//String text convert to Upper case 
var txt_upper = "i love bangladesh";
txt_upper=txt_upper.toUpperCase();

document.write("</br>Lower case to convert Uppercase : "+txt_upper);

//String text convert to Lower  case 
var txt_lower = "I LOVE BANGLADESH";
txt_lower=txt_lower.toLowerCase();

document.write("</br>Uppercase to convert Lower Case : "+txt_lower);

//String first text concat second text 
var first_txt = "Bangladesh  ";
var secound_txt = "  is Beautiful   ";
var result = first_txt.concat(secound_txt);

document.write("</br> First Text :  "+first_txt+"</br>Second  Text : "+secound_txt+"</br> Final Text  First text concat Second text  :  "+result);

//String Text slice or cut some charcter 
var txt_slice = "Bangladesh  ";

var result = txt_slice.slice(6,10);

document.write("</br>  "+txt_slice+"slice 6no charcter to 9 number caracter :  "+result);

 