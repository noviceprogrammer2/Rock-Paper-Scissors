function computerPlay(){ //picks rock paper or scissors
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)]; /*math.random returns number from 0 (inclusive) to 1 (exclusive)
    in this specific case, this means if its from 0 to 5, than it will return 0 , 1 ,2 ,3 , or 4 but not 5 
    therefore, our options array has an index from 0-2, but our length is 3. math.random()*options.length forces to pick a number between 0-2 as the 3 is not included (exclusive)
    math.floor() returns the result of math.random * options.length as an integer rounded to the nearest whole number
    math.floor is used to give our options an integer value, without it options is not fed an integer */
    return choice 

}



//function for player selection 
function playerSelection(){
    let input = prompt("Please enter your choice of rock, paper, or scissors");
    selection = input.toLowerCase() //converts input into lowercase which will be used in rock paper scissors 
    console.log("player's selection is: " + selection);
    return selection
}


//function playes one round of rock paper scissors 
function playRound(playerChoice,computerChoice){
    let correctChoice = ['rock', 'scissors', 'paper']
   // if playerselection is not rock paper or scissors, it tells user to reload page and enter proper choice
    if (correctChoice.includes(playerChoice) == false) {
        console.log('Error! Improper input was entered. Please reload the page and try again.');
        return
    } 

    // if player and computer have the same item 
    else if (playerChoice == computerChoice){
        return playerChoice + " ties with " + computerChoice +"."
    }


// losing conditions
    
    else if ((playerChoice == 'rock' && computerChoice =='paper') || (playerChoice == 'paper' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'rock')){
        return "You lose!" + " " + computerChoice + " beats " + playerChoice
    }

// if you didn't enter the wrong input, tie, or lose, then you won!
    
    else{ //((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice =='scissors' & computerChoice == 'rock')){
        return "You win! " + playerChoice + " beats " + computerChoice
    }

}

//plays rock paper scissors five times 
function game(){
    for (let i = 0; i<5; i++){
        let playerChoice = playerSelection();
        let computerChoice = computerPlay(); 
        console.log(playRound(playerChoice,computerChoice));
    }
}



game(); //calls rock paper scissors game which is played five times total including bad inputs 
