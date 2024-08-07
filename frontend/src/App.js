import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import app from './firebase/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Pages and components for the bookstore application
import HomePage from './pages/homepage/HomePage';
import BooksPage from './pages/bookspage/BooksPage';
import CartPage from './pages/cartpage/CartPage';
import BookDetailsPage from './pages/bookdetailspage/BookDetails';
import Login from './pages/loginpage/Login';
import SignUp from './pages/signup-page/Signup';
import ScrollToTop from './components/util/ScrollToTop';
import SearchPage from './pages/searchpage/SearchPage';

// Components for the games application
import Sidebar from './components/Games/Sidebar';
import TicTacToe from './components/Games/TicTacToe';
import MathPuzzles from './components/Games/MathPuzzles';
import WordPuzzleGame from './components/Games/WordPuzzleGame';
import Puzzle from './components/Games/Puzzle';
import Admin from './pages/Admin/Admin';
import Games from './components/Games/Games';

import './components/App.css';
import About from './pages/about/about';
import Dashboard from './pages/Dashboard/dashboard';

export const UserContext = createContext({});
export const CartContext = createContext({});

const App = () => {
  const auth = getAuth(app);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
  }, [auth]);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.price, 10);
    });
    setTotalAmount(total);
  }, [cartItems]);

  const handleGameChange = (event) => {
    const game = event.target.value;
    if (event.target.checked) {
      navigate(`/Games/${game.toLowerCase()}`);
    } else {
      navigate('/Games');
    }
  };

  return (
    <ScrollToTop>
      <UserContext.Provider value={authenticatedUser}>
        <CartContext.Provider value={{ cartItems, totalAmount, setCartItems }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/book-details/:id" element={<BookDetailsPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Games" element={<Games />} />
              <Route path="/about" element={<About />} />
              
              <Route path="/games/tictactoe" element={<TicTacToe />} />
              <Route path="/games/mathpuzzles" element={<MathPuzzles />} />
              <Route path="/games/WordPuzzleGame" element={< WordPuzzleGame/>} />
              <Route path="/games/Puzzle" element={<Puzzle/>} />
             <Route path="/Admin" element={<Admin/>} />
             <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
          </div>
        </CartContext.Provider>
      </UserContext.Provider>
    </ScrollToTop>
  );
};

export default App;
