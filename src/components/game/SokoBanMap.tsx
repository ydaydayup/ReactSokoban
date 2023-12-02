import { FC } from 'react';

const enum MapType {
    Wall = 1,
    Floor = 0,
}

const mapList: MapType[][] = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const SokoBanMap: FC = () => {
    const listItems = mapList.map((row, index) => (
        <div className={`grid grid-flow-col grid-cols-${row.length} w-fit gap-x-0`}>
            {row.map((col) => (
                <img
                    src={
                        col === MapType.Wall
                            ? 'src/assets/images/game/wall.png'
                            : 'src/assets/images/game/floor.png'
                    }
                    alt=""
                />
            ))}
        </div>
    ));
    return (
        <>
            {/* <div className="grid grid-cols-5 gap-0"> */}
            {/*    <img src="src/assets/images/game/wall.png" alt="" /> */}
            {/*    <img src="src/assets/images/game/wall.png" alt="" /> */}
            {/*    <img src="src/assets/images/game/wall.png" alt="" /> */}
            {/*    <img src="src/assets/images/game/wall.png" alt="" /> */}
            {/*    <img src="src/assets/images/game/wall.png" alt="" /> */}
            {/* </div> */}
            {listItems}
        </>
    );
    // return <></>;
};
export default SokoBanMap;
