import { FC } from 'react';
// 坐标
type Coordinate = {
    x: number;
    y: number;
};
const Player: FC<{ position: Coordinate }> = ({ position }: { position: Coordinate }) => {
    return (
        <img
            style={{ left: position.x, top: position.y, position: 'absolute' }}
            src="src/assets/images/game/keeper.png"
            alt=""
        />
    );
};


export default Player;
