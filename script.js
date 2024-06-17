let uesr_scoure = 0;
let com_scoure = 0;

const choies = document.querySelectorAll(".imges");
const yourScoure = document.querySelector("#user-score");
const computerScoure = document.querySelector("#com-scoure");
const msg = document.querySelector("#msg");



choies.forEach((Image) => {
  Image.addEventListener("click", () => {
    const userChoice = Image.getAttribute("id");
    playgame(userChoice);
  })
});


const genComputerChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const renIDX = Math.floor(Math.random() * 3);
  return option[renIDX];
};


const drawGame = () => {
  msg.innerHTML = "Game was Draw. Play again.";
};


const playgame = (userChoice) => {
  const compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    shoWinner(userWin, userChoice, compChoice)
  }
};


const shoWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    uesr_scoure++
    yourScoure.innerHTML = uesr_scoure;
    msg.innerHTML = `You Win! Your ${userChoice} Beats ${compChoice}`;
  } else {
    com_scoure++
    computerScoure.innerHTML = com_scoure;
    msg.innerHTML = `You Lose. ${compChoice} Beats Your ${userChoice}`;
  }
};






