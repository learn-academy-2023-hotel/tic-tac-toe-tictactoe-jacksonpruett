  // function named calculateWinner with an argument of squares
  const calculateWinner = (squares) => {
    // variable of lines is equal to a multidimensional array
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // for let index (i) be equal to zero, less than the length of the variable lines,
    // and iterate in increments of 1
    for (let i = 0; i < lines.length; i++) {
      // variable array [a, b, c] is equal to the index positions of arrays in variable 'lines'
      const [a, b, c] = lines[i];
      // "If the value in the 'squares' array at index 'a' exists and is equal to the value at index 'b'
      //and also equal to the value at index 'c', then return the value at index 'a'."
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  export default calculateWinner