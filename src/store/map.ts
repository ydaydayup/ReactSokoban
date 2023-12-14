import { create } from 'zustand';

const enum MapType {
    Wall = 1,
    Floor = 0,
}

const useMapStore = create<MapType[][]>(() => [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
]);

function isWall(x: number, y: number) {
    const map = useMapStore.getState();
    if (x < 0 || x >= map[0].length || y < 0 || y >= map.length) {
        return true;
    }
    return useMapStore.getState()[y][x] === MapType.Wall;
}

function isFloor(x: number, y: number) {
    return useMapStore.getState()[y][x] === MapType.Floor;
}

function setWall(x: number, y: number) {
    useMapStore.getState()[y][x] = MapType.Wall;
}

export { useMapStore, isFloor, isWall, MapType };
