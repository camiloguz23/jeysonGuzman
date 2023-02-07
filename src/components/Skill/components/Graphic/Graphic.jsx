import React from 'react'
import "./Graphic.scss"

const Graphic = ({rol}) => {
  return (
    <div className='contentGraphic'>
      <div className={`line1 ${rol}`}></div>
      <div className={`line2 ${rol}`}></div>
      <div className={`line3 ${rol}`}></div>
      <div className={`line4 ${rol}`}></div>
    </div>
  )
}

export default Graphic
