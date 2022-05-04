const data = require('./friends_data.json');
console.log(data);
console.log(data.friends[0].name);
//change value 
data.friends[0].name = "Kamal";
console.log(data.friends[0].name);
//Delete value 
delete data.friends[0].name;
console.log(data);

