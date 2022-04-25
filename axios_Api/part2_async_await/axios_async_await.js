console.clear();
//get data 
const makeRequest = async (config) => {
  return await axios(config);
};
const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
};
getData();
//create data 
const createData = () => {
  makeRequest({
    url : "https://jsonplaceholder.typicode.com/posts",
    method : "post",
    data : JSON.stringify({
      title:"Emon create",
      body:"body emon",
      userId: 1,
    }),

  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
};
createData();
//Update  data 
const updateData = () => {
  makeRequest({
    url : "https://jsonplaceholder.typicode.com/posts/1",
    method : "put",
    data : JSON.stringify({
      id:1,
      title:"karim",
      body:"karim",
      userId: 1,
    }),

  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
};
updateData();
//Delet  data 
const deletData = () => {
  makeRequest({
    url : "https://jsonplaceholder.typicode.com/posts/1",
    method : "delete",
   

  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
};
deletData();