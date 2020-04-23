import useEventListener from '@use-it/event-listener';
import React, {useState} from 'react';
import {EDirection, EWalker} from '../../settings/constants';
import { CanvasContext } from '../../contents/canvas';
import { ChestsContext } from '../../contents/chests';

function useHeroMoviment(initialPosition) {
    const canvasContext = React.useContext(CanvasContext);
    const chestsContexts = React.useContext(ChestsContext);
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectionState] = useState(EDirection.LEFT);

    useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
        const direction = event.key as EDirection;
        
        const moviment = canvasContext.updateCanvas(direction, positionState, EWalker.HERO);

        if (moviment.nextMove.valid) {
            updatePositionState(moviment.nextPosition);
            updateDirectionState(direction);
        };

        if (moviment.nextMove.dead){
            alert("Você morreu!");
        }

        if(moviment.nextMove.chest) {
            chestsContexts.updateOpenedChests();
        }

    });

    return {
        position: positionState,
        direction: direction,
    }
}

export default useHeroMoviment;