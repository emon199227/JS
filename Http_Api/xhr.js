console.clear();
const makeRequest = (method,url,data) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.onload = () =>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror = () =>{
        console.log("Error is here ");
    }
    xhr.send(JSON.stringify(data));
}
//data get 
const getData = () =>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
    

}
getData();
//data Send 
const sendData = () =>{
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
    body: 'bar',
    userId: 1,
    });
    

}
sendData();
//data Update
const updateData = () =>{
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'foodEmon',
        body: 'bar_EMon',
        userId: 1,
    });
    

}
updateData();
//Single data Update
const singleUpdateData = () =>{
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
        
        title: 'Change Data'
        
    });
    

}
singleUpdateData();
//Delet data Update
const deleteData = () =>{
    makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
    

}
deleteData();