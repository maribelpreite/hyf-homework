// still getting used to destructuring, .map() higher-order function and ternary operators!

const position = [
    ['x', 'o', ' '],
    [' ', 'o', ' '],
    [' ', 'o', 'x']
    ];

    function getRenderedGame(currentGameFlat) {
        const separator = "*";

        const displayGame = currentGameFlat.map(ticTacToeRow => {
            const destructuredTicTacToeRow = [...ticTacToeRow];
            return `*${destructuredTicTacToeRow.join(separator)}*`;
            }).join("\n");

        return displayGame;
    }

    function checkWinner (currentGame) {
        const currentGameFlat = currentGame.flat();

        const winningCombinations = [

            // Rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            //Columns
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            //Diagonals
            [0, 4, 8],
            [2, 4, 6],
    ]

    for (const [a, b, c] of winningCombinations) {
        if (currentGameFlat[a] === currentGameFlat[b] && currentGameFlat[b] === currentGameFlat[c] && currentGameFlat[a] !== ' ') {
            return currentGameFlat[a];
        }
    }
    return undefined;
}

    function getGameInfo (currentGame) {
        const currentGameFlat = currentGame.flat();

        const winner = checkWinner(currentGame);
        const loser = winner === undefined ? undefined : (winner === 'x' ? 'o' : 'x');
        const hasEnded = winner === undefined ? false : true;
        let nextPlayer;

        if (!hasEnded) {

            const xCounts = currentGameFlat.filter(cell => cell === 'x').length;
            const oCounts = currentGameFlat.filter(cell => cell === 'o').length;
            nextPlayer = xCounts === oCounts ? 'x' : 'o'
        }

        const gameInfo = {
            winner,
            loser,
            hasEnded,
        }

        if (nextPlayer !== undefined) {
            gameInfo.nextPlayer
        }

        return gameInfo
    }

const renderedGame = getRenderedGame(position);
console.log(renderedGame);

const gameInfo = getGameInfo(position);
console.log(gameInfo);