var X ='<svg width="98" height="98"> \
    <line x1="20" y1="20" x2="80" y2="80" stroke="black" stroke-width="4"/> \
    <line x1="80" y1="20" x2="20" y2="80" stroke="black" stroke-width="4"/> \
</svg>';

var O = '<svg width="98" height="98"> \
<circle r="30" cx="50%" cy="50%" fill="white" stroke="black" stroke-width="4"/> \
</svg>';

var cells = document.querySelectorAll('.cell');
var turn = true;

var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

var makeTurn = function() {
    var row = this.dataset.row;
    var col = this.dataset.col;
    if (board [row][col] !== 0) {
        return;
    }        
    if (turn) {
        this.innerHTML = X;
        board [row][col] = 1;
    }
    else {
        this.innerHTML = O;
        board [row][col] = -1;
    }
    turn = !turn; 
    if (board[0][0] + board[1][0] + board[2][0] === 3 ||
        board[0][0] + board[1][0] + board[2][0] === -3 
    ) {
        document.querySelector('.line1').style.display = 'block';
    }
    if (board[0][1] + board[1][1] + board[2][1] === 3 ||
        board[0][1] + board[1][1] + board[2][1] === -3
    ) {
        document.querySelector('.line2').style.display = 'block';
    }
    if (board[0][2] + board[1][2] + board[2][2] === 3 ||
        board[0][2] + board[1][2] + board[2][2] === -3) {
        document.querySelector('.line3').style.display = 'block';
    }
    if (board[0][0] + board[0][1] + board[0][2] === 3 ||
        board[0][0] + board[0][1] + board[0][2] === -3) {
        document.querySelector('.line4').style.display = 'block';
    }
    if (board[1][0] + board[1][1] + board[1][2] === 3 ||
        board[1][0] + board[1][1] + board[1][2] === -3) {
        document.querySelector('.line5').style.display = 'block';
    }
    if (board[2][0] + board[2][1] + board[2][2] === 3 ||
        board[2][0] + board[2][1] + board[2][2] === -3) {
        document.querySelector('.line6').style.display = 'block';
    }
    if (board[0][0] + board[1][1] + board[2][2] === 3 ||
        board[0][0] + board[1][1] + board[2][2] === -3) {
        document.querySelector('.line7').style.display = 'block';
    }
    if (board[0][2] + board[1][1] + board[2][0] === 3 ||
        board[0][2] + board[1][1] + board[2][0] === -3) {
        document.querySelector('.line8').style.display = 'block';
    }

    if (
        board[0][0] + board[0][1] + board[0][2] === 3 ||
        board[1][0] + board[1][1] + board[1][2] === 3 ||
        board[2][0] + board[2][1] + board[2][2] === 3 ||
        board[0][0] + board[1][0] + board[2][0] === 3 ||
        board[0][1] + board[1][1] + board[2][1] === 3 ||
        board[0][2] + board[1][2] + board[2][2] === 3 ||
        board[0][0] + board[1][1] + board[2][2] === 3 ||
        board[0][2] + board[1][1] + board[2][0] === 3
    ) {
        alert("Крестики победили");
    }
    if (
        board[0][0] + board[0][1] + board[0][2] === -3 ||
        board[1][0] + board[1][1] + board[1][2] === -3 ||
        board[2][0] + board[2][1] + board[2][2] === -3 ||
        board[0][0] + board[1][0] + board[2][0] === -3 ||
        board[0][1] + board[1][1] + board[2][1] === -3 ||
        board[0][2] + board[1][2] + board[2][2] === -3 ||
        board[0][0] + board[1][1] + board[2][2] === -3 ||
        board[0][2] + board[1][1] + board[2][0] === -3
    ) {
        alert("Нолики победили");
    }
}

for (var i=0; i < cells.length; i++) {
    var currentCell = cells[i];
    currentCell.addEventListener ('click', makeTurn);
}