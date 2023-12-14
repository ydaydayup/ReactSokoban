import { FC } from 'react';

type CargoPosition = [number, number];

const Cargo: FC<{ point: CargoPosition }> = ({ point }: { point: CargoPosition }) => {
    return (
        <img
            className="w-[32px] h-[32px]"
            style={{ position: 'absolute', left: point[0], top: point[1] }}
            src="src/assets/images/game/cargo.png"
            alt=""
        />
    );
};
const Cargos: FC<{ points: CargoPosition[] }> = ({ points }: { points: CargoPosition[] }) => {
    return (
        <>
            {points.map((point) => (
                <Cargo point={point} />
            ))}
        </>
    );
};
export { Cargo, Cargos };
