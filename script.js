'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "Correct Number";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 0;
// document.querySelector('.guess').value;



let rnumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // When there is no input
    if(!guess) {
        document.querySelector('.message').textContent = '🚫 No Number!';
    }


    // when player wins
    else if(guess === rnumber) {
        // document.querySelector('.message').textContent = "🎉 Correct Number!!";
        displayMessage('🎉 Correct Number!!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = rnumber;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }


    }

    // when the guess is wrong
    else if (guess !== rnumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > rnumber ? "📈 Too High!":"📉 Too Low!";
            displayMessage(guess > rnumber ? "📈 Too High!":"📉 Too Low!");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = '😭 You Lost Game';
            displayMessage('😭 You Lost Game');
            document.querySelector('.score').textContent = 0;
        }
    }
    // // when the guess in higher 
    // else if(guess > rnumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = "📈 Too High!";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = '😭 You Lost Game';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }

    
    // // when the guess is lower
    // else if(guess < rnumber){

    //     if(score > 1){
    //         document.querySelector('.message').textContent = "📉 Too Low!";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = '😭 You Lost Game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }


});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    rnumber = Math.trunc(Math.random()*20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
})



