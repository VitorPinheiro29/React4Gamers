import React from 'react';
import Hero from '../hero';
import {GAME_SIZE} from '../../settings/constants';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';

const Board = () => {
    return (
        <div>
            <Trap />
            <Chest />
            <MiniDemon initialPosition={{x: 10, y: 7}} />
            <MiniDemon initialPosition={{x: 10, y: 10}}/>
            <Hero />
            <Demon />
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
        </div>
    )
} 

export default Board;