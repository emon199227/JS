//how to create promise 
const promise1 = new Promise((resolve,reject)=>{
    let completedpromise = false;
    if(completedpromise){
        resolve("complted promise 1");
    }
    else{
        reject(new Error("Not complted promise 1"));
    }
});
promise1
.then((res)=>{
    console.log(res);
})
.catch((err) =>{
    console.log(err.message);
    console.log("Line number count error :"+err.message);
});