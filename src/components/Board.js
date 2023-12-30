import { useState } from "react";
import Square from "./Square";
import calculateWinner from "./Winner";

const Board = () => {
    // useState called xIsNext as a boolean to flip each time a player takes their turn
    const [xIsNext, setXIsNext] = useState(true);
    // useState called squares with an array of 9 objects, filled with null
    const [squares, setSquares] = useState(Array(9).fill(null));
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  
    function handleClick(i) {
      // this ensures the same box cannot be changed during the game
      // and ensures the game does not continue if there is a winner
      if (squares[i] || calculateWinner(squares)) {
        return;
      }
  
      // function nextSquares is equal to a new array
      // from the square component using the slice method
      const nextSquares = squares.slice();
      // using the ternary operator "?" to say "If xIsNext is true,
      // then set nextSquares[i] to 'X', otherwise set nextSquares[i] to 'O'."
      nextSquares[i] = xIsNext ? "X" : "O";
      // calling setSquares lets React know the state of the component has changed
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  
    return (
      <>
        <div className="status">{status}</div>
        <br />
        <div className="board-row">
          {/* the reason this works is because <Square /> 
          is calling the component of the same name */}
          {/* prop 'value' of each square is equal to useState 'squares', 
          index positions */}
          {/* In React, it’s conventional to use onSomething names 
           for props which represent events and 
          handleSomething for the function definitions which handle those events. */}
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    );
  }

  export default Board