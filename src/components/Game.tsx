import React from 'react';
import CanvasProvider from '../contents/canvas';
import Debugger from './Debugger';
import Board from './board';
import ChestsProvider from '../contents/chests';


function Game() {
    return (
        <CanvasProvider>
            <ChestsProvider>
                { /* Debugger  */}
                <Board />
            </ChestsProvider>
        </CanvasProvider>
    )
};
export default Game;