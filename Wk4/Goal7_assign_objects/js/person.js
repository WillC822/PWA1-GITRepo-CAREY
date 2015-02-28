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

    //add object to global window object - main.js will use it
    window.Person=Person;

    //defines all jobs and actions that can be selected
    Person.jobs = ['Driver','Singer','Photographer','Assistant','Teacher'];
    Person.actions = ['Sleep', 'Working', 'Eating'];

    //function created to cycle through actions, names, jobs so that they are all random
    function Person(name, row){
        console.log("Person Created: ", name);

        this.name = name;
        //sets intial action for each person randomly
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

        //sets job per person randomly
        this.job =  Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        //Defines row so JS knows what row to update in HTML
        this.row = row;

        //displays intial action
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;
    }

    //Prototype runs and randomizes actions, jobs and persons randomly at a set interval
    Person.prototype.updates = function(){
        if (Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            id.innerHTML=this.action;
        }
    }
})();