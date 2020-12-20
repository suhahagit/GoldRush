class Matrix {

    constructor(rowNum, colNum) {
        this.matrix = this.generateMatrix(rowNum, colNum)
    }

    generateMatrix(rowNum, colNum) {
        let matrix = []
        for (let row = 0; row < rowNum; row++) {
            matrix.push([])
            for (let col = 0; col < colNum; col++) {
                matrix[row].push(".")
            }
        }
        return matrix
    }
}