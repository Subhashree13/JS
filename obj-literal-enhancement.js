//ES5

let person1 = {
    name:name,
    age:age,
    3:'three',
    sayName: function(){ }
}

//ES6
//if the property name and variable name are the same then we can declare it as normal variable in ES6
let person2 = {
    name,
    age,
    3:'three',
    sayName(){ }//if its a regular function no need to place colon else you need to place the colon
    //or functions can be written as below as well
    'say Age'(){ }
}