import React, {useState, useEffect,Component} from 'react'
import { create } from '../Game/Game';
import './Menu.css';
 const Menu = () => {
  const getInitialState = () => {
    const value = "";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
     create(e.target.value);
  };
  return (
    <div className='m'>
      <label>
       select game
        <select value={value} onChange={handleChange}>
        <option value="Tic-Tac-Toe">choose</option>
          <option value="Tic-Tac-Toe">Tic-Tac-Toe</option>
          <option value="Connect-4">Connect-4</option>
          <option value="Checkers">Checkers</option>
          <option value="Chess">Chess</option>
          <option value="Sudoku">Sudoku </option>
          <option value="8-Queens">8-Queens</option>
        </select>
        <p>{`You selected ${value}`}</p>
      </label>
    </div>
  );
};
export default Menu;