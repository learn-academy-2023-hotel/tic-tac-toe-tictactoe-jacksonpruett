import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  // initialize a state variable 'squares' to represent the game board. Initial state is an array of 9 elements filled with 'null'
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  const [playerOneLocation, setPlayerOneLocation] = useState(
    Math.floor(Math.random() * squares.length)
  )
  const [playerTwoLocation, setPlayerTwoLocation] = useState(
    Math.floor(Math.random() * squares.length)
  )
  const restartGame = () => {
    window.location.reload()
  }
  const handleGameClick = (clickedSquareIndex) => {
    let playerOneBoard = [...squares]
    if (clickedSquareIndex === playerOneLocation) {
    playerOneBoard[clickedSquareIndex] = "X"
    alert("Player 1 wins!")
  } else if (clickedSquareIndex === playerTwoLocation)
    setSquares(playerOneBoard)
    let playerTwoBoard = [...squares]
    playerTwoBoard[clickedSquareIndex] = "O"
    setSquares(playerTwoBoard)
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {/* map over array and return a square for each element */}
        {squares.map((value, index) => {
          return( 
          <Square 
            value={value} 
            index={index} 
            handleGameClick={handleGameClick} />
        )})}
      </div>
      <div className="restart">
        <button onClick={restartGame}>Play Again?</button>
        </div>
    </>
  );
};

export default App;
