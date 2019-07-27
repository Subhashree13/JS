"use strict"
/**
 * Function Binding
 * which means executing the function or calling the function with the help of object
 * types:
 * static function binding
 * dynamic function binding
 * 
 * 
 */

 //static function binding,when the object has to do some functionality forever
 let person1 = {
     pName:'Subha',
     sayName: function()
     {
         console.log(`im ${this.pName}`);
     }
 }
 person1.sayName();

 let person2 = {
    pName:'Shree',
    sayName: function()
    {
        console.log(`im ${this.pName}`);
    }
}
person2.sayName();
//alertnative
function sayNameForAll()
{
    console.log(`im ${this.pName}`);
}
let person1 = {
    pName:'Subha',
    sayName: sayNameForAll//function binded with the object, the default object of the functions is Window Object
}
person1.sayName();

let person2 = {
   pName:'Shree',
   sayName: sayNameForAll//function binded with the object, the default object of the functions is Window Object,but in strict mode the function doesn't belongs to any object unless specified by the user
}
person2.sayName();
sayNameForAll();//error if use strict is used else output is im undefined


//dynamic function binding, when the object has to do some functionality on demand
function doTeach(sub,duration,location)
{
console.log(`the trainer ${this.name}, is teaching ${sub} for ${duration} at ${location}`);
}

let trainer = {name:"Nag"};
Object.preventExtensions(trainer);
//way 1 dynamic function binding
//for indivisual parameters use call method
doTeach.call(trainer,'JS',8,'Bangalore');

//way2 use apply method if you want to pass array of parameters

doTeach.apply(trainer,['JS',8,'Bangalore']);

//using call and apply will bind and execute only once

//way 3, use bind method so that you can bind once and exceute many times

//this bind method will be hold by another Function
let newF = doTeach.bind(trainer,'JS');
newF(8,'bangalore');
newF(5,'chennai');

//function will never read object data unless they are specified by the userin JS

