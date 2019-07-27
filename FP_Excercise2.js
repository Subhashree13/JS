/**let myFunction = []

//------------------------------------------
for(var i=0;i<2;i++)
{
    var func = function()
    {
        console.log(i);
    }
    myFunction.push(func);
}
myFunctions[0]();
myFunction[1]();
**/

//output for above 2 2 but expected 0 1

//alternative

let myFunction = [];
function getFunction(i)
{
    
        var func = function()
        {
            
            console.log(i);
           
        }
    return func;
    
}
for(var i=0;i<2;i++)
{
    
  
    myFunction.push(getFunction(i));
    

}
myFunction[0]();
myFunction[1]();