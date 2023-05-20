let userPoints = 0, computerPoints = 0;

function getComputerChoice() {
    let warriors = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*2) + 1;

    return warriors[choice];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "scissors"){
        userPoints++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;}
    else if (playerSelection == "rock" && computerSelection == "paper")
    {
        computerPoints++;
        return `You lose! ${playerSelection} loses to ${computerSelection}.`;}
    else if (playerSelection == "rock" && computerSelection == "rock")
    {    return "That's a tie!";}
    else if (playerSelection == "scissors" && computerSelection == "rock")
    {    
        computerPoints++;
        return `You lose! ${playerSelection} loses to ${computerSelection}.`;}
    else if (playerSelection == "scissors" && computerSelection == "paper")
    {    
        userPoints++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;}
    else if (playerSelection == "scissors" && computerSelection == "scissors")
    {    return "That's a tie!";}
    else if (playerSelection == "paper" && computerSelection == "rock")
    {     
        userPoints++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;}
    else if (playerSelection == "paper" && computerSelection == "scissors")
    {    
        computerPoints++;
        return `You lose! ${playerSelection} loses to ${computerSelection}.`;}
    else if (playerSelection == "paper" && computerSelection == "paper")
    {    return "That's a tie!";}
}

function game(){
    let round_no = 1;

    for (let i = 0; i < 5; i++)
    {
        console.log(`ROUND ${round_no}....`);
        console.log("FIGHT!");

        // let playerSelection = prompt("Select your warrior (rock, paper or scissors)").toLowerCase();
        console.log(playRound(playerSelection, getComputerChoice()));
        console.log(`User: ${userPoints}`);
        console.log(`Computer: ${computerPoints}`);
        console.log("");
        
        round_no++;
    }
}

game();