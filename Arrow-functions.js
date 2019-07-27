"use strict"
/**
 * Arrow function
 * 
 * 
 */
//syntax
//in general
// let func = function()
// {
//     console.log("normal function");
// }

//arrow function

// let func = () =>{
//     console.log("normal function");
// }

//ex2
//this arrow function now belongs to the window object since it is declared in the global scope
// let sum = (n1,n2) =>{
// return n1 + n2;     
// }

//why to use arrow function? we can pass it 
//as an parameter or input to another function so that the code looks concise and compact as well.
//ex3

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching javascript");
        
        let askQues = (q) => {
            console.log(this.name + " answering " + q)
        }
        console.log("teaching ends")
        return askQues;
    }
}






//other advantage of arrow function.
//arrow funuctions are not bindable to any other object only those object can access it which have created it but not all
//so mainly used to catch the this 


// 
//ex 4
//console.log(this);//belongs to the window object sincw it is declared globally
//ex 5
// let regFunc = function(){
//     console.log(this);
// }
// regFunc();//returns undefined since this function doesn't belong to any object in the strict mode so it will return undefined
//ex 6
// let arrFunc = ()=>{
//     console.log(this);
// }
//arrFunc();//this returns window since this arrow function now belongs to the window object in strict mode

//ex 7  
// let o1 = {
//     name :"one",
//     regFunc: regFunc,
//     arrFunc: arrFunc
// }
// let o2 = {
//     name:"two"
// }

//ex 8
//o1.regFunc();

//ex 9,regular function, here this function is created under the global scope and assigned to process
// let inc = {
//     num:1234,
//     process: function(){
//         console.log(`the invoice ${this.name} is processed`);
        
//     }
// }
// inc.process()


//ex 10, arrow function
let inc = {
    num:1234,
    process:() =>{
        console.log(`the invoice ${this.num} is processed`);
    }
}
let complete =inc.process();
complete.call(inc);


