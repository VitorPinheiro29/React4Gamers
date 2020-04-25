import useInterval from '@use-it/interval';
import React, {useState} from 'react';
import {EDirection, EWalker} from '../../settings/constants';
import {handleNextPosition, checkValidMoviment} from '../../contents/canvas/helpers';
import { CanvasContext } from '../../contents/canvas';


function useEnemyMoviment(initialPosition: any) {
    const canvasContext = React.useContext(CanvasContext);
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectionState] = useState(EDirection.RIGHT);

    useInterval(function move() {
        var random = Math.floor(Math.random()* 4);
        var directionArray = Object.values(EDirection);
        const randomDirection = directionArray[random];

        const nextPosition = handleNextPosition(randomDirection, positionState);
        const nextMove = checkValidMoviment(nextPosition, EWalker.ENEMY);

        const moviment = canvasContext.updateCanvas(randomDirection, positionState, EWalker.ENEMY);

        if (moviment.nextMove.valid) {
            updatePositionState(moviment.nextPosition);
            updateDirectionState(randomDirection);
        }

        if (moviment.nextMove.dead) {
            alert("Você morreu");
        }

    }, 1000);

    return {
        position: positionState,
        direction: direction,
    }
}

export default useEnemyMoviment;