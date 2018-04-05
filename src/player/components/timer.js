import React from 'react'
import './timer.css'
// function leftPad(num) {
//   const pad = '00'
//   return pad.substring(0,pad.length - num.length) + num
//
// }
// function formateTime(seg) {
//   const minutos = parseInt(seg/60,10)
//   const segundos = parseInt(seg % 60, 10)
//
//   return `${leftPad(minutos.toString())} : ${leftPad(segundos.toString())}`
// }
function Timer(props) {
  return (
    <div className="Timer">
      <p>
        <span>{props.currentTime}/ {props.duration}</span>
      </p>
    </div>
  )
}
export default Timer
