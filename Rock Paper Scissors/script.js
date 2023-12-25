let choices = document.querySelectorAll(".choice");
let msgPara = document.querySelector(".msg");
let userScoreMsg = document.querySelector("#your-score");
let compScoremsg = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

const showWinner = (winMessage, yourChoice, compChoice)=> {

    if(winMessage === "You Win"){
        msgPara.innerText = `${winMessage}, your ${yourChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor = "green";
        userScoreMsg.innerText = userScore;
        
    } else {
        msgPara.innerText = `${winMessage}, Computer's ${compChoice} beats your ${yourChoice}`;
        msgPara.style.backgroundColor = "red";
        compScoremsg.innerText = compScore;
    }
}


const setWinner = (userWin) => {
    let winMessage="";
    if(userWin) {
        winMessage = "You Win";
        userScore++;
    } else {
        winMessage = "You Lose";
        compScore++;
    }
    return winMessage;
}

const matchDraw = () => {
  console.log("Match was draw");
  msgPara.innerText = "Draw";
  msgPara.style.backgroundColor = "rgb(2, 2, 22)";
};

const compGenChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let compChoice = Math.floor(Math.random() * 3);
  return options[compChoice];
};

const playgame = (yourChoice) => {
  let userWin = true;
  console.log(` your choice is ${yourChoice}`);
  let compChoice = compGenChoice();
  console.log(` computer choice is ${compChoice}`);

  // when computer choice and your choice is same
  if (yourChoice === compChoice) {
    matchDraw();
  } else {
    if (yourChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (yourChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    let winMessage = setWinner(userWin);
    showWinner(winMessage, yourChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let yourChoice = choice.getAttribute("id");
    playgame(yourChoice);
  });
});
