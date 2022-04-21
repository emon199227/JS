const taskOne = () => {
    return new Promise((resolve,reject) =>{
        resolve('Task 1 is complted ');
    });
};

const taskTwo = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve('Task 2 is complted '); 
        }, 3000);
    });
};
const taskThree = () => {
    return new Promise((resolve,reject) =>{
        reject('Task 3 is not complted ');
    });
};
const taskFour = () => {
    return new Promise((resolve,reject) =>{
        resolve('Task 4 is complted ');
    });
};

taskOne().then((res)=>console.log(res))
.then(taskTwo)
.then((res)=>console.log(res))
.then(taskThree)
.then((res)=>console.log(res))
.then(taskFour)
.then((res)=>console.log(res))
.catch((err)=>console.log(err));