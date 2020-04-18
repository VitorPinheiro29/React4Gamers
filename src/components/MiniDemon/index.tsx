import React from 'react';
import './index.css';
import {TILE_SIZE, HEAD_OFFSET} from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';
import {EDirection} from '../../settings/constants';

const initialPosition = {
    x: 10,
    y: 7
}

const MiniDemon = () => {
    const moviment = useEnemyMoviment(initialPosition);
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
            bottom: TILE_SIZE * moviment.position.x,
            left: TILE_SIZE * moviment.position.y,
            transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1: -1})`,
            }} 
        />
    )
}
export default MiniDemon;