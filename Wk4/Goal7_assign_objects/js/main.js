/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 *
 * William Carey
 * 2.25.15
 * Goal 7 Assign Objects
 */

(function(){
    //Define Variables
    var numOfPeople = 3;
    var people = [];
    var names = ['William', 'Kristen','Catharine','Kyle', 'Frank'];
    var interval;


    //Set for loop to account for 3 people
    for(var i = 0; i< numOfPeople ; i++) {
        //Generate a number up to the length of 5
        var personIndex = Math.floor(Math.random()*names.length);

        //use keyword to setup a NEW person object
        var person = new Person(names[personIndex], i+1);

        //Puts name and job on HTML page
        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        //Pushes names out and cuts the index down by one
        people.push(person);
        names.splice(personIndex,1);
}
// clears or resets interval so that only one runs at a time
clearInterval(interval);
// actual interval currently set 30 FPS
interval = setInterval(runUpdate, 1000 / 30);


// function used to populate information into the date field fo the HTML page
function populateHTML(data,field){
    var id=document.getElementById(field);
    id.innerHTML =data;
// function continues to run changing information as the interval continues to run
    function runUpdate(){
        people.forEach(function(element){
           element.update();
        });
    }

})();