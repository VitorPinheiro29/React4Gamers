import React from 'react';
import {TILE_SIZE} from'../../../settings/constants';

interface IProps{
    position: {x: number, y: number};
    text: number;
}

function Tile(props: IProps) {

    function getTileColor() {
        switch(props.text) {
            case 1: 
                return'red';

            case 0:
                return 'yellow';
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
        }}>
          {props.text}
        </div>
    );
}

export default Tile;