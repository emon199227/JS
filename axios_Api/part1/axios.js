console.clear();
//using put 
axios
.put("https://jsonplaceholder.typicode.com/posts/1", {

    body: JSON.stringify({
        id:1,
      title: "foolish",
      body: "barish",
      userId: 1,
    }),
})
   
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));

//using  patch
axios
.patch("https://jsonplaceholder.typicode.com/posts/1", {

    body: JSON.stringify({
       
      body: "techno",
     
    }),
})
   
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));
//using  Delete
axios
.delete("https://jsonplaceholder.typicode.com/posts/1")

    
   
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));