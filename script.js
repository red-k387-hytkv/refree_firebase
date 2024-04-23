function increaseScore(side) {
    const scoreBox = document.getElementById(`${side}-score`);
    let score = parseInt(scoreBox.value) || 0;
    scoreBox.value = score + 1;
}

function decreaseScore(side) {
    const scoreBox = document.getElementById(`${side}-score`);
    let score = parseInt(scoreBox.value) || 0;
    if (score > 0) {
        scoreBox.value = score - 1;
    }
}

function resetScores() {
    const leftScoreBox = document.getElementById('left-score');
    const rightScoreBox = document.getElementById('right-score');
    leftScoreBox.value = '0';
    rightScoreBox.value = '0';
}
