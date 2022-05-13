function computerPlay() { //picks rock paper or scissors
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)]; /*math.random returns number from 0 (inclusive) to 1 (exclusive)
    in this specific case, this means if its from 0 to 5, than it will return 0 , 1 ,2 ,3 , or 4 but not 5 
    therefore, our options array has an index from 0-2, but our length is 3. math.random()*options.length forces to pick a number between 0-2 as the 3 is not included (exclusive)
    math.floor() returns the result of math.random * options.length as an integer rounded to the nearest whole number
    math.floor is used to give our options an integer value, without it options is not fed an integer */
    return choice

}

let ties = 0
let wins = 0
let losses = 0
let gametotal = 0

//function for player selection 
function playerSelection(input) {
    console.log("player's selection is: " + input);
    return input
}


//function playes one round of rock paper scissors 
function playRound(playerChoice, computerChoice) {
    //allows playRound function to operate five times 
    if (gametotal < 5) {
        let correctChoice = ['rock', 'scissors', 'paper']


        // if player and computer have the same item 

        if (playerChoice == computerChoice) {
            let result = (playerChoice + " ties with " + computerChoice + ".");
            // updates results sentence with result by using id and innertext to update
            document.getElementById('results').innerText = result
            ties = ties + 1
            document.getElementById('ties').innerText = ties + 1 //updates ties amount 
            return // breaks function once this result happens

        }


        // losing conditions

        else if ((playerChoice == 'rock' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'rock')) {
            let result = ("You lose!" + " " + computerChoice + " beats " + playerChoice);
            document.getElementById('results').innerText = result
            losses = losses + 1
            document.getElementById('losses').innerText = losses //updates losses amount 
            gametotal = gametotal + 1
            return // breaks function once this result happens
        }

        // if you didn't enter the wrong input, tie, or lose, then you won!

        else { //((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice =='scissors' & computerChoice == 'rock')){
            let result = ("You win! " + playerChoice + " beats " + computerChoice);
            document.getElementById('results').innerText = result
            wins = wins + 1
            document.getElementById('wins').innerText = wins //updates wins number
            gametotal = gametotal + 1 
            return  // breaks function once this result happens 
        }
    }
    // if you have more wins than losses, you won! 
    else if (wins > losses) {
        document.getElementById('finalresult').innerText = 'Congratulations! You beat Hal 9000!';
    }
    // else, you lost! 
    else {
        document.getElementById('finalresult').innerText = 'You lost to a computer. Better luck next time!';
    }
}

