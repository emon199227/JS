console.clear();
//insert data
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
})
.then((res)=>{
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err));

//update data

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    body: JSON.stringify({
      id : 1,
      title: 'emon',
      body: 'Bangladesh',
      userId: 1,
    }),
})
.then((res)=>{
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err));

//update single data using patch

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    body: JSON.stringify({
    
      title: 'Md emon',
      
    }),
})
.then((res)=>{
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err));

//Deleted data

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
    
})
.then((res)=>{
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err));