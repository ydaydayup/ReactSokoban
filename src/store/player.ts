import { create, StoreApi, UseBoundStore } from 'zustand';

import { isWall } from '@/store/map.ts';

// import {create as createVanilla} from 'zustand/vanilla';
const step = 32;

type Point = {
    x: number;
    y: number;
};
type Position = {
    x: number;
    y: number;
};
const usePlayerPointStore = create<Point>(() => ({
    x: 1,
    y: 1,
}));

const usePlayerPositionStore = create<Position>(() => {
    const pointState = usePlayerPointStore.getState();
    const point = {
        x: pointState.x * step,
        y: pointState.y * step,
    };
    return point;
});

// 每次走一步
type Direction = { x: 0; y: 1 } | { x: 1; y: 0 } | { x: 0; y: -1 } | { x: -1; y: 0 };
const playerMove = (position: Direction) => {
    const positionState = usePlayerPositionStore.getState();
    const pointState = usePlayerPointStore.getState();

    const nextPoint = {
        x: pointState.x + position.x,
        y: pointState.y + position.y,
    };

    if (isWall(nextPoint.x, nextPoint.y)) {
        return;
    }
    const nextPosition = {
        x: positionState.x + position.x * step,
        y: positionState.y + position.y * step,
    };
    console.log(nextPosition);

    usePlayerPointStore.setState((_) => nextPoint);
    usePlayerPositionStore.setState((_) => nextPosition);
};

type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never;
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
    const store = _store as WithSelectors<typeof _store>;
    store.use = {};
    for (const k of Object.keys(store.getState())) {
        (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
    }

    return store;
};
const useBearStore = createSelectors(usePlayerPositionStore);
export { step, usePlayerPositionStore, playerMove, useBearStore, usePlayerPointStore };
