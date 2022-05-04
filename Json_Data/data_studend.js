const data = require('./students_data.json');
for (x in data){
    console.log(x);
    //data content print
    console.log(data[x]);

}
//json formate data upload server
const data2 = {
    name : "emon",
    age : 25
}
console.log(JSON.stringify(data2));
//convert json
console.log(JSON.parse('{"name":"Anis"}'));