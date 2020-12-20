
const render = new Renderer()
let board

const startGame = function () {
    const rowNum = $('#rows').val()
    const colNum = $('#cols').val()
    if (rowNum === '' || colNum === '' ||
        rowNum > 10 || colNum > 10 ||
        rowNum < 5 || colNum < 5) {
        alert('insert number of rows & columns (5-10)')
    } else {
        $("#rows").val("")
        $("#cols").val("")
        board = new GoldRush(rowNum, colNum)
        render.renderBoard(board.generateGoldRush())
    }
}

const renderer = function () {
    render.renderBoard(board.getBoard())
    render.renderScores(board.player1.score, board.player2.score)
}

$(document).keypress(function (e) {
    if (e.which == 119) {
        board.movePlayer(1, "up")
        renderer()
    }
    if (e.which == 97) {
        board.movePlayer(1, "left")
        renderer()
    }
    if (e.which == 115) {
        board.movePlayer(1, "down")
        renderer()
    }
    if (e.which == 100) {
        board.movePlayer(1, "right")
        renderer()
    }
    if (e.which == 105) {
        board.movePlayer(2, "up")
        renderer()
    }
    if (e.which == 106) {
        board.movePlayer(2, "left")
        renderer()
    }
    if (e.which == 107) {
        board.movePlayer(2, "down")
        renderer()
    }
    if (e.which == 108) {
        board.movePlayer(2, "right")
        renderer()
    }
})