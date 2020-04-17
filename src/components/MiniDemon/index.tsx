import React from 'react';
import './index.css';
import {TILE_SIZE, HEAD_OFFSET} from '../../settings/constants';

const MiniDemon = () => {
    return (
        <div 
        style={{ 
            width: TILE_SIZE, 
            height: TILE_SIZE + HEAD_OFFSET,
            backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`, 
            backgroundImage:"url(./assets/MINI-DEMON.png)", 
            backgroundRepeat: 'no-repeat',
            animation: 'mini-demon-animation 1s steps(4) infinite',
            position: 'absolute',
            bottom: TILE_SIZE * 10,
            left: TILE_SIZE * 7,
            }} 
        />
    )
}
export default MiniDemon;