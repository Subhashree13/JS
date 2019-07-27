/** traditional way of creating an object
 * var obj = new Constructor
*/
//the  proerty can have special characters if written in single quote, they can be read in dot notation and square bracket notation
var config = new Object();
config.url ="http://";
config.httpMethod = "GET";
config.onSuccess = function()
{
    console.log("I'm running on success");
}

//or using literals, without using the new keyword
var newConfig = {
    url :"http://",
httpMethod : "GET",
onSuccess : function()
{
    console.log("I'm running on success");
}
}

//Array/List Object size is unlimmited by default
var arr = new Array();
arr[0] = "item1";
arr[1] = "item2";
arr.push("item3");

//or using literals
var newarr = ["item1","item2"];

//Regular Expression
var adharPattern = new RegExp("\\d{4}-\\d{4}-\\d{4}");
//or
var newAdharPattern = /\d{4}-\d{4}-\d{4}/;

//Function
var add = new Function("arg1","arg2","var result = arg1+arg2", "return result");

function add(arg1,arg2)
{
var result = arg1 + arg2;
return result;
}