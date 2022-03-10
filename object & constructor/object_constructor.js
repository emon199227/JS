//object create and print 
var std = {
    name: "Karim",
    age: 27,
    cgpa: 3.92,
    lang: ["Bangla", "English", "Hindi"]
}
//print this object 
document.write("Print this object : </br>Name :" + std.name + "</br>Age : " + std.age + "</br>Cgpa : " + std.cgpa + "</br>Language : " + std.lang);
document.write("</br>:::Adding constructor::</br>");
//adding constructor 
function Student(name, age, cgpa, lang) {
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;
    //print function adding 
    this.display=function(){
        document.write("Name : "+this.name);
        document.write("</br>Age : "+this.age);
        document.write("</br>CGPA : "+this.cgpa);
        document.write("</br>Language : "+this.lang);
    }
}
    var student1 =new Student("Emon",28,3.42,["Bangla","English","Spanish"]);
    var student2 =new Student("Munna",30,4.00,["Bangla","English"]);
    var student3 =new Student("Abir",22,2.92,["Bangla","English","Hindi"]);
    document.write("Name : "+student3.name+"</br>Age : "+student3.age+"</br>CGPA : "+student3.cgpa+"</br>Language : "+student3.lang+"</br>");
    document.write("Print a constructor function : </br>");

    student3.display();


