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

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Dr Octopus";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //rounds
    var round = 1;

    function fight(){
        //code will go here
        console.log('in the fight function');

        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

        for(var i=0; i< 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            console.log(f1);
            console.log(f2);



        };
    };

    function winnerCheck(){
        //code will go here
    };

    /************ program starts here*************/
    console.log('program starts');
    fight();


})();