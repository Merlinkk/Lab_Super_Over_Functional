const $ball = document.getElementsByClassName('ball')
const $team1Score = document.getElementById('score-team1')
const $team1Wickets = document.getElementById('wickets-team1')
const $team2Score = document.getElementById('score-team2')
const $team2Wickets = document.getElementById('wickets-team2')
const resetButton = document.getElementById('reset')
const strikeButton = document.getElementById('strike')

var team1Score = 0
var team1Wickets = 0
var team2Score = 0
var team2Wickets = 0

var totalBalls = 0
var ballsFaced1 = 0
var ballsFaced2 = 0
var wickets = 0
var turn = 1
const possibleOutcomes = [0,1,2,3,4,5,6,'W']


strikeButton.onclick = () => {
    totalBalls++
    console.log(totalBalls)
    if(turn == 1){
        var score = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)]
        if (score === 'W'){
            team1Wickets += 1;
            $team1Wickets.textContent = team1Wickets;
            ballsFaced1++
            document.querySelector(`#team1-superover .ball:nth-child(${ballsFaced1})`).textContent = score;
            if (ballsFaced1==6 || team1Wickets == 2){turn = 2}
        }
        else{
            team1Score += score;
            $team1Score.textContent = team1Score
            ballsFaced1++
            document.querySelector(`#team1-superover .ball:nth-child(${ballsFaced1})`).textContent = score;
            if (ballsFaced1==6 || team1Wickets == 2){turn = 2}
        }
    }
    else if (turn==2){
        var score = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)]
        if (score === 'W'){
            team2Wickets += 1;
            $team2Wickets.textContent = team2Wickets;
            ballsFaced2++
            document.querySelector(`#team2-superover .ball:nth-child(${ballsFaced2})`).textContent = score;
            if (ballsFaced2==6 || team2Wickets == 2){turn=0}
            
        }
        else{
            team2Score += score;
            $team2Score.textContent = team2Score;    
            ballsFaced2++ 
            document.querySelector(`#team2-superover .ball:nth-child(${ballsFaced2})`).textContent = score;
            if (ballsFaced2==6 || team2Wickets == 2){turn=0}
        }
    }

    if (totalBalls == 12){
        if (team1Score>team2Score)
        {
            alert("INDIA WINS")
            console.log("INDIA WINS")
        }
        if (team1Score<team2Score)
        {
            alert("PAKISTAN WINS")
            console.log("PAKISTAN WINS")
        }
        if (team1Score==team2Score){
            alert("IT IS A TIE")
        }
    }
}

resetButton.onclick = () => {window.location.reload()}


 

