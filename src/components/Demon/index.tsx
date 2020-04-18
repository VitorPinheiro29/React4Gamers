import React from 'react';
import './index.css';
import {TILE_SIZE} from '../../settings/constants';
import {DEMON_TILE_SIZE} from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';
import {EDirection} from '../../settings/constants';

const initialPosition = {
    x: 5,
    y: 8
}

const Demon = () => {
    const moviment = useEnemyMoviment(initialPosition);

    return (
        <div 
        style={{ 
            width: DEMON_TILE_SIZE, 
            height: DEMON_TILE_SIZE, 
            backgroundImage:"url(./assets/DEMON.png)", 
            backgroundRepeat: 'no-repeat',
            animation: 'demon-animation 1s steps(4) infinite',
            position: 'absolute',
            bottom: TILE_SIZE * moviment.position.x,
            left: TILE_SIZE * moviment.position.y,
            transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1: -1})`,
            }} 
        />
    )
}
export default Demon;