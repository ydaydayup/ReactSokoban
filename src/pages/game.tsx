import { FC } from 'react';

import Player from '@/components/game/Player.tsx';
import SokoBanMap from '@/components/game/SokoBanMap.tsx';
import Cargo from '@/components/game/Cargo.tsx';

const Game: FC = () => {
    return (
        <>
            <Player position={{ x: 100, y: 100 }} />
            <Cargo position={{ x: 110, y: 110 }} />
            <SokoBanMap />
        </>
    );
};
export function useMove() {
    const { movePlayerToLeft, movePlayerToDown, movePlayerToRight, movePlayerToUp } = usePlayerStore();

    window.addEventListener('keyup', (e: KeyboardEvent) => {
        switch (e.code) {
            case 'ArrowLeft':
                movePlayerToLeft();
                break;
            case 'ArrowRight':
                movePlayerToRight();
                break;
            case 'ArrowUp':
                movePlayerToUp();
                break;
            case 'ArrowDown':
                movePlayerToDown();
                break;
        }
    });
}
export default Game;
