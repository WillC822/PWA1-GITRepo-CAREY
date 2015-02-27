/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 *
 * William Carey
 * 2.25.15
 * Goal 7 Assign Objects
 *
 */



(function(){
    window.Person=Person;

    Person.jobs = ['Driver','Singer','Photographer','Assistant'];
    Person.actions = ['Sleep', 'Working', 'Eating'];

    function Person(name, row){
        console.log("Person Created: ", name);

        this.name = name;

        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

        this.job =  Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        this.row = row;

        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;

    }
    Person.prototype.updates = function(){
        if (Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            id.innerHTML=this.action;
        }
    }
})();