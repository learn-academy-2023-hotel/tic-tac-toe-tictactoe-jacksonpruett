const Square = ({ value, onSquareClick }) => {
    // each square has its own state. meaning,
    // the state of each is indepedent of the others
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

  export default Square