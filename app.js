function randomNumber(min,max){
    return Math.floor((Math.random()*(max-min+1))+min);
}

function getComputerChoice(){
    let choice=randomNumber(1,3);
    if (choice===1){
        return 'rock';
    } 
    else if (choice===2){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function playRound(playerSelection,computerSelection){

    if (playerSelection==="rock"){
        if (computerSelection==="paper"){
            return false;
        }
        else if (computerSelection==="scissor"){
            return true;
        }
        else{
            return 'draw';
        }
    }
    else if (playerSelection==="paper"){
        if (computerSelection==="scissor"){
            return false;
        }
        else if (computerSelection==="rock"){
            return true;
        }
        else{
            return 'draw';
        }
    }
    else{
        if (computerSelection==="rock"){
            return false;
        }
        else if (computerSelection==="paper"){
            return true;
        }
        else{
            return 'draw';
        }
    }
}

function game(){
    //round1
    let playerChoice=prompt("Choose between Rock Paper Scissor");
    let computerChoice=getComputerChoice();
    let loss=`You Lose! ${computerChoice} beats ${playerChoice}`;
    let win=`You Won! ${playerChoice} beats ${computerChoice}`;
    let winCount=0;
    let lossCount=0;
    let result =playRound(playerChoice.toLowerCase(),computerChoice);
    if (result===true){
        winCount=winCount+1;
        console.log(win);
    }
    else if (result===false) {
    lossCount=lossCount+1;
    console.log(loss);
    }
    else{
        console.log(`It's a draw! Both side chose ${playerChoice}`)
    }
    
    
    //round2
    playerChoice=prompt("Choose between Rock Paper Scissor");
    computerChoice=getComputerChoice();
    loss=`You Lose! ${computerChoice} beats ${playerChoice}`;
    win=`You Won! ${playerChoice} beats ${computerChoice}`;
    result =playRound(playerChoice.toLowerCase(),computerChoice);
    if (result===true){
        winCount=winCount+1;
        console.log(win);
    }
    else if (result===false) {
    lossCount=lossCount+1;
    console.log(loss);
    }
    else{
        console.log(`It's a draw! Both side chose ${playerChoice}`)
    }

    //round3
    playerChoice=prompt("Choose between Rock Paper Scissor");
    computerChoice=getComputerChoice();
    loss=`You Lose! ${computerChoice} beats ${playerChoice}`;
    win=`You Won! ${playerChoice} beats ${computerChoice}`;
    result =playRound(playerChoice.toLowerCase(),computerChoice);
    if (result===true){
        winCount=winCount+1;
        console.log(win);
    }
    else if (result===false) {
    lossCount=lossCount+1;
    console.log(loss);
    }
    else{
        console.log(`It's a draw! Both side chose ${playerChoice}`)
    }

    //round4
    playerChoice=prompt("Choose between Rock Paper Scissor");
    computerChoice=getComputerChoice();
    loss=`You Lose! ${computerChoice} beats ${playerChoice}`;
    win=`You Won! ${playerChoice} beats ${computerChoice}`;
    result =playRound(playerChoice.toLowerCase(),computerChoice);
    if (result===true){
        winCount=winCount+1;
        console.log(win);
    }
    else if (result===false) {
    lossCount=lossCount+1;
    console.log(loss);
    }
    else{
        console.log(`It's a draw! Both side chose ${playerChoice}`)
    }

    //round5
    playerChoice=prompt("Choose between Rock Paper Scissor");
    computerChoice=getComputerChoice();
    loss=`You Lose! ${computerChoice} beats ${playerChoice}`;
    win=`You Won! ${playerChoice} beats ${computerChoice}`;
    result =playRound(playerChoice.toLowerCase(),computerChoice);
    if (result===true){
        winCount=winCount+1;
        console.log(win);
    }
    else if (result===false) {
    lossCount=lossCount+1;
    console.log(loss);
    }
    else{
        console.log(`It's a draw! Both side chose ${playerChoice}`)
    }

    //Final Result
    if (winCount>lossCount){
        console.log("Congratulations! You have won the Game.")
    }
    else if (winCount<lossCount) {
        console.log("You Lost! don't lose hope try again")
    }
    else{
        console.log('It\'s a draw! ')
    }

}
game();