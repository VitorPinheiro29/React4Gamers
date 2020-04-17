import useEventListener from '@use-it/event-listener';
import React, {useState} from 'react';
import './index.css';
import {TILE_SIZE} from '../../settings/constants';
import {HEAD_OFFSET} from '../../settings/constants';

const initialPosition = {
    x: 15,
    y: 3
}

const Hero = () => {
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectionState] = useState('RIGHT');

    useEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            updatePositionState({x: positionState.x, y: positionState.y - 1});
            updateDirectionState('LEFT');
        }else if (event.key === 'ArrowRight') {
            updatePositionState({x: positionState.x, y: positionState.y + 1}); 
            updateDirectionState('RIGHT');   
        } else if (event.key === 'ArrowUp') {
            updatePositionState({x: positionState.x + 1, y: positionState.y});
        }else if (event.key === 'ArrowDown'){
            updatePositionState({x: positionState.x - 1, y: positionState.y});
        }
    })

    return (
        <div 
        style={{ 
            width: TILE_SIZE, 
            height: TILE_SIZE + HEAD_OFFSET, 
            backgroundImage:"url(./assets/HERO.png)", 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation: 'hero-animation 1s steps(4) infinite',
            position: 'absolute',
            bottom: TILE_SIZE * positionState.x,
            left: TILE_SIZE * positionState.y,
            transform: `scaleX(${direction === 'RIGHT' ? 1: -1})`,
            }} 
        />
    )
}
export default Hero;