class Student {
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    //set 
    set studentName(name){
        this.name = name ;
    }
    //get
    get studentInfo(){
        return this.id +" "+this.name;

    }

}
let s1 = new Student(101,"Emon");
console.log(s1.id);
console.log(s1.name);
//set call
s1.studentName = "Ontu ";
console.log(s1.name);
console.log("call get : "+s1.studentInfo);

