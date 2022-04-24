//async await 

 const makeRequest = async (url) =>{
     const res = await fetch(url);
     if(!res.ok){
         const message = `Error : ${res.status}`;
         throw new Error(message)
     }
     const data = await res.json();
     return data;


 }

 const getdata = () => {
     makeRequest('https://jsonplaceholder.typicode.com/posts')
     .then((res)=>console.log(res))
     .catch((err)=>console.log(err));
 };
 getdata();
//send data 
const createRequest = async (url,config) =>{
    const res = await fetch(url,config);
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message)
    }
    const data = await res.json();
    return data;


}
const sendData = () => {
    createRequest("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: "emon",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
sendData();
//update data 
const updateData = () => {
    createRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
            id : 1,
          title: "Md kalaml",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
updateData();
//Single Update  
const singleupdateData = () => {
    createRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
            
          title: "Md saddam",
         
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
singleupdateData();
//Single Update  
const deleteData = () => {
    createRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
        
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
deleteData();