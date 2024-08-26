let userScore=0;
let compScore=0;

let msg=document.querySelector("#msg");
let user_Score=document.querySelector("#user-score");
let comp_Score=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");



showWinnner=(userWin,userChoice,compChoice)=>{
    if(userWin){

        userScore++;
        user_Score.innerText=userScore;
       
        msg.innerText=`You Win!Your ${userChoice} beats the ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        comp_Score.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}

const playgame=(userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);

    //checking the condition
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
           //computer have only two choice scissor or paper
              userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
           userWin= compChoice==="scissor"?false:true
        }
        else{
            //rock paper
           userWin= compChoice==="paper"?true:false;
        }
        showWinnner(userWin,userChoice,compChoice);
    }

}
const drawGame=()=>{
    console.log("Game is draw!")
    msg.innerText="Game draw! Play again";
    msg.style.backgroundColor="black";

}

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    //for selecting the string from the array to check the condition
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];
}





choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playgame(userChoice);
    
    })
})