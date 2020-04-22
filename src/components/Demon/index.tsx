import React from 'react';
import './index.css';
import {TILE_SIZE} from '../../settings/constants';
import {DEMON_TILE_SIZE} from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';
import {EDirection} from '../../settings/constants';

interface IProps {
    initialPosition: {x: number; y: number}
};  

const Demon = (props: IProps) => {
    const moviment = useEnemyMoviment(props.initialPosition);

    return (
        <div 
        style={{ 
            width: DEMON_TILE_SIZE, 
            height: DEMON_TILE_SIZE, 
            backgroundImage:"url(./assets/DEMON.png)", 
            backgroundRepeat: 'no-repeat',
            animation: 'demon-animation 1s steps(4) infinite',
            position: 'absolute',
            top: TILE_SIZE * moviment.position.y,
            left: TILE_SIZE * moviment.position.x,
            transform: `scaleX(${moviment.direction === EDirection.LEFT ? 1: -1})`,
            }} 
        />
    )
}
export default Demon;