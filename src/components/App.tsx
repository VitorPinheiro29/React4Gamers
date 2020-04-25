import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {GAME_SIZE} from '../settings/constants';
import Game from './Game';
import { render } from 'react-dom';

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
        <Game />

        </div>
    </div>
  );
}

export default App;
