const weapons = document.querySelectorAll('.weapon');
const selectAudio = document.querySelector('#select-weapon-audio');
const fightAudio = document.querySelector('#fight-audio');
const fightBtn = document.querySelector('#fight-btn');
const playerWeaponImg = document.querySelector('#player-weapon');
const computerWeaponImg = document.querySelector('#computer-weapon');
let roundDisplay = document.querySelector('#round');
let scoreDisplay = document.querySelector('#score');
let roundOutcome = document.querySelector('#round-outcome');
let playerWeapon = "", computerWeapon = "",
    playerWeaponImgPath = "", computerWeaponImgPath = "";
    questionMarkImgPath = "../assets/img/question_mark.jpg"
let userPoints = 0, computerPoints = 0, round_no = 1;


function selectWeapon(){
    selectAudio.currentTime = 0;
    selectAudio.play();

    if(playerWeapon != ""){
        let lastSelectedWeapon = document.querySelector(`#${playerWeapon}`);
        lastSelectedWeapon.classList.remove('weapon-selected');
    }

    playerWeapon = this.id;
    this.classList.add('weapon-selected');
    playerWeaponImgPath = `../assets/img/${playerWeapon}.jpg`
}

function getComputerWeapon() {
    let weapons = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random()*3) + 1;
    let weapon = weapons[choice-1];

    computerWeaponImgPath = `../assets/img/${weapon}.jpg`

    return weapon;
}

weapons.forEach(weapon => weapon.addEventListener('click', selectWeapon));

fightBtn.addEventListener('click', function(){
    playRound(playerWeapon)});

function playRound(playerWeapon){
    if(playerWeapon=="")
        return alert("Please, select a weapon.");

    let computerWeapon = getComputerWeapon();
    let outcome = "";

    fightAudio.currentTime = 0;
    fightAudio.play();

    playerWeaponImg.src = playerWeaponImgPath;
    computerWeaponImg.src = computerWeaponImgPath;

    if (playerWeapon == "Rock" && computerWeapon == "Scissors"){
        userPoints++;
        outcome = `You win! ${playerWeapon} beats ${computerWeapon}.`;}
    else if (playerWeapon == "Rock" && computerWeapon == "Paper")
    {
        computerPoints++;
        outcome = `You lose! ${playerWeapon} loses to ${computerWeapon}.`;}
    else if (playerWeapon == "Rock" && computerWeapon == "Rock")
    {    outcome = "That's a tie!";}
    else if (playerWeapon == "Scissors" && computerWeapon == "Rock")
    {    
        computerPoints++;
        outcome = `You lose! ${playerWeapon} loses to ${computerWeapon}.`;}
    else if (playerWeapon == "Scissors" && computerWeapon == "Paper")
    {    
        userPoints++;
        outcome = `You win! ${playerWeapon} beats ${computerWeapon}.`;}
    else if (playerWeapon == "Scissors" && computerWeapon == "Scissors")
    {    outcome = "That's a tie!";}
    else if (playerWeapon == "Paper" && computerWeapon == "Rock")
    {     
        userPoints++;
        outcome = `You win! ${playerWeapon} beats ${computerWeapon}.`;}
    else if (playerWeapon == "Paper" && computerWeapon == "Scissors")
    {    
        computerPoints++;
        outcome = `You lose! ${playerWeapon} loses to ${computerWeapon}.`;}
    else if (playerWeapon == "Paper" && computerWeapon == "Paper")
    {    outcome = "That's a tie!";}

    round_no++;

    roundOutcome.textContent = outcome;
    scoreDisplay.textContent = `You : ${userPoints}  -  ${computerPoints} : Computer`;
    roundDisplay.textContent = `ROUND ${round_no}`;

    if(userPoints == 5)
        restartGame("User");
    else if (computerPoints == 5)
        restartGame("Computer");
}

function restartGame(winner){
    alert(`${winner} Wins!`);

    userPoints = 0;
    computerPoints = 0;
    round_no = 1;

    roundOutcome.textContent = "";
    scoreDisplay.textContent = `You : ${userPoints}  -  ${computerPoints} : Computer`;
    roundDisplay.textContent = `ROUND 1`;

    playerWeaponImg.src = questionMarkImgPath;
    computerWeaponImg.src = questionMarkImgPath;
}