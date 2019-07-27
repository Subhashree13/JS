let products = [
    {id:1,name:"soap",price:20},
    {id:2,name:"surf",price:80},
    {id:3,name:"cake",price:70},
    {id:4,name:"icecream",price:20},
    {id:5,name:"juice",price:20}
]
products.push({id:6,name:"oil",price:89});
let newProduct = products.concat({id:6,name:"oily",price:89});
delete products[0];
//filter
let result = products.filter(function(item){
    return item.price>3000;
})
console.log(result);
//map
let result = products.map(function(item)
{
    item.price = item.price - item.price*0.1;
    return item;
})
console.log(result);
//reduce
let result = products.reduce(function(seed,next)
{
    console.log(seed);
    console.log(next);
    return (seed.price? seed.price:seed)+next.price;
})
console.log(result);
//every
let result = products.every(function(item)
{
return item.price>5000;
})
console.log(result);
//some
let result = products.some(function(item)
{
if( item.price > = 5000)
return item;
})
console.log(result);

//find
let result = product.find(function(item)
{
if(item.price===3000)
return true
else 
return false
})