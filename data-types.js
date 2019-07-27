//JS  has two modes non strict mode and strict mode by default it is the former one, so we can use "use strict at file level or function level"
//undefined
var v;
//string
var myName = "Subha";
//DYNAMIC STRING
var trainer = "nag";
var dynamicString = "The trainer is " + trainer;
//or make use of back tilt where in we can use expressions and we can write multipline strings as well,this is called
//string interpolation or interpolated strings (ES6)
//var dynamicStringEX = `The trainer is ${}`
//number
var count = 1;
var cost = 3000;
//boolean
var isFound = true;
/** 
 * falsy values
 * undefined,false,0,"",null,NAN
*/
/**
 * javascript naming convention
 * variable or function name - Camel Case naming convention
 * class - Pascal naming convention
 * constructor - capital
 */
//Complex types or Reference types ==> Object
//Class / Constructor below example till ES5
//every function in JS returns undefined by default if not mentioned
/**
 * function Person(name , age)
{
    //state
this.name = name;
this.age = age;
//objects can have behaviours
Person.prototype.sayName = function(){
    console.log("I am  " + this.name);
}
Person.prototype.sayAge = function(){
    console.log("I am  " + this.age + "years old");
}

}
 var P1 = new Person("Subha",25);
 var P2 = new Person("shree",25);
 P1.sayName();
 P2.sayAge() ;

 */

/**
 * OUTPUT FORABOVE IS 
 * P1
Person {name: "Subha", age: 25, sayName: ƒ, sayAge: ƒ}
P2
Person {name: "shree", age: 25, sayName: ƒ, sayAge: ƒ}
this is called object level redundancy,  means the sayName and sayAge properties are duplicated by the two person objects
 */
//but the above problem can be solved using Prototype design patterns
//prototype is the parent object for all objects in javascript
//After ES5
"use strict"
class PersonExample
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    sayName()
    {
        console.log("name is " + name);
    }
    sayAge()
    {
        console.log("age is " + age);
    }
}
var P1 = new PersonExample("Subha",25);
//TO CHECK IF OBJECT IS EXTENSIBLE
console.log(Object.isExtensible(P1));//true
console.log(Object.isSealed(P1));//false
console.log(Object.isFrozen(P1));//false
P1.teachSkill = "JS";//add new property
var P2 = new PersonExample("shree",25);
Object.preventExtensions(P2);
/**
 * by default all javascripts object are extensible and configurable and modifiable
 * which means we can add new properties on them and by configurable we mean we can add/delete properties
 */
delete P1.name;//delete a property
Object.seal(P1);