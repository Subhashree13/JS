"use strict"



function Trainer(name)
{
    this.name = name;
    
}
    
    Trainer.prototype.doTeach= function(sub)
    {
        console.log(this.name + " teaching " + sub);
        let notes = sub + "-notes";
        let trainerName = this.name;
        let doLearn = function()
        {
            console.log(this.name + " learning with " + notes +" with trainer " + trainerName);
        }
        console.log("Teaching ends...");
        return doLearn;
    }
        class Employee
        {
                constructor(name)
                {
                    this.name = name;
                }
                dowork()
                {
                    console.log(this.name + " working ");
                }
        }
    
        function sessionStart()
        {       
            let trainer = new Trainer("Nag");
            let e1 = new Employee("E1");
            let e2 = new Employee("E2");
            let doLearn = trainer.doTeach("javascript");
            doLearn.call(e1);
            doLearn.call(e2);
            e1.dowork();
            e2.dowork();
        }

sessionStart();