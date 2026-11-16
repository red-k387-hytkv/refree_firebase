function increaseScore(side) {
    const scoreBox = document.getElementById(`${side}-score`);
    const score = parseInt(scoreBox.value, 10) || 0;
    scoreBox.value = score + 1;
}

function decreaseScore(side) {
    const scoreBox = document.getElementById(`${side}-score`);
    const score = parseInt(scoreBox.value, 10) || 0;
    if (score > 0) {
        scoreBox.value = score - 1;
    }
}

function resetScores() {
    document.getElementById('left-score').value = '0';
    document.getElementById('right-score').value = '0';
}

function validateInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 2);
}

function rotatePlayersClockwise(side) {
    const playerIds = [];
    for (let i = 1; i <= 6; i++) {
        playerIds.push(`${side}-player-${i}`);
    }

    const playerValues = playerIds.map(id => document.getElementById(id).value);
    playerValues.push(playerValues.shift());
    playerIds.forEach((id, index) => {
        document.getElementById(id).value = playerValues[index];
    });
}

function rotatePlayersCounterClockwise(side) {
    const playerIds = [];
    for (let i = 1; i <= 6; i++) {
        playerIds.push(`${side}-player-${i}`);
    }

    const playerValues = playerIds.map(id => document.getElementById(id).value);
    playerValues.unshift(playerValues.pop());
    playerIds.forEach((id, index) => {
        document.getElementById(id).value = playerValues[index];
    });
}

function resetPlayers(side) {
    const playerInputs = document.querySelectorAll(`.${side}-coat .player`);
    playerInputs.forEach(input => {
        input.value = '';
    });
}

function resetAllPlayers() {
    resetPlayers('left');
    resetPlayers('right');
}

function resetAll() {
    resetAllPlayers();
    resetScores();
}

function toggleServe() {
    const leftServeFlag = document.getElementById('left-serve-flag');
    const rightServeFlag = document.getElementById('right-serve-flag');

    if (leftServeFlag.value === '1') {
        leftServeFlag.value = '0';
        rightServeFlag.value = '1';
    } else {
        leftServeFlag.value = '1';
        rightServeFlag.value = '0';
    }
    updateServeHighlight();
}

function updateServeHighlight() {
    const leftServeFlag = document.getElementById('left-serve-flag').value;
    const rightServeFlag = document.getElementById('right-serve-flag').value;
    const leftPlayer1Input = document.getElementById('left-player-1');
    const rightPlayer1Input = document.getElementById('right-player-1');

    leftPlayer1Input.classList.toggle('serve-highlight', leftServeFlag === '1');
    rightPlayer1Input.classList.toggle('serve-highlight', rightServeFlag === '1');
}

function swapCourt() {
    const leftScore = document.getElementById('left-score').value;
    const rightScore = document.getElementById('right-score').value;
    document.getElementById('left-score').value = rightScore;
    document.getElementById('right-score').value = leftScore;

    for (let i = 1; i <= 6; i++) {
        const leftPlayer = document.getElementById(`left-player-${i}`);
        const rightPlayer = document.getElementById(`right-player-${i}`);
        const temp = leftPlayer.value;
        leftPlayer.value = rightPlayer.value;
        rightPlayer.value = temp;
    }
    toggleServe();
}

function scoreAndRotateRightTeam() {
    increaseScore('right');

    const rightServeFlag = document.getElementById('right-serve-flag');
    if (rightServeFlag.value === '0') {
        rotatePlayersClockwise('right');
        toggleServe();
    }
}

function scoreAndRotateLeftTeam() {
    increaseScore('left');

    const leftServeFlag = document.getElementById('left-serve-flag');
    if (leftServeFlag.value === '0') {
        rotatePlayersClockwise('left');
        toggleServe();
    }
}

document.addEventListener('DOMContentLoaded', updateServeHighlight);
