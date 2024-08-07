import React, { useState, useEffect } from 'react';
import './WordPuzzleGame.css';

// List of words to use in the puzzle
const words = ['react', 'javascript', 'puzzle', 'coding', 'programming'];

const shuffleWord = (word) => {
  return word.split('').sort(() => Math.random() - 0.5).join('');
};

const WordPuzzleGame = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    getNewWord();
  }, []);

  const getNewWord = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(word);
    setScrambledWord(shuffleWord(word));
    setGuess('');
    setMessage('');
  };

  const checkGuess = () => {
    if (guess.toLowerCase() === currentWord.toLowerCase()) {
      setMessage('Correct! You guessed the word!');
    } else {
      setMessage('Wrong guess! Try again.');
    }
  };

  return (
    <div className="word-puzzle-game">
    <h1>Puzzle Game with Words</h1>
    <div className='ggg'>
      <p>Unscramble the word:</p>
      <div className="scrambled-word">{scrambledWord}</div>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={checkGuess}>Submit Guess</button>
      <p>{message}</p>
      <button onClick={getNewWord}>Next Word</button>
      </div>
    </div>
  );
};

export default WordPuzzleGame;
