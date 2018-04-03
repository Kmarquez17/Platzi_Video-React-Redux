import React from 'react'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import './play-pause.css'

function PlayPause (props){
  return(
    <div className="PlayPause">
      {
        props.pause ?
          //si se cumple
          <button
            onClick={props.handleClick}
          >
            <Play size={25} color="white"/>
          </button>
        :
          // si no se cumple
          <button
            onClick={props.handleClick}
          >
            <Pause size={25} color="white"/>
          </button>
      }
    </div>
  )
}

export default PlayPause
