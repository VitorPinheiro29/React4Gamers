import useEventListener from '@use-it/event-listener';
import React, {useState} from 'react';
import './index.css';
import {TILE_SIZE} from '../../settings/constants';
import {HEAD_OFFSET} from '../../settings/constants';
import useHeroMoviment from '../../hooks/useHeroMoviment';
import {EDirection} from '../../settings/constants';

interface IProps {
    initialPosition: {x: number; y: number}
};  

const Hero = (props: IProps) => {
    const moviment = useHeroMoviment(props.initialPosition);


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
            top: TILE_SIZE * moviment.position.y - HEAD_OFFSET,
            left: TILE_SIZE * moviment.position.x,
            transform: `scaleX(${moviment.direction === EDirection.LEFT ? 1: -1})`,
            
            zIndex: 1
            }} 
        />
    )
}
export default Hero;