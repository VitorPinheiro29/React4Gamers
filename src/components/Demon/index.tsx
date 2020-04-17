import React from 'react';
import './index.css';
import {TILE_SIZE} from '../../settings/constants';
import {DEMON_TILE_SIZE} from '../../settings/constants';

const Demon = () => {
    return (
        <div 
        style={{ 
            width: DEMON_TILE_SIZE, 
            height: DEMON_TILE_SIZE, 
            backgroundImage:"url(./assets/DEMON.png)", 
            backgroundRepeat: 'no-repeat',
            animation: 'demon-animation 1s steps(4) infinite',
            position: 'absolute',
            bottom: TILE_SIZE * 5,
            left: TILE_SIZE * 8,
            }} 
        />
    )
}
export default Demon;