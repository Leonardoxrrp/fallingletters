import React from 'react'
import "./letter.css"

const Letters = ({ right, top, letter, index, size, fontSize }) => {

  const correctLetterSize = () => {
    if (fontSize < 10) return `${fontSize + 20}px`;
    if (fontSize > size) return `${size}px`;
  }
  const correctBoxSize = () => {
    if (fontSize < 10) return `${size + 20}px`;
  }

  const boxPosition = { right: right, top: top, width: `${correctBoxSize()}px`, height: `${correctBoxSize()}px` }

  return (
    <div className='letter' style={boxPosition} key={index}><p style={{ fontSize: correctLetterSize() }}>{letter}</p></div>
  )
}

export default Letters;