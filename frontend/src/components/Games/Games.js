import React from "react";
import { Routes, Route } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Navbar from "../layouts/navbar/Navbar";
import Footer from "../layouts/footer/Footer";
import MathPuzzles from "./MathPuzzles";
import Puzzle from "./Puzzle";
import TicTacToe from "./TicTacToe";
import WordPuzzleGame from "./WordPuzzleGame";

const Games = () => {
  return (
    <section>
      <Navbar darkTheme={true} />
      <div className="games-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/Games/tictactoe" element={<TicTacToe />} />
            <Route path="/Games/mathpuzzles" element={<MathPuzzles />} />
            <Route path="/Games/wordpuzzlegame" element={<WordPuzzleGame />} />
            <Route path="/Games/puzzle" element={<Puzzle />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Games;
