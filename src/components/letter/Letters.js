import React from 'react'
import "./letter.css"

const Letters = ({ right, color, top, letter, size, fontSize, showTime }) => {
console.log(showTime, 'time')
  const correctLetterSize = () => {
    if (fontSize < 10) return `${fontSize}px`;
    if (fontSize > size) return `${size}px`;
  }
  const correctBoxSize = () => {
    if (fontSize < 10) return `${size}px`;
  }

  const boxStyles = { right, top, width: `${size}px`, height: `${size}px`, backgroundColor: color, animationDuration: `${showTime}s` }

  return (
    <div className='letter' style={boxStyles}><p style={{ fontSize: correctLetterSize() }}>{letter}</p></div>
  )
}

export default Letters;