class Board {

    constructor() {
        this.board = [["_","_","_"],["_","_","_"],["_","_","_"]];
    }

    won() {

    }

    horizontalWin() {
        this.board.forEach(function(row) {
            let match = false 
            if (row[0] != "_") {
                let winSign = row[0]
                row.forEach(function(space) {
                    if (winSign === space) { 
                        match = true 
                    } else {
                        match === false 
                    } 
                })
            }
            //i've tested everything up to this point and it's working as expected.
            if (match === true) {
                console.log('why') //this wil print to console.
                return true //for a reaonon I dont' understand this does not get returned
                console.log('whuttt') //this will not get printed.
            };
        })
        return false 
    }

    diagonalWin() {
        let d1 = []
        let d2 = []
        for(let i = 0; i < this.board.length - 1; i++) {
            d1.push(this.board[i][i])
            length = this.board.length-1
            d2.push(this.board[i][length - i])
        }


    }


}


board = new Board();

console.log(board.board);

board.board[0][0] = 'yass';
board.board[0][1] = 'yass';
board.board[0][2] = 'yass';
// board.board[1][0] = 'yass';
// board.board[1][1] = 'yass';
// board.board[1][2] = 'yass';
console.log(board.board);
console.log(board.horizontalWin())