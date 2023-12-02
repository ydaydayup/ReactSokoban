import { FC } from 'react';

import Player from '@/components/game/Player.tsx';
import SokoBanMap from '@/components/game/SokoBanMap.tsx';
import Cargo from '@/components/game/Cargo.tsx';

const Game: FC = () => {
    return (
        <>
            <Player />
            <Cargo />
            <SokoBanMap />
        </>
    );
};

export default Game;
