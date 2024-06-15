import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';

function Board() {
  const [squares,setSquare] = useState(Array(9).fill(null));

  function selectSquare(index) {
    if(squares[index]) return;
    const nextSquare = squares.slice();
    nextSquare[index] = calculateNextValue(squares);
    setSquare(nextSquare);
  }

  function restart() {
    const squareRestart = Array(9).fill(null);
    setSquare(squareRestart);
  }

  function renderSquare(i) {
    return (
      <button className="btn-1 size-32 text-white text-xxl border-2 border-orange-500 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg px-5 py-2.5 text-center me-2 mb-2" onClick={()=>{selectSquare(i)}} size="lg">
        {squares[i]}
      </button>
    );
  }

  return (
    <div className='flex flex-col items-center'>
      <p className="status w-50 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-8">
        {calculateStatus(calculateWinner(squares),squares,calculateNextValue(squares))}
      </p>
    <div className='Board'>
    <div className=''>
       {renderSquare(0)}
       {renderSquare(1)}
       {renderSquare(2)}
      </div>

      <div className=''>
       {renderSquare(3)}
       {renderSquare(4)}
       {renderSquare(5)}
      </div>

      <div className=''>
       {renderSquare(6)}
       {renderSquare(7)}
       {renderSquare(8)}
      </div>
    </div>

      <button onClick={restart} className='reset-btn text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 me-2 my-5'>
        Restart
      </button>

    </div>
  );
}

function Game() {
  return (
    <div >
      <div >
        <Board />
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
      ? `Draw, Let's Play Again`
      : `Next Player: ${nextValue}`;
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  if(calculateWinner(squares)) return 
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
