import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Game from './components/Game/Game';
import Menu from './components/Menu/Menu';
 export let par=0;
  export function updatepra(paramter)
  {
    par=paramter;
  }
function App() {
  par=0;
  return (
    <div className="wrapper">
      <h1>Ryad Games </h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/Game">Game</Link></li>
    
          </ul>
        </nav>
        <Routes>
        <Route path="/Game" element={<Game />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;