export function findBoardgame(boardgames, searchedName) {
    const boardgame = boardgames.find((boardgame) => {
        return boardgame.name === searchedName;
    });

    return boardgame;
}