//Call Back and Higher order function..
//create a function square and assign a parameter 'x'
function square(x){
    console.log(`Square of ${x} : ${x*x}`);
}


//create a function name higher order function and assign value and pass another function
function higherorderfunction(number,callBack){
    callBack(number);

}
higherorderfunction(6,square);