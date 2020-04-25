import useEventListener from '@use-it/event-listener';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            setTimeout(() => {
                alert('Você morreu!');
            })
            window.location.reload();
        }

        if(moviment.nextMove.chest) {
            chestsContexts.updateOpenedChests(moviment.nextPosition);
        }

        if (chestsContexts.totalChests === chestsContexts.openedChests.total && moviment.nextMove.door) {
            alert("Você venceu!");
            window.location.reload();
        }
    });

    return {
        position: positionState,
        direction: direction,
    }
}

export default useHeroMoviment;