export default class game {
    constructor() {
        this.board = game.createEmptyBoard();
    }

    static createEmptyBoard() {
        const board = [];
        for (let i = 0; i < 3; i++) {
            board.push([]);
            for (let j = 0; j < 3; j++) {
                board[i].push({
                    value: "",
                    y: i,
                    x: j,
                });
            }
        }
        return board;
    }
}
