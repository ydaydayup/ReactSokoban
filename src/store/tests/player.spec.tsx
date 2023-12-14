// sum.js
// sum.test.js
import { expect, describe, test, beforeEach } from 'vitest';

import { playerMove, usePlayerPointStore } from '@/store/player.ts';
import { isFloor, isWall, MapType, useMapStore } from '@/store/map.ts';

beforeEach(async () => {
    const map: MapType[][] = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    useMapStore.setState(map);
    usePlayerPointStore.setState({ x: 0, y: 0 });
});
describe('player', () => {
    test('player move', () => {
        playerMove({ x: 1, y: 0 });
        const point0 = usePlayerPointStore.getState();
        expect(point0).toEqual({ x: 0, y: 0 });
    });
    test('player move2', () => {
        playerMove({ x: -1, y: 0 });
        const point1 = usePlayerPointStore.getState();
        expect(point1).toEqual({ x: 0, y: 0 });
    });
    test('player move3', () => {
        usePlayerPointStore.setState({ x: 1, y: 1 });
        playerMove({ x: 1, y: 0 });
        const point1 = usePlayerPointStore.getState();
        expect(point1).toEqual({ x: 2, y: 1 });
    });
});
describe('wall', () => {
    test('is wall', () => {
        expect(isWall(0, 0)).toBe(true);
        expect(isWall(8, 7)).toBe(true);
        expect(isFloor(8, 7)).toBe(false);
        expect(isFloor(2, 2)).toBe(true);
    });
});
describe('cargo ', () => {
    test('is cargo', () => {
        expect(isWall(0, 0)).toBe(true);
        expect(isWall(8, 7)).toBe(true);
        expect(isFloor(8, 7)).toBe(false);
        expect(isFloor(2, 2)).toBe(true);
    });
});
