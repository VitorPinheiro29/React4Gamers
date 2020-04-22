import React from 'react';
import './index.css';
import {TILE_SIZE, HEAD_OFFSET} from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';
import {EDirection} from '../../settings/constants';

const initialPosition = {
    x: 10,
    y: 7
}

interface IProps {
    initialPosition: {x: number, y: number}
};

const MiniDemon = (props: IProps) => {
    const moviment = useEnemyMoviment(props.initialPosition);

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
            top: TILE_SIZE * moviment.position.y - HEAD_OFFSET,
            left: TILE_SIZE * moviment.position.x,
            transform: `scaleX(${moviment.direction === EDirection.LEFT ? 1: -1})`,
            }} 
        />
    )
}
export default MiniDemon;