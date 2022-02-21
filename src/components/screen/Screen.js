import React from 'react'
import "./screen.css"
import Letters from "../letter/Letters"
import { ABC } from '../../constants/contants';

const Screen = () => {
    // const position = Math.floor(Math.random()*100);
    // const length = Array.from({ length: 20 }, () => Math.floor(Math.random() * 27))

    return (
        <>
            <div className="screen">
                {
                    ABC.map((letter, index) => {
                        const top = `${Math.floor(Math.random() * 90)}%`;
                        const right = `${Math.floor(Math.random() * 90)}%`;
                        const size = Math.floor(Math.random() * 40);
                        const fontSize = Math.floor(Math.random() * 40);
                        // const length = Array.from({ length: 20 }, () => Math.floor(Math.random() * 27))
                        return <Letters top={top} right={right} letter={letter} index={index} size={size} fontSize={fontSize} />
                    })
                }
            </div>
            <div className="screen screen--secondary"></div>
        </>
    )
}

export default Screen