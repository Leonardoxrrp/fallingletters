import React from 'react'
import "./letter.css"

const Letters = ({ right, color, top, letter, size, fontSize, showTime }) => {

  // Without this conditional letters may be too small to be read by the human eye.
  const correctSize = () => {
    if (fontSize < 10) return 15
    return fontSize;
  }

  const boxStyles = { right, top, minWidth: `${size}px`, minHeight: `${size}px`, backgroundColor: color, animationDuration: `${showTime}s` }
  return (
      <div className='letter' style={boxStyles}><p style={{ fontSize: `${correctSize()}px`, }}  >{letter}</p></div>

  )
}

export default Letters;