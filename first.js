let userScore = 0
let CompScore = 0

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg")
const btn = document.querySelector("#btn")
const userScorePara = document.querySelector("#userScore")
const compScorePara = document.querySelector("#CompScore")
const user = document.querySelector("#you")
const computer = document.querySelector("#comp")

function colorBlack () {
    document.body.style.backgroundColor="black";
    document.querySelector(`#theme`).style.color = "white"
}

const genCompChoice = () =>{
    const options =["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = () =>{
    msg.innerText = "Game was Draw, Play Agian !!"
    msg.style.backgroundColor = "rgb(79, 9, 9)"
  
}



const showWinner = (userWin, userChoise, compChoice ) =>{

    

    if(userWin) {
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = `YOU WON !! Your ${userChoise} beats ${compChoice} `
        msg.style.backgroundColor = "green"
    } else {
        CompScore++;
        compScorePara.innerText = CompScore;
        msg.innerText = `YOU LOSE !! ${compChoice} beats Your ${userChoise} `
        msg.style.backgroundColor = "red"
    }
}
const playGame = (userChoise) =>{
    const compChoice = genCompChoice();
    user.innerText = `You Choose : ${userChoise}`
    computer.innerText = `Computer Choose : ${compChoice}`

    if (userChoise === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoise === "rock") {
            userWin = compChoice === "paper" ? false : true ;
        } else if(userChoise === "paper") {
            userWin = compChoice === "scissor" ? false : true;  
        } else if( userChoise === "scissor"){
            userWin = compChoice === "rock" ? false : true ; 
        } showWinner (userWin, userChoise, compChoice );
    } 
} 

choises.forEach((choise) => {
    choise.addEventListener("click", ()=>{
        const userChoise = choise.getAttribute("id")
        playGame(userChoise);
    })
})

const toggle = document.getElementById("btn");
const body = document.querySelector("body");

toggle.addEventListener("click", function(){
    this.classList.toggle("bimoon");
    if(this.classList.toggle("bibrightndj")){
        body.style.background= "black"
        body.style.color ="white"
        body.style.transition= "1s";
    } else {
        body.style.background="white"
        body.style.color = "black"
        body.style.transition="1s";
    }
})