function getComputerChoice(){

    return choice[(Math.floor(Math.random()*choice.length))];
}
function getPlayerChoice(){
    
    let pChoice = prompt("Choose Rock, Paper or Scissors!").toUpperCase
    while (choice.includes(pChoice) = False) {
        let pChoice = prompt("Invalid option!  Please choose Rock, Paper or Scissors!").toUpperCase
    }
    return(pChoice)
}

function playround(pSelection, cSelection){
    if (pSelection == cSelection) {
        console.log("Tie, try again");
        return playround(getPlayerChoice(),getComputerChoice());
    }
    return (pSelection == "ROCK" &&  cSelection == "PAPER"||pSelection == "PAPER" &&  cSelection == "ROCK" 
    || pSelection == "SCISSORS" &&  cSelection == "PAPER" ) ?`You Win! ${pSelection} beats ${cSelection}.` :
    `You Lose! ${pSelection} beats ${cSelection}.` 
    
}



function game(){
    
}

const choice =["ROCK", "PAPER", "SCISSORS"]


