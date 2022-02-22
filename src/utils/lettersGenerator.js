export const lettersGenerator = (arr, length, setPoints, setLettersList) => {
    let newArray = [];
    let frequency = {};
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * 5)
        newArray.push(arr[index]);
        frequency[arr[index]] = frequency[arr[index]] ? frequency[arr[index]] + 1 : 1;
    }
    setPoints(frequency);
    setLettersList(newArray);
};