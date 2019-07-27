//manual
let person = {
    name:'Subha',
    age:25
}
let myName = person.name;
let myAge = person.age;

//de-structuring,means to take the data from object and assign it to the variable
//ex 1
let{name: myName, age:myAge}= person;

//ex 2
let{name ,age} = person;
let name ,age;
({name,age}= person);

//Array de- structuring
let num =[10,20,30];
let [n1,n2,n3] = num;