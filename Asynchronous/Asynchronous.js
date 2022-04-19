//Asynchronous programming 
const taskOne = () => {
    console.log("Task 1");
};
const dataLoading = () =>{
    console.log("Task 2 : Data Loading ");

}
const taskTwo = () => {
    setTimeout(dataLoading,2000);
};
const taskThree = () => {
    console.log("Task 3");
};
const taskFour = () => {
    console.log("Task 4");
};
const taskFive = () => {
    console.log("Task 5");
};
//calling function
taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();