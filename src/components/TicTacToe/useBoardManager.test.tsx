import { act, fireEvent, render, renderHook } from '@testing-library/react';
import useBoardManager from './useBoardManager';
import { GameState, SquareState } from './States';


describe('useBoardManager Hook', () => {

    it("shall initialize board to a 2d square array with dimensions size x size", () => {
        const {result} = renderHook( () => useBoardManager(5));
        expect(result.current.board.current.length).toBe(5);
        expect(result.current.board.current[0].length).toBe(5);
    });

    it("shall initialize each spot on the board to an empty state", () => {
        const {result} = renderHook( () => useBoardManager(3));
        result.current.board.current.forEach( (arr, i) => {
            arr.forEach( (val, j) => {
                expect(val).toBe(SquareState.Empty);
            })
        })
    });

    it("shall initialize the game state to start with Player 1 Turn", () => {
        const {result} = renderHook( () => useBoardManager(3));
        expect(result.current.gameState).toBe(GameState.Player1Turn);
    });

    it("shall update the corresponding square to the users state when clicked", () => {
        const {result} = renderHook( () => useBoardManager(3));
        act( () => {result.current.handleClick(0,0);});
        expect(result.current.board.current[0][0]).toBe(SquareState.Player1);
        act( () => {result.current.handleClick(0,1);});
        expect(result.current.board.current[0][1]).toBe(SquareState.Player2);
    });

    it("shall update the game to Player 2 Turn after Player 1 makes a valid first move", () => {
        const {result} = renderHook( () => useBoardManager(3));
        act( () => {result.current.handleClick(0,0);});
        expect(result.current.gameState).toBe(GameState.Player2Turn);
    });

    it("shall make no changes to state if the player selects an invalid (already selected) square", () => {
        const {result} = renderHook( () => useBoardManager(3));
        act( () => {result.current.handleClick(0,0);});
        expect(result.current.gameState).toBe(GameState.Player2Turn);
        act( () => {result.current.handleClick(0,0);});
        expect(result.current.gameState).toBe(GameState.Player2Turn);        
    });

    it("shall transition back to Player 1 Turn after Player 2 makes a valid move", () => {
        const {result} = renderHook( () => useBoardManager(3));
        act( () => {result.current.handleClick(0,0);});
        expect(result.current.gameState).toBe(GameState.Player2Turn);
        act( () => {result.current.handleClick(0,1);});
        expect(result.current.gameState).toBe(GameState.Player1Turn);        
    });

    it("shall transition to Player 1 Win state when Player 1 fills a column (testing 3x3 column 0)", () => {
        const {result} = renderHook( () => useBoardManager(3));
        act( () => {result.current.handleClick(0,0);}); // Player 1
        act( () => {result.current.handleClick(0,1);}); // Player 2
        act( () => {result.current.handleClick(1,0);}); // Player 1
        act( () => {result.current.handleClick(0,2);}); // Player 2
        act( () => {result.current.handleClick(2,0);}); // Player 1
        expect(result.current.gameState).toBe(GameState.Player1Win);        
    });

    it("shall transition to Player 1 Win state when Player 1 fills a row (testing 3x3 row 2)", () => {
        const {result} = renderHook( () => useBoardManager(3));
        act( () => {result.current.handleClick(2,0);}); // Player 1
        act( () => {result.current.handleClick(1,0);}); // Player 2
        act( () => {result.current.handleClick(2,1);}); // Player 1
        act( () => {result.current.handleClick(0,2);}); // Player 2
        act( () => {result.current.handleClick(2,2);}); // Player 1
        expect(result.current.gameState).toBe(GameState.Player1Win);        
    });

    it("shall transition to Player 2 Win state when Player 2 fills a column (testing 3x3 column 1)", () => {
        const {result} = renderHook( () => useBoardManager(3));
        act( () => {result.current.handleClick(2,2);}); // Player 1
        act( () => {result.current.handleClick(0,1);}); // Player 2
        act( () => {result.current.handleClick(0,0);}); // Player 1
        act( () => {result.current.handleClick(2,1);}); // Player 2
        act( () => {result.current.handleClick(1,2);}); // Player 1
        act( () => {result.current.handleClick(1,1);}); // Player 2
        expect(result.current.gameState).toBe(GameState.Player2Win);        
    });

    it("shall transition to Player 2 Win state when Player 2 fills a row (testing 3x3 row 1)", () => {
        const {result} = renderHook( () => useBoardManager(3));
        act( () => {result.current.handleClick(0,0);}); // Player 1
        act( () => {result.current.handleClick(1,1);}); // Player 2
        act( () => {result.current.handleClick(0,2);}); // Player 1
        act( () => {result.current.handleClick(1,0);}); // Player 2
        act( () => {result.current.handleClick(2,0);}); // Player 1
        act( () => {result.current.handleClick(1,2);}); // Player 2
        expect(result.current.gameState).toBe(GameState.Player2Win);        
    });

    it("shall transition to Player 1 Win state when Player 1 gets a diagonal (down and rightward)", () => {
        const {result} = renderHook( () => useBoardManager(3));
        act( () => {result.current.handleClick(0,0);}); // Player 1
        act( () => {result.current.handleClick(1,2);}); // Player 2
        act( () => {result.current.handleClick(1,1);}); // Player 1
        act( () => {result.current.handleClick(1,0);}); // Player 2
        act( () => {result.current.handleClick(2,2);}); // Player 1
        expect(result.current.gameState).toBe(GameState.Player1Win);        
    });

    it("shall transition to Player 2 Win state when Player 2 gets a diagonal (down and leftward)", () => {
        const {result} = renderHook( () => useBoardManager(3));
        act( () => {result.current.handleClick(0,0);}); // Player 1
        act( () => {result.current.handleClick(0,2);}); // Player 2
        act( () => {result.current.handleClick(1,0);}); // Player 1
        act( () => {result.current.handleClick(1,1);}); // Player 2
        act( () => {result.current.handleClick(2,2);}); // Player 1
        act( () => {result.current.handleClick(2,0);}); // Player 2
        expect(result.current.gameState).toBe(GameState.Player2Win);        
    });

    it("shall transition to Draw if the board is filled and there is no winner", () => {
        const {result} = renderHook( () => useBoardManager(3));
        act( () => {result.current.handleClick(0,0);}); // Player 1
        act( () => {result.current.handleClick(0,1);}); // Player 2
        act( () => {result.current.handleClick(1,0);}); // Player 1
        act( () => {result.current.handleClick(1,1);}); // Player 2
        act( () => {result.current.handleClick(2,1);}); // Player 1
        act( () => {result.current.handleClick(2,0);}); // Player 2
        act( () => {result.current.handleClick(0,2);}); // Player 1
        act( () => {result.current.handleClick(1,2);}); // Player 2
        act( () => {result.current.handleClick(2,2);}); // Player 1
        expect(result.current.gameState).toBe(GameState.Draw);        
    });


});