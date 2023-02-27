function doSomething() {
  console.log("WOW!")
}

let homeScore = 0
let awayScore = 0

function homeAddOne() {
  homeScore += 1
  drawScore("home-score", homeScore)
}

function homeAddThree() {
  homeScore += 3
  drawScore("home-score", homeScore)
}

function awayAddOne() {
  awayScore += 1
  drawScore("away-score", awayScore)
}

function awayAddThree() {
  awayScore += 3
  drawScore("away-score", awayScore)
}

function reset() {
  homeScore = 0
  awayScore = 0
  drawScore("home-score", homeScore)
  drawScore("away-score", awayScore)
}

function drawScore(id, value) {
  let score = document.getElementById(id)
  if (value <= 9) {
    score.innerText = "0" + value
  }
  else {
    score.innerText = value
  }
}