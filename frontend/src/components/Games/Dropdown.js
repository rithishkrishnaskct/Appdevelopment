import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        Books
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/MathPuzzles" onClick={toggleDropdown}>Page</Link>
          <Link to="/Puzzle" onClick={toggleDropdown}>Puzzle</Link>
          <Link to="/TicTacToe" onClick={toggleDropdown}>Page</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;