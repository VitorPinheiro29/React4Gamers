import React from 'react';
import {TILE_SIZE} from'../../../settings/constants';
import {ECanvas} from '../../../contents/canvas/helpers';

interface IProps{
    position: {x: number, y: number};
    text: number;
}

function Tile(props: IProps) {

    function getTileColor() {
        switch(props.text) {
            case ECanvas.WALL: 
                return'yellow';

            case ECanvas.FLOOR:
                return 'darkgrey';

            case ECanvas.HERO:
                return 'magenta';

            case ECanvas.DOOR:
                return 'white';
            
            case ECanvas.MINI_DEMON:
            case ECanvas.DEMON:
                return 'red';

            case ECanvas.CHEST:
                return 'cyan';
        }
        
    }

    const color = getTileColor();

    return (
        <div style = {{
            position: 'absolute',
            left: TILE_SIZE * props.position.x,
            top: TILE_SIZE * props.position.y,
            width: TILE_SIZE,
            height: TILE_SIZE,
            border: `2px solid ${color}`,
            color: color, //a cor que vc definiu acima. Vermelho ou Amarelo
            fontSize: '32px',
            zIndex: 2
        }}>
          {props.text}
        </div>
    );
}

export default Tile;