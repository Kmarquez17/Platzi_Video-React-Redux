import React from 'react'
import './modal.css'
function Modal(props){
    return(
      <div className="Modal">
        Modal Km 
        {props.children}
        <button onClick={props.handleClick}>Cerrar</button>
      </div>
    )
}
export default Modal
