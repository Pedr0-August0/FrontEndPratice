let team1Points = 0;

let team2Points = 0;

let team1Score = document.getElementById("team1-points");

let team2Score = document.getElementById("team2-points");

team1Score.textContent = team1Points

team2Score.textContent = team2Points

function team1Add1Points() {
  team1Points += 1
  team1Score.textContent = team1Points
}

function team1Add2Points() {
  team1Points += 2
  team1Score.textContent = team1Points
}

function team1Add3Points() {
  team1Points += 3
  team1Score.textContent = team1Points
}

function team2Add1Points() {
  team2Points += 1
  team2Score.textContent = team2Points
}

function team2Add2Points() {
  team2Points += 2
  team2Score.textContent = team2Points
}

function team2Add3Points() {
  team2Points += 3
  team2Score.textContent = team2Points
}

function newGame() {
  team1Points = 0;
  team2Points = 0;
  team1Score.textContent = team1Points
  team2Score.textContent = team2Points
}