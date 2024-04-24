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
function rotatePlayers(side) {
    // チームのプレイヤーのIDリストを定義
    const playerPositions = Array.from(document.querySelectorAll(`.${side}-coat .player`)).map(input => input.id);

    // 最初のプレイヤーを取り出して後でリストの末尾に追加
    const firstPlayerId = playerPositions.shift();

    // プレイヤーIDをシフトして再割り当て
    playerPositions.push(firstPlayerId);

    // 元のプレイヤーの値を新しい位置にコピー
    const playerValues = playerPositions.map(id => document.getElementById(id).value);
    playerValues.unshift(playerValues.pop()); // 配列の末尾を最初に移動

    // 新しい順序でプレイヤーの値を設定
    playerPositions.forEach((id, index) => {
        document.getElementById(id).value = playerValues[index];
    });
}