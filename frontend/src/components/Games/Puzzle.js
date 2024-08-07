// src/Puzzle.js
import React, { useState, useEffect } from 'react';
import './Puzzle.css';

const Puzzle = () => {
  const [tiles, setTiles] = useState([]);
  const [size] = useState(3); // 3x3 puzzle
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    // Generate an initial shuffled puzzle
    const initialTiles = Array.from({ length: size * size }, (_, index) => index);
    shuffleArray(initialTiles);
    setTiles(initialTiles);
  }, [size]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const isSolved = (tiles) => {
    return tiles.every((tile, index) => tile === index);
  };

  const swapTiles = (index) => {
    if (solved) return;
    
    const newTiles = [...tiles];
    const emptyIndex = newTiles.indexOf(size * size - 1);

    const isAdjacent =
      index === emptyIndex - 1 ||
      index === emptyIndex + 1 ||
      index === emptyIndex - size ||
      index === emptyIndex + size;

    if (isAdjacent) {
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
      setTiles(newTiles);
      setSolved(isSolved(newTiles));
    }
  };

  return (
    <div className="puzzle-container">
    <h1>Image Puzzle</h1>
    <div className="puzzle">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${tile === size * size - 1 ? 'empty' : ''}`}
            onClick={() => swapTiles(index)}
          >
            {tile !== size * size - 1 && (
              <img
                src={'https://tse4.mm.bing.net/th?id=OIP.jaboivSqx-lyE9pDrNAdCQHaGO&pid=Api&P=0&h=180'}
                alt={`tile-${tile}`}
                style={{
                  backgroundPosition: `${(tile % size) * 100}% ${(Math.floor(tile / size) * 100)}%`,
                }}
              />
            )}
          </div>
        ))}
      </div>
      {solved && <h2>You solved the puzzle!</h2>}
    </div>
  );
};

export default Puzzle;
