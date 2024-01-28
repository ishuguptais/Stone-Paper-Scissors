let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoresPara =document.querySelector('#user-score');
const compScoresPara =document.querySelector('#comp-score');

const genCompChoice =()=>{
    const options=['rock','paper','scissors'];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log('Game is Draw');
    msg.innerText="Game Draw,Play Again."
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScoresPara.innerText=userScore;
        msg.innerText=`You Win!`
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScoresPara.innerText=compScore;
        console.log('You lose');
        msg.innerText="Computer Win,You Lose!"
        msg.style.backgroundColor="red";
    }
};


const playGames=(userChoice)=>{
    console.log('User Choice is',userChoice);

const compChoice=genCompChoice();
    console.log('Computer Choice is',compChoice);
    if(userChoice===compChoice){
        drawGame();
    } 
    else{
         let userWin=true;
         if(userChoice==='rock'){
            //comp-paper/scissors
            userWin=compChoice==='paper'?false:true;
         }else if(userChoice==='paper'){
            userWin=compChoice==='scissors'?false:true;
         }else {
            //paper,rock
            userWin=compChoice==='rock'?false:true;
         }
         showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id')
        playGames(userChoice);
    });
});
