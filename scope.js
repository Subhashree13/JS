/**
 * scope is nothing but execution context
 * it is memory/stack frame with argument or local variables to execute functions
 * 
 * phase 1: creation/push
 * 
 * any  variable which is declared with var keyword always gets hoisted(bubbles up to the top with undefined value by default) with default value(undefined).
 * 
 * js runtime always creates one global-scope by default
 * we have two scopes function scope and global scope there is no block scope
 * phase 2: execution/pop
 */
console.log("start");
var v = 12;
function f1()
{
    Console.log(v);//returns undefined
    var v = 13;
}
//undefined -- value is not there
//reference error -means value is not there not defined
//problems with var keyword
/**
 * always hoist
 * re-declare same variable within scope
 * no block scope
 * 
 * solution: using 'let' and 'const' keywords with block scope
 */
let v = 12;//let keyword is used for mutable reference
v = 13;
const a = 14;//const keyword is used for immutable reference,,but value/properties can be changed,so try to avoid var keyword

//example
var v = 12;
function f1()
{
    function f2()
    {
        console.log(v);
       
    }
    v = 13;
}
//the example above returns undefined cause the variable v gets bubbled up to the top with the default value as undefined.
