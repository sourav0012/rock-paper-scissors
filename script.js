let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg=document.querySelector("#msg");
const userScorepara= document.querySelector("#user-score");
const compScorepara= document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];

}

const drawGame=()=>{
    // console.log("It's a draw!");
   msg.innerText = "It's a draw!";
   msg.style.backgroundColor = "yellow";


}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;

        // console.log("You win!hurray!");
        msg.innerText = "You win! Hurray!";
        msg.style.backgroundColor = "green";
        
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("Computer wins!you lose!");
        msg.innerText = "Computer wins! You lose!";
        msg.style.backgroundColor = "red";
        
    }

}

const playGame=(userChoice)=>{
    // console.log("user choice is", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    // console.log("computer choice is", compChoice);

    if(userChoice === compChoice){
        drawGame();
}
else{
    let userWin=true;
    if(userChoice ==='rock'){
        //scissors,paper
        userWin = compChoice ==="paper"?false:true;
    }
    else if(userChoice === 'paper'){
        //rock,scissors
        userWin = compChoice ==="scissors"?false:true;
    }
    else if(userChoice === 'scissors'){
        //paper,rock
        userWin = compChoice ==="rock"?false:true;
    }
    showWinner(userWin);

}
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

})