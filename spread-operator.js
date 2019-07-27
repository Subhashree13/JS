//normal
function display(a,b,c)
{
console.log(a);
console.log(b);
console.log(c);
}
display(10,20,30);
//spread operator
diaplay(...number);
//ex 2 
let number = [1,2,3,8,5,9];
let num= Math.max(...number);

//ex 3
let o1 = {x:10,y:20};
let o2 = {a:30,b:80};
let o3 = {...o1,90,60,...o2}