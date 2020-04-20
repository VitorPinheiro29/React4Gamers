import useEventListener from '@use-it/event-listener';
import React, {useState} from 'react';
import './index.css';
import {TILE_SIZE} from '../../settings/constants';
import {HEAD_OFFSET} from '../../settings/constants';
import useHeroMoviment from '../../hooks/useHeroMoviment';
import {EDirection} from '../../settings/constants';

const initialPosition = {
    x: 15,
    y: 3,
}

const Hero = () => {
    const moviment = useHeroMoviment(initialPosition);


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
            top: TILE_SIZE * moviment.position.x,
            left: TILE_SIZE * moviment.position.y,
            transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1: -1})`,
            
            zIndex: 1
            }} 
        />
    )
}
export default Hero;