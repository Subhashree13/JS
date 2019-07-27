//Class
class Person{
    //state
    //constructor
    constructor(name,age)
    {
            this.name = name;
            this.age = age;
    }
    //behaviour
    sayName()
    {
        console.log("im " + this.name);
    }
    sayAge()
    {
        console.log("im " + this.age + " years old.");
    }
}

class Employee extends Person{
    constructor(name,age,salary)
    {
        super(name,age);
        this.salary = salary;
    }

}