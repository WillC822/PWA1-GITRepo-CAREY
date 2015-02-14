/**
 * Created by DoC822 on 2/8/15.
 */
/*
William Carey
2.8.2015
Assignment Goal1: Assignment: Duel1
 */

// Self Executing function
(function(){

    console.log("FIGHT!!!");  //Comment: Display to browser console "FIGHT!!!"

    //player name
    var playerOneName = "Spiderman";  //Declare the variable for player One
    var playerTwoName = "Dr Octopus"; //Declare the variable for player Two

    //player damage
    var player1Damage = 20;  // Declare variable for damage to be deducted from Player One
    var player2Damage = 20;  // Declare variable for damage to be deducted from Player Two

    //player health
    var playerOneHealth = 100;   //Declare variable for beginning health for Fighter One
    var playerTwoHealth = 100;   //Declare variable for beginning health for Fighter Two

    //rounds
    var round = 0;  //Declare variable for the rounds of the fight

    function fight(){    //Create a function to start the Fight
        //code will go here
        console.log('in the fight function');  //Comment: Display to browser to show reading from function

        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth); //Alert to show status of fight

        for(var i=0; i < 10; i++){  //Create loop to increase of rounds

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5; //Declare Variable to allow for code to function for decreasing player one damage
            var minDamage2 = player2Damage * .5; //Declare Variable to allow for code to function for decreasing player two damage
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); //Declare Variable to randomize damage and to calculate amount left to player one
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); //Declare Variable to randomize damage and to calculate amount left to player two

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            playerOneHealth-=f1; //Call to make player one inflict damage
            playerTwoHealth-=f2; //Call to make player two inflict damage

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth); //Comment to console to show players names and health

            var results = winnerCheck(); //Declare Variable to check for winner
            console.log(results); //Comment: Display results to console

            if(results === "no winner"){  // If the results are equal display no winner
                round++; // advance round
                alert(playerOneName+":"+playerOneHealth+" *ROUND"+round+" Over* "+playerTwoName+":"+playerTwoHealth); //Alert to show players health and round progression
            }else{
                alert(results); //display fight results
                break; //stop function
            };

        };
    };

    function winnerCheck(){   //Function to check for winner
        console.log("in winnerCheck FN");

        var result="no winner";

        if(playerOneHealth<1 && playerTwoHealth<1){  //If players one and player two health is less than 1, display you both die
            result = "You Both Die";
        }else if(playerOneHealth < 1){ //if players one health is less than one, show player two as winner
            result = playerTwoName+" WINS!!!"
        }else if(playerTwoHealth < 1){ //if players two health is less than one, show player one as winner
            result = playerOneName+" WINS!!!"
        };
        //code will go here
        return result;  // Shows results of match.
    };

    /************ program starts here*************/
    console.log('program starts'); //Comment: shows where the program starts
    fight();


})();