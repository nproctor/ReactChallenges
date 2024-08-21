import { useRef, useState, useEffect } from "react";
import { GameState, SquareState } from "./States";


const useStateManager = (size : number) => {

     // Holds state of board
    const board = useRef<SquareState[][]>(Array.from({length: size}, (_, i) => {
                                                    return Array.from({length: size}, (_, j) => SquareState.Empty)
                                                    })
                                                );
    // Number of remaining spaces
    const availableSpaces = useRef(size*size);

    // GameState
    const [gameState, setGameState] = useState<GameState>(GameState.Player1Turn);

    // User clicks on a Square
    const handleClick = (row: number, column: number) => {
        // If in end state, do nothing
        if (gameState === GameState.Player1Win || gameState === GameState.Player2Win || gameState === GameState.Draw)
            return;

        // If square is empty
        if (board.current[row][column] === SquareState.Empty){
            takeTurn(row, column);
        }
    }

    // Reset the game
    const reset = () => {
        board.current = Array.from({length: size}, (_, i) => {
                            return Array.from({length: size}, (_, j) => SquareState.Empty)
                        });
        availableSpaces.current = size*size;
        setGameState(GameState.Player1Turn);

    }
    
    // Only to be called when GameState is Player1Turn or Player2Turn
    const takeTurn = (row: number, column: number) => {
        const squareState = (gameState === GameState.Player1Turn)? SquareState.Player1 : SquareState.Player2;
        // Update board
        board.current[row][column] = squareState;
        // Update available spaces
        availableSpaces.current -= 1;
        // Update game state
        setGameState(updateState(row, column));
    }


    // State Machine - returns the state of the game
    const updateState = (row: number, column: number) => {
        
        const toWinningState = () => {
            if (gameState === GameState.Player1Turn) {return GameState.Player1Win;}
            else {return GameState.Player2Win;}
        }
        
        // Check row
        let rowTotal = sumRow(row);
        if (Math.abs(rowTotal) === size){
            return toWinningState();
        }

        // Check column
        let columnTotal = sumColumn(column);
        if (Math.abs(columnTotal) === size){
            return toWinningState();
        }   

        // If on diagonal, check diagonal right
        let diagRightTotal = sumDiagonalRight();
        if ((row === column) && Math.abs(diagRightTotal) === size){
            return toWinningState();
        }

        // If on diagonal, check diagonal left
        let diagLeftTotal = sumDiagonalLeft();
        if ((row + column === size - 1) && Math.abs(diagLeftTotal) === size){
            return toWinningState();
        }
        
        // If there are no more available spaces, it's a draw
        if (availableSpaces.current === 0)
            return GameState.Draw;

        // If the last move was Player 1, it's now Player 2's turn
        if (gameState === GameState.Player1Turn)
            return GameState.Player2Turn;

        // Otherwise it's Player 1's turn
        return GameState.Player1Turn;
    }
    
    // Sum of values of a specific row 
    const sumRow = (row: number) : number => {
        return board.current[row].reduce((prev, current) => prev + current, 0);
    }

    // Sums of values of a specific column
    const sumColumn = (column: number) : number => {
        return board.current.reduce((prev, current) => prev + current[column], 0);
    }

    // Sum of values of a diagonal starting in the upper left and ending in the lower right
    const sumDiagonalRight = () => {
        let i = 0;
        return board.current.reduce((prev, current) => prev + current[i++], 0);
    }

    // Sum of the values of a diagonal starting in the upper right and ending in the lower left
    const sumDiagonalLeft = () => {
        let i = size;
        return board.current.reduce((prev, current) => prev + current[--i], 0);
    }

    return {board, gameState, handleClick, reset}
}
export default useStateManager;