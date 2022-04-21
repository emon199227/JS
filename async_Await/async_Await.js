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
        resolve('Task 3 is  complted ');
    });
};
const taskFour = () => {
    return new Promise((resolve,reject) =>{
        resolve('Task 4 is complted ');
    });
};

async function callbackTask(){
   const t1 = await taskOne();
   console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
   
    const t3 = await taskThree();
    console.log(t3);
   
    const t4 = await taskFour();
    console.log(t4);
   
}
callbackTask();

//  const callbackTaskEs6 = async() => {
//     const t1 = await taskOne();
//     console.log(t1);
//      const t2 = await taskTwo();
//      console.log(t2);
    
//      const t3 = await taskThree();
//      console.log(t3);
    
//      const t4 = await taskFour();
//      console.log(t4);
    
//  }
//  console.log(callbackTaskEs6);