function f1()
{
    //console.log("before :: LOG");
    console.log("f1()");
   // console.log("after :: LOG");

}
function f2()
{
   // console.log("before :: LOG");
    console.log("f2()");
   // console.log("after :: LOG");

}
//Higher Order Function (HOF),higher order programing,  
//through function composition from small functions we can make complex function
//means this function takes other functions as parameter and returns functions as well
//means they can be reused again and again
function f3(f)
{
    console.log("before :: LOG");
    if(f)
    {
        f();
    }
    console.log("after :: LOG");

}
let f = function()
{
    console.log("" + f + "");
}

//example of HOF
let isMin = function (n) {return n<1000}
let isMax = function (n) {return n>100}

//HOF
let logicalAndFunction = function(f1,f2){
    return function(n)
    {
        return f1(n) && f2(n)
        }
}
let and = logicalAndFunction(isMin,isMax);
console.log(and(20,5000));