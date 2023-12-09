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
function updateScore(winner){
    const score = document.getElementById("Score")
    z = score.textContent.split("-")
    winner == 0 ? z[0] = parseInt(z[0]) + 1 :
    winner ==1 ? z[1] = parseInt(z[1]) + 1 :
    false;
    score.textContent = `${z[0]}-${z[1]}`
    
    
}

function playround(pSelection,cSelection){

    if (pSelection === cSelection) {
        console.log("Tie, try again");
        return;
        //return playround(getPlayerChoice(),getComputerChoice());
    }
    result.textContent =((pSelection == "rock" &&  cSelection == "scissors"||pSelection == "paper" &&  cSelection == "rock" 
    || pSelection == "scissors" &&  cSelection == "paper" ) ?`You Win! ${pSelection} beats ${cSelection}.` :
    `You Lose! ${cSelection} beats ${pSelection}.` );
    ((pSelection == "rock" &&  cSelection == "scissors"||pSelection == "paper" &&  cSelection == "rock" 
    || pSelection == "scissors" &&  cSelection == "paper" ) ? updateScore('0') :
    updateScore('1'));

    
}
function changes (){
    const score = document.getElementById("Score")
    z = score.textContent.split("-")

    if (parseInt(z[0]) === 5){
        result.textContent="You Won! The Computer Lost!";
        rock.setAttribute('disabled','true');
        paper.setAttribute('disabled','true');
        scissors.setAttribute('disabled','true');
    }
    else if (parseInt(z[1])=== 5){
        result.textContent= "You Lost! The Computer won!";
        rock.setAttribute('disabled','true');
        paper.setAttribute('disabled','true');
        scissors.setAttribute('disabled','true');
    }
}


function game(){
    console.log("Best of 5 Rock Paper Scissors!");
    let wons = 0;
    let t
   //for (let i =1;i<=5;i++){
        
        t =playround(getPlayerChoice(),getComputerChoice());
        t.includes("Win") ? wons++:0;
        console.log(t);
   // }
   // (wons <3) ? console.log("You lost this set"):console.log("You won this set")
}

const choice =["rock", "paper", "scissors"];
const rock = document.getElementById("rock"); 
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = document.getElementById("Score")
const result = document.getElementById('Winner')
rock.addEventListener("click", function(){
    playround(rock.id,getComputerChoice())   
});
paper.addEventListener("click", function(){
    playround(paper.id,getComputerChoice())   
});
scissors.addEventListener("click", function(){
    playround(scissors.id,getComputerChoice())   
});
const observer = new MutationObserver(changes)
observer.observe(score,{
    childList: true
});