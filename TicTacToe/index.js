import useTicTacToe from '../TicTacToe/useTicTacToe.js'

import '../TicTacToe/index.css'

const TicTacToe = () => {
    const { board, handleClick, getStatusMessage, resetGame } = useTicTacToe()
    return (
        <div className="bg-container">
            <h1 className="heading">Tic Tac Toe Game <span className="react">InReact</span></h1>
            <div className="game">
                <div className="status">
                    {getStatusMessage()}
                    <button className="reset-button" onClick={resetGame}>Reset Game</button>
                </div>
                <div className="board">
                    {
                        board.map((cell, index) => {
                            return <button className="box" key={index} onClick={() => handleClick(index)}>
                                {cell}
                            </button>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TicTacToe