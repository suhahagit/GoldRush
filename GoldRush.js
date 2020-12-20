class GoldRush extends Matrix {

    constructor(row, col) {
        super(row, col)
        this.player1 = { score: 0, x: 0, y: 0, id: 'f', other: 's' }
        this.player2 = { score: 0, x: row - 1, y: col - 1, id: 's', other: 'f' }
        this.row = row
        this.col = col
    }

    movePlayer(player, direction) {
        if (player === 1) {
            player = this.player1
        } else {
            player = this.player2
        }
        switch (direction) {
            case 'up':
                if (player.x - 1 < 0 || this.matrix[player.x - 1][player.y] === 'w' ||  
                this.matrix[player.x - 1][player.y] === `${player.other}`) { break; }
                if (this.matrix[player.x - 1][player.y] === 'c') { player.score++ }
                this.matrix[player.x][player.y] = '.'
                player.x = player.x - 1
                this.matrix[player.x][player.y] = `${player.id}`
                break;
            case 'left':
                if (player.y - 1 < 0 || this.matrix[player.x][player.y - 1] === 'w' || 
                this.matrix[player.x][player.y - 1] === `${player.other}`) { break; }
                if (this.matrix[player.x][player.y - 1] === 'c') { player.score++ }
                this.matrix[player.x][player.y] = '.'
                player.y = player.y - 1
                this.matrix[player.x][player.y] = `${player.id}`
                break;
            case 'down':
                if (player.x + 1 > this.row - 1 || this.matrix[player.x + 1][player.y] === 'w' || 
                this.matrix[player.x + 1][player.y] === `${player.other}`) { break; }
                if (this.matrix[player.x + 1][player.y] === 'c') { player.score++ }
                this.matrix[player.x][player.y] = '.'
                player.x = player.x + 1
                this.matrix[player.x][player.y] = `${player.id}`
                break;
            case 'right':
                if (player.y + 1 > this.col - 1 || this.matrix[player.x][player.y + 1] === 'w' || 
                this.matrix[player.x][player.y + 1] === `${player.other}`) { break; }
                if (this.matrix[player.x][player.y + 1] === 'c') { player.score++ }
                this.matrix[player.x][player.y] = '.'
                player.y = player.y + 1
                this.matrix[player.x][player.y] = `${player.id}`
                break;
            default:
                break;
        }
    }

    generateGoldRush() {
        this.matrix[this.player1.x][this.player1.y] = 'f'
        this.matrix[this.player2.x][this.player2.x] = 's'
        this.generateWallsAndCoins()
        return this.matrix
    }

    getBoard() {
        return this.matrix
    }

    generateWallsAndCoins() {
        for (let i = 0; i < (24 / 100) * (this.row * this.col); i++) {
            let randomRow = Math.floor(Math.random() * this.row)
            let randomCol = Math.floor(Math.random() * this.col)
            if (this.matrix[randomRow][randomCol] === '.') {
                this.matrix[randomRow][randomCol] = 'w'
            } else {
                i++
            }
        }
        this.generateCoins()
    }

    generateCoins() {
        for (let row = 0; row < this.matrix.length; row++) {
            for (let col = 0; col < this.matrix[row].length; col++) {
                if (this.matrix[row][col] === '.') {
                    this.matrix[row][col] = 'c'
                }
            }
        }
    }
}