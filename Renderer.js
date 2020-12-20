class Renderer {

    constructor() {
        this.source = $("#board-template").html()
        this.template = Handlebars.compile(this.source)
    }

    renderBoard(board) {
        const boardHTML = this.template({ board })
        $('#board-container').empty().append(boardHTML)
    }

    renderScores(score1, score2) {
        $('.p1').text(`PlAYER 1: ${score1}`)
        $('.p2').text(`PlAYER 2: ${score2}`)
    }
}