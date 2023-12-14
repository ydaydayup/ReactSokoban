import { create } from 'zustand';

// const enum MapType {
//     Wall = 1,
//     Floor = 0,
// }
const step = 32;
type CargoPoint = [number, number];
const useCargoPointStore = create<CargoPoint[]>(() => [
    [1, 1],
    [5, 5],
    [6, 6],
]);
type CargoPosition = [number, number];
const useCargoPositionStore = create<CargoPosition[]>(() => {
    const pointState = useCargoPointStore.getState();
    return pointState.map((point) => [point[0] * step, point[1] * step]);
});
// const

export { useCargoPositionStore };
