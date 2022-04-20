//Call Back and Higher order function..
const taskOne = (callBack) =>{
    console.log("Task One ");
    callBack();
};

const taskTwo = (callBack) =>{
    setTimeout(()=>{
        console.log("Task Two :Data Loading");
        callBack();
     },3000);
    
};
const taskThree = (callBack) =>{
    console.log("Task Three ");
    callBack();
};
const taskFour = (callBack) =>{
    console.log("Task Four ");
    callBack();
};
const taskFive = () =>{
    console.log("Task Five ");
    
};
taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive();

            });

        });

    });
});

console.log("Hi");

document.querySelector('button').addEventListener('click',()=>{
    console.log("Button is clicked");
});
console.log("Bye");