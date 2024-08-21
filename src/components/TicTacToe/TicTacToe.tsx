import { ReactNode, useEffect, useRef, useState } from "react";
import Square from "./Square";
import { GameState, SquareState } from "./States";
import useBoardManager from "./useBoardManager";
import { BlockText, StyledButton } from "../../App.style";

const TicTacToe = ({size} : {size: number}) => {

    const {board, gameState, handleClick, reset} = useBoardManager(size);
    const [player1WinCount, setPlayer1WinCount] = useState(0);
    const [player2WinCount, setPlayer2WinCount] = useState(0);

    useEffect( () => {
        if (gameState === GameState.Player1Win){
            setPlayer1WinCount(player1WinCount => player1WinCount + 1)
        }
        if (gameState === GameState.Player2Win){
            setPlayer2WinCount(player2WinCount => player2WinCount + 1)
        }
    }, [gameState])

    return (
        <div>  
            <BlockText>{gameState}</BlockText>
            <table>
                <tbody>
                {Array.from({length: size}, (_, i) => {
                    return <tr key={`row-${i}`}>
                        {Array.from({length: size}, (_, j) => {
                            return <Square key={`element-${i}-${j}`} 
                                            symbol={board.current[i][j] === SquareState.Player1? "X" : board.current[i][j] === SquareState.Player2? "O" : " "}
                                            row={i} 
                                            column={j} 
                                            handleClick={handleClick}/>;
                        })} 
                    </tr>
                })}
                </tbody>
            </table>
            <BlockText>Player 1 has won {player1WinCount} games.</BlockText>
            <BlockText>Player 2 has won {player2WinCount} games.</BlockText>
            {gameState === GameState.Player1Win || gameState === GameState.Player2Win || gameState === GameState.Draw ?
            <StyledButton onClick={reset}>Play Again!</StyledButton> : <></>}
        </div>
    )
}

export default TicTacToe;