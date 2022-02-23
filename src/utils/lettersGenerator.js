import { randomize } from "./randomize";

export const lettersGenerator = (arr, length, setPoints, setLettersList, lettersList, oneInterval) => {
    if (!oneInterval) {
        return setLettersList([...lettersList, {
            letter: arr[Math.floor(Math.random() * 5)],
            props: {
                top: randomize().top,
                right: randomize().right,
                size: randomize().size,
                fontSize: randomize().topfontSize,
                key: randomize().key,
                color: randomize().color,
                showTime: randomize().showTime,
            }
        }])
    } else {
        let newArray = [];
        let frequency = {};
        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * 5)
            newArray.push({
                letter: arr[index],
                props: {
                    top: randomize().top,
                    right: randomize().right,
                    size: randomize().size,
                    fontSize: randomize().topfontSize,
                    key: randomize().key,
                    color: randomize().color,
                    showTime: randomize().showTime,
                }
            });
            frequency[arr[index]] = frequency[arr[index]] ? frequency[arr[index]] + 1 : 1;
        }
        setPoints(frequency);
        setLettersList(newArray);
    }
};