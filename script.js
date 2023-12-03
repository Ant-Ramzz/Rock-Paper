function getComputerChoice(){

    return choice[(Math.floor(Math.random()*choice.length))];
}
function getPlayerChoice(){
    
    let pChoice = window.prompt("Choose Rock, Paper or Scissors!").toLowerCase();
    while (choice.includes(pChoice) == false) {
         pChoice = window.prompt("Invalid option!  Please choose Rock, Paper or Scissors!").toLowerCase();
    }
    return(pChoice)
}

function playround(pSelection, cSelection){
    if (pSelection == cSelection) {
        console.log("Tie, try again");
        return playround(getPlayerChoice(),getComputerChoice());
    }
    return (pSelection == "rock" &&  cSelection == "scissors"||pSelection == "paper" &&  cSelection == "rock" 
    || pSelection == "scissors" &&  cSelection == "paper" ) ?`You Win! ${pSelection} beats ${cSelection}.` :
    `You Lose! ${cSelection} beats ${pSelection}.` ;
    
}



function game(){
    console.log("Best of 5 Rock Paper Scissors!");
    let wons = 0;
    let t
    for (let i =1;i<=5;i++){
        
        t =playround(getPlayerChoice(),getComputerChoice());
        t.includes("Win") ? wons++:0;
        console.log(t);
    }
    (wons <3) ? console.log("You los this set"):console.log("You won this set")
}

const choice =["rock", "paper", "scissors"]
game()

