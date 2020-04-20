import React from 'react';
import logo from '.././logo.svg';
import './App.css';
import {GAME_SIZE} from '../settings/constants';
import Debugger from './Debugger';

import Board from './board';

function App() {
  return (
    <div className="App">
      <div 
        style={{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}
        >
        <Debugger />
        <Board />
        </div>
    </div>
  );
}

export default App;
