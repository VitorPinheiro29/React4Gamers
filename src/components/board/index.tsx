import React from 'react';
import Hero from '../hero';
import {GAME_SIZE} from '../../settings/constants';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import { canvas, ECanvas } from '../../contents/canvas/helpers';
import Tile from '../Debugger/Tile';

function getCanvasMap() {
    const array = [];
    
    for (let y = 0; y < canvas.length; y++){
        const canvasY = canvas[y];

        for (let x = 0; x < canvasY.length; x++){
            const canvasYX = canvasY[x];

            const position = {x: x, y: y};
            const text = canvas[y][x] || canvasYX;
            const key = `${x}-${y}`

            if (text === ECanvas.TRAP) {
                array.push(<Trap key={key} initialPosition = {position}/>)
            }

            if (text === ECanvas.MINI_DEMON) {
                array.push(<MiniDemon key={key} initialPosition = {position}/>)
            }

            if (text === ECanvas.DEMON) {
                array.push(<Demon key={key} initialPosition = {position}/>)
            }

            if (text === ECanvas.CHEST) {
                array.push(<Chest key={key} initialPosition = {position}/>)
            }


            if (text === ECanvas.HERO) {
                array.push(<Hero key={key} initialPosition = {position}/>)
            }

            //tilesArray.push(<Tile key={key} position={position} text={text} />)
        }
    }
    return array;
}

const elements = getCanvasMap();

const Board = () => {
    return (
        <div>
            {/* <Trap />
            <Chest />
            <MiniDemon initialPosition={{x: 10, y: 7}} />
            <MiniDemon initialPosition={{x: 10, y: 10}}/>
            <MiniDemon initialPosition={{x: 3, y: 8}}/>
            <MiniDemon initialPosition={{x: 5, y: 14}}/>
            <Hero />
            <Demon /> */}
            {elements}
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
        </div>
    )
} 

export default Board;