export const TILE_SIZE = 48;

export const DEMON_TILE_SIZE = TILE_SIZE * 2;

export const HEAD_OFFSET = 12;

export const GAME_SIZE = 20*48;

export enum EDirection{
    LEFT = "ArrowRight",
    RIGHT = "ArrowLeft",
    UP = "ArrowDown",
    DOWN = "ArrowUp",
}

export enum EWalker {
    HERO = "hero",
    ENEMY = "enemy"
}