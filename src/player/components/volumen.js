import React from 'react'
import VolumeIcon from '../../icons/components/volumen'
import './volumen.css'

function Volumen(props) {
  return(
    <button className="Volumen">
      <VolumeIcon
        color="white"
        size={25}
      />
      <div className="Volumen-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumenChange}
        />
      </div>
    </button>
  )
}

export default Volumen
