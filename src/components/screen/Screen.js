import React, { useEffect, useState } from 'react'
import "./screen.css"
import Letters from "../letter/Letters"
import { ABC } from '../../utils/constants';
import { lettersGenerator } from '../../utils/lettersGenerator';

const Screen = () => {
    const [lettersLength, setLettersLength] = useState(5);
    const [lettersList, setLettersList] = useState([])
    const [points, setPoints] = useState({})
    const [firstIteration, setFirstIteration] = useState(true);
    const [oneInterval, setOneINterval] = useState(true)
    let newList = [];

    useEffect(() => {
        if (oneInterval) setInterval( () => {
            setLettersLength(prev => prev +1)
        }, 1000);
        lettersGenerator(ABC, lettersLength, setPoints, setLettersList, lettersList, oneInterval);
        setOneINterval(false);
    }, [lettersLength, setLettersList])


    const handleDelete = () => {
        const filtered = lettersList.filter((obj) => {
            if (obj.letter !== "A") return obj;
        })
        setLettersList(filtered);
    }

    return (
        <>
            <div className="screen">

                {
                    lettersList.map((obj) => {
                        const {top, right, size, fontSize, key, color, showTime} = obj.props
                        return <Letters right={right} color={color} top={top} letter={obj.letter} size={size} fontSize={fontSize} showTime={showTime} key={key} />;

                    })
                }

            </div>
            <div className="screen screen--secondary"></div>
            <button onClick={() => handleDelete()}>DELETE</button>
        </>
    )
}

export default Screen