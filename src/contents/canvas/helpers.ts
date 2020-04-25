import {EDirection, EWalker} from '../../settings/constants';
import React, {useState} from 'react';

export function handleNextPosition(direction, position) {

    switch(direction) {
        case EDirection.LEFT: 
            return {x: position.x + 1, y: position.y};

        case EDirection.RIGHT: 
            return {x: position.x -1, y: position.y};

        case EDirection.UP: 
            return {x: position.x, y: position.y +1};

        case EDirection.DOWN: 
            return {x: position.x, y: position.y - 1};

        default:
        return{x: position.x, y: position.y};
    }

}
//TODO VALOR 1 É IGUAL A PAREDE

export enum ECanvas {
    FLOOR = 0,
    WALL = 1,
    DOOR = 2,
    TRAP = 3,
    MINI_DEMON = 4,
    DEMON = 5,
    CHEST = 6,
    HERO = 7,
};

const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const DR = ECanvas.DOOR;
const TR = ECanvas.TRAP;
const MD = ECanvas.MINI_DEMON;
const DE = ECanvas.DEMON;
const CH = ECanvas.CHEST;
const HE = ECanvas.HERO;


export const canvas = [
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
    [WL, FL, MD, WL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, WL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, CH, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, WL],
    [WL, FL, FL, DE, FL, FL, FL, TR, FL, FL, FL, FL, TR, CH, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL, WL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, MD, FL, WL, WL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DE, FL, FL, FL, FL, MD, WL],
    [WL, FL, TR, FL, FL, FL, FL, MD, CH, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DE, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL,HE, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL,FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL]
];

export function checkValidMoviment(nextPosition, walker) {
    const canvasValue = canvas[nextPosition.y][nextPosition.x];

    const result = walker === EWalker.HERO ? getHeroValidMovies(canvasValue) : getEnemiesValidMovies(canvasValue);
    return result;
}

export function getHeroValidMovies(canvasValue){
    return {
        valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.CHEST,
        dead: canvasValue === ECanvas.TRAP|| canvasValue === ECanvas.MINI_DEMON || canvasValue === ECanvas.DEMON,
        chest: canvasValue === ECanvas.CHEST,
        door: canvasValue === ECanvas.DOOR
    }
}
export function getEnemiesValidMovies(canvasValue){
    return {
        valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.HERO,
        dead: canvasValue === ECanvas.HERO,
        chest: false,
        door: false
    }

}
