import useInterval from '@use-it/interval';
import React, {useState} from 'react';
import {EDirection} from '../../settings/constants';
import {handleNextPosition} from '../../contents/canvas/helpers';


function useEnemyMoviment(initialPosition: any) {
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectionState] = useState(EDirection.RIGHT);

    useInterval(function move() {
        var random = Math.floor(Math.random()* 4);
        var directionArray = Object.values(EDirection);
        const randomDirection = directionArray[random];

        const nextMoviment = handleNextPosition(randomDirection, positionState);
        updatePositionState(nextMoviment);
        updateDirectionState(randomDirection);
    }, 500);

    return {
        position: positionState,
        direction: direction,
    }
}

export default useEnemyMoviment;