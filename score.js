var buttonOne = document.querySelector("#plr1");
var buttonTwo = document.querySelector("#plr2");
var scoreOne = document.querySelector("#scr1");
var scoreTwo = document.querySelector("#scr2");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var limit = document.querySelector("h3 span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

buttonOne.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            scoreOne.classList.add("winner");
            scoreTwo.classList.add("loser");
            gameOver = true;
        }
        scoreOne.textContent = p1Score;
    }

});

buttonTwo.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        scoreTwo.textContent = p2Score;
        if (p2Score === winningScore) {
            scoreTwo.classList.add("winner");
            scoreOne.classList.add("loser");
            gameOver = true;

        }
    }

});
reset.addEventListener("click", function() {
    freset();

});

function freset() {

    p1Score = 0;
    p2Score = 0;
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
    scoreOne.classList.remove("winner");
    scoreTwo.classList.remove("winner");
    scoreOne.classList.remove("loser");
    scoreTwo.classList.remove("loser");

    gameOver = false;
}
numInput.addEventListener("change", function() {
    limit.textContent = this.value;
    winningScore = Number(this.value);
    freset();

    if (winningScore < 0 || winningScore === 0) {
        window.location.reload(true);
    }


});