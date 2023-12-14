import { FC } from 'react';

import Player from '@/components/game/Player.tsx';
import SokoBanMap from '@/components/game/SokoBanMap.tsx';
import { playerMove, usePlayerPositionStore } from '@/store/player.ts';
import { useCargoPositionStore } from '@/store/cargo.ts';
import { Cargos } from '@/components/game/Cargo.tsx';

// todo 请教 , 如何添加全局的事件监听
Move();

const Game: FC = () => {
    const playerPosition = usePlayerPositionStore((state) => state);
    console.log(playerPosition);
    const cargoPosition = useCargoPositionStore((state) => state);
    // const point2 = { x: 111, y: 111 };
    return (
        <>
            <Player point={playerPosition} />
            {/* <Cargo point={cargoPosition} /> */}
            <Cargos points={cargoPosition} />
            <SokoBanMap />
        </>
    );
};

export function Move() {
    const handleKeyUp = (e: KeyboardEvent) => {
        switch (e.code) {
            case 'ArrowLeft':
                playerMove({ x: -1, y: 0 });
                break;
            case 'ArrowRight':
                playerMove({ x: 1, y: 0 });
                break;
            case 'ArrowUp':
                playerMove({ x: 0, y: -1 });
                break;
            case 'ArrowDown':
                playerMove({ x: 0, y: 1 });
                break;
            default:
                break;
        }
    };

    window.addEventListener('keyup', handleKeyUp);
}

export default Game;
