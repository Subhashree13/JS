//an list can hold duplicate elements while set collections can hold all unique values or elements
let list =[
    "item1",
    "item2"
]

//set
let set = new Set();
set.add("item1");
set.add("item1");
set.add("item1");

console.log(set);


//map
class Owner
{
    constructor(name)
    {
            this.name = name;
    }
}
class Car
{
    constructor(name)
    {
            this.name = name;
    }
}
 let c1 = new Car("Skoda");
 let c2 = new Car("Ford");

 let o1 = new Owner("Subha");
 let o2 = new Owner("Shree");

 let map = new Map();
 map.get(o1,c1);
 map.get(o2,c2);