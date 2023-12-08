import { FC } from 'react';

type Coordinate = {
    x: number;
    y: number;
};
const Cargo: FC<{ position: Coordinate }> = ({ position }: { position: Coordinate }) => {
    return (
        <img
            style={{ left: position.x, top: position.y, position: 'absolute' }}
            src="src/assets/images/game/cargo.png"
            alt=""
        />
    );
};
export default Cargo;
