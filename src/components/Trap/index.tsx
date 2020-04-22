import React from 'react';
import './index.css';
import {TILE_SIZE} from '../../settings/constants';
import {DEMON_TILE_SIZE} from '../../settings/constants';
import { prependOnceListener } from 'cluster';

interface IProps {
    initialPosition: {x: number; y: number}
};  

const Trap = (props: IProps) => {
    return (
        <div 
        style={{ 
            width: TILE_SIZE, 
            height: 100, 
            backgroundImage:"url(./assets/TRAP.png)", 
            backgroundRepeat: 'no-repeat',
            animation: 'trap-animation 1s steps(8) infinite',
            position: 'absolute',
            top: TILE_SIZE * props.initialPosition.y,
            left: TILE_SIZE * props.initialPosition.x,
            }} 
        />
    )
}
export default Trap;