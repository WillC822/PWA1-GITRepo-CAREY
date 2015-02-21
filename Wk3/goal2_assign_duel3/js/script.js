/**
 * Created by DoC822 on 2/8/15.
 */
/*
William Carey
2.8.2015
Assignment: Develop Duel2
 */

// Self Executing function

(function fight(){

    console.log("FIGHT!!!");  //Comment: Display to browser console "FIGHT!!!"
/*
    //player name
    var playerOneName = "Spiderman";  //Declare the variable for player One
    var playerTwoName = "Dr Octopus"; //Declare the variable for player Two

    //player damage
    var player1Damage = 20;  // Declare variable for damage to be deducted from Player One
    var player2Damage = 20;  // Declare variable for damage to be deducted from Player Two

    //player health
    var playerOneHealth = 100;   //Declare variable for beginning health for Fighter One
    var playerTwoHealth = 100;   //Declare variable for beginning health for Fighter Two

*/
    var fighter1_txt =  document.querySelector('#sm').querySelector('p');
    var fighter2_txt =  document.querySelector('#do').querySelector('p');
    var round_txt = document.querySelector('h5');
    var button = document.querySelector('#fight_btn');

    console.log();

    //setup click event
    button.addEventListener('click',fight, false);
   /*
    //create the above in array form
    var fighter1 = ['SpiderMan',20,100];  //Formed array for fighter 1 name, damage and health
    var fighter2 = ['Dr Octopus',20,100]; //Formed array for fighter 2 name, damage and health
    */

    var fighters = [
        {
            name:'Spider Man',   //index for name
            damage:20,           //index for damage
            health:100           //index health
        },
        {
            name:'Dr Octopus',   //index for name
            damage:20,           //index for damage
            health:100           //index health

        }];


    //rounds
    var round = 1;  //Declare variable for the rounds of the fight

    //create DOM innerhtml text for top of HTML page
    round_txt.innerHTML = "Click Fight Button to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":   " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":   " + fighters[1].health;

    function fight(){    //Create a function to start the Fight
        //code will go here
        //console.log('in the fight function');  //Comment: Display to browser to show reading from function
        //alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]); //Used array index to get fighter name and fighter health

        fighter1_txt.innerHTML =fighter[0].name + ':    ' + fighters[0].health;
        fighter2_txt.innerHTML =fighter[1].name + ':    ' + fighters[1].health;

        //determine damage
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5);
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5);

        //inflict damage
        fighters[0].health -= f1;
        fighters[1].health -= f2;

        console.log(fighters[0].health, fighters[1].health);


        //function
        //for(var i=0; i < 10; i++){  //Create loop to increase of rounds

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            //var minDamage1 = fighter1[1] * .5; //Declare Variable to allow for code to function for decreasing player one damage using array index
            //var minDamage2 = fighter2[1] * .5; //Declare Variable to allow for code to function for decreasing player two damage using array index
            //var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1); //Declare Variable to randomize damage and to calculate amount left to player one using array index
            //var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2); //Declare Variable to randomize damage and to calculate amount left to player two using array index

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            //fighter1[2]-=f1; //Call to make player one inflict damage
            //fighter2[2]-=f2; //Call to make player two inflict damage

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            //console.log(fighter1[0]+":"+fighter1[2]+" "+fighter2[0]+":"+fighter2[2]); //Changed comment to show array to console to show players names and health

            //Check for winner
            var results = winnerCheck(); //Declare Variable to check for winner
            console.log(results); //Comment: Display results to console
            //alert(results); //added alert to show results of fight

        round_txt.innerHTML = 'Round #' + round + 'Results:';
        round++;
        if (result === 'no winner')
        {
            fighter1_txt.innerHTML =fighter[0].name + ':    ' + fighters[0].health;
            fighter2_txt.innerHTML =fighter[1].name + ':    ' + fighters[1].health;

        }else{
            fighter1_txt.innerHTML = results;
            fighter2_txt.innerHTML = '';

            button.removeEventListener('click', fight, false);

            document.querySelector('.buttonblue').innerHTML = 'Done!!!';


        }


            if(results === "no winner"){  // If the results are equal display no winner
                round++; // advance round
                //alert(fighter1[0]+":"+fighter1[2]+" *ROUND" +round+" Over* "+fighter2[0]+":"+fighter2[2]);
                //alert(results); //display fight results
                //break; //stop function   --- closed break to allow function to run
            };

        };


    function winnerCheck(){   //Function to check for winner
        //console.log("in winnerCheck FN");

        var result="no winner";

        if(fighters[0].health <1 && fighters[1].health < 1)
        {  //If players one and player two health is less than 1, display you both die
            result = "You Both Die - GAME OVER!";
        }else if(fighter1[0].health < 1){ //if players one health is less than one, show player two as winner
            result = fighters[1].name +" WINS!!!"
        }else if(fighters[1].health < 1){ //if players two health is less than one, show player one as winner
            result = fighters[0].name +" WINS!!!"
        }
        //code will go here
        return result;  // Shows results of match.
    }

    /************ program starts here*************/
    //console.log('program starts'); //Comment: shows where the program starts
    //fight();


})();