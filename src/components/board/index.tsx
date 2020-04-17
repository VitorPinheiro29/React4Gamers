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
            <MiniDemon />
            <Hero />
            <Demon />
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
        </div>
    )
} 

export default Board;