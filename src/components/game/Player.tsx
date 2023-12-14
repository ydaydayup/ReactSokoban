import { FC } from 'react';

type Point = {
    x: number;
    y: number;
};

const Player: FC<{ point: Point }> = ({ point }: { point: Point }) => {
    return (
        <img
            className="w-[32px] h-[32px]"
            style={{
                position: 'absolute',
                left: point.x,
                top: point.y,
            }}
            src="src/assets/images/game/keeper.png"
            alt=""
        />
    );
};
export default Player;
