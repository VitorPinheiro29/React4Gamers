import useEventListener from '@use-it/event-listener';
import React, {useState} from 'react';
import {EDirection} from '../../settings/constants';
import {handleNextPosition, checkValidMoviment} from '../../contents/canvas/helpers';

function useHeroMoviment(initialPosition) {
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectionState] = useState(EDirection.LEFT);

    useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
        const direction = event.key as EDirection;
        const nextPosition = handleNextPosition(direction, positionState);
        
        const isValidMoviment= checkValidMoviment(nextPosition);

        if (isValidMoviment) {
            updatePositionState(nextPosition);
            updateDirectionState(direction);
        }
    });

    return {
        position: positionState,
        direction: direction,
    }
}

export default useHeroMoviment;