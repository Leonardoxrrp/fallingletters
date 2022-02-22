const colorGenerator = () => {
    let maxHex = 0xFFFFFF;
    let randomNumber = Math.floor(Math.random() * maxHex).toString(16); 
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
export const randomize = () => {
    return {
        top: `${Math.floor(Math.random() * 80)}%`,
        right: `${Math.floor(Math.random() * 80)}%`,
        size: Math.floor(Math.random() * 60),
        fontSize: Math.floor(Math.random() * 60),
        key: Math.floor(Math.random() * 100000000),
        color: colorGenerator(),
        showTime: Math.floor(Math.random() * 10),
    }
}