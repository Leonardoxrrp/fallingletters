import React, { useEffect, useState } from 'react'
import "./screen.css"
import Letters from "../letter/Letters"
import { ABC } from '../../utils/constants';
import { lettersGenerator } from '../../utils/lettersGenerator';
import { randomize } from '../../utils/randomize';

const Screen = () => {
    const [lettersLength, setLettersLength] = useState(100);
    const [lettersList, setLettersList] = useState([])
    const [points, setPoints] = useState({})

    useEffect(() => {
        lettersGenerator(ABC, lettersLength, setPoints, setLettersList);
    }, [])

    return (
        <>
            <div style={{}}><h1>test</h1></div>
            <div className="screen">
                {

                    lettersList?.map((letter) => {
                        return <Letters top={randomize().top} right={randomize().right} color={randomize().color} letter={letter} key={randomize().key} size={randomize().size} fontSize={randomize().fontSize} showTime={randomize().showTime} />

                    })
                }
            </div>
            <div className="screen screen--secondary"></div>
        </>
    )
}

export default Screen