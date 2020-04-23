import React, { useState } from "react";
import { canvas, handleNextPosition, checkValidMoviment, ECanvas } from "./helpers";
import { EWalker } from "../../settings/constants";

export const CanvasContext = React.createContext({
    canvas: [],
    updateCanvas: (direction, currentPosition, walker) => null
});

interface IProps {
    children: React.ReactNode;
}

function CanvasProvider(props: IProps) {
    const [canvasState, updateCanvasState] = useState({
    canvas: canvas,
    updateCanvas: (direction, currentPosition, walker) => {
        const nextPosition = handleNextPosition(direction, currentPosition);
        const nextMove= checkValidMoviment(nextPosition, walker);

        if (nextMove.valid) {
            updateCanvasState((prevState) => {
                const newCanvas = Object.assign([], prevState.canvas);
                const currentValue = newCanvas[currentPosition.y][currentPosition.x];

                newCanvas[currentPosition.y][currentPosition.x] = ECanvas.FLOOR;
                newCanvas[nextPosition.y][nextPosition.x] = currentValue;

                return {
                    canvas: newCanvas,
                    updateCanvas: prevState.updateCanvas,
                }
            });
        }

        return {
            nextPosition,
            nextMove
        }
    }
    });
    return(
        <CanvasContext.Provider value={canvasState}>
            {props.children}
        </CanvasContext.Provider>
    )
}

export default CanvasProvider;