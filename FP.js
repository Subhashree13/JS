/**
 * 
 * Functional Programming (FP)
 * 
 * what: functions in JS act as first class citizen , thus treating the function as values
 * 
 * 
 */
//how to create function in javscript
/**
 * function declaration
 * and 
 * function expression
 */
//function declaration
/**
 * always get hoisted with fnction object
 * function object got created at scope creation phase
 */

function add(n1,n2)
{
    return n1+n2;
}
console.log(add(12,13));
//function expression
let add = function(n1,n2)
{
return n1+n2;
}
console.log(add(n1,n2));


//function parameter
function func(a)
{
console.log(a);
//if we pass the function without parameters then by default function takes argument which is a special object where all parameters are held
}
func();//since no parameter is passed then it returns undefined
func(12);//12
func(12,13);//12
func(12,13,14);//12
//we cannot overload function by parameter in JS
function getFood()
{
    return "no food";
}
function getFood(pay)
{
    return "biryani";
}
console.log(getFood());//biryani, hence we cannot overload function by parameter

function sum()
{
    let arg = arguments.length,i=0;
    if(i<arg)
    {

    }
}
//functions with rest parameters i.e; ...rest
function func2(n1,n2,...rest)
{
console.log(arguments);
}

//Functional Programming principles and  concepts
/**
 * function is a value or object i.e:first class citizen, thus we dont need object to creat function
 * i.e; we can assign to variable directly
 * 
 */
function greet()
{
    Console.log("Hello");
}
let sayHello = greet;
//the parameter of a function can be a function
function greet(f)
{
    console.log("-*-*-*-*-");
    if(f)
    {
        f();
    }
    console.log("-*-*-*-*-");
}
greet();
let ka = function(){
    console.log("hello");
}

//sorting
let num = [1,20,8,10,3];
let asc = function(x,y){return x-y}
console.log(num.sort(asc));


//return type of a function can be other function
function teach(sub)
{
    console.log("teaching"+ sub);
    let learn = function()
    {
        console.log("learning" + sub);
    }
    console.log("teaching ends...");
    return learn();
}
//Function Closer
//closer is a function having access to the parent scope even after parent function has closed
//memory management is note manual in JS and hence garbage collection happens in JS
//ALL THE FUNCTION DATA WILL BE PRESENT IN STACK MEMORY


function teach(sub)
{
    console.log(`teaching ${sub}`);
    let notes =`${sub}-notes`;
    //nested function, here learn function is the child of teach function 
    //and hence can now access the notes variable in the teach function
    function learn()
{
    console.log(`learning with${notes}`);
}
learn()
    console.log("teaching ends...");
}
let learnFunc = teach("JavaScript");//teach scope
learnFunc();//here the learnFunc can have access to the notes variable in  th eteach function

//Practical example of function closer
//counter module
//to abstract public behaviour of any modules
let count = 0;
function inc()
{
    count+=1;
}
function get()
{
    return count;
}
//alternative
//make changes to the init method  so that it is no tmore in the global scope
//so keep the function within ()
//design pattern -- self executable function/immeddiately invokable function expression(IIFE)
//BELOW FUNCTION is an anonymous function since it is function without name and it can be executed only once now
const counter = (function ()
{
    let count = 0;//private

    //public
function inc()
{
    count+=1;
}
function get()
{
    return count;
}
})()

