import React, {Component} from 'react'
import {createPortal} from 'react-dom'

class ModalContainer extends Component{
  render(){
    //return createPortal(que se va a renderizar, donde)
    /***********************************************************************************
      Los portales "Portales" es un patrón que permite que un componente controle 
      completamente otra parte del DOM existente.
    ***********************************************************************************/
    return createPortal(
      this.props.children,
      document.getElementById('modal-container')
    )
  }
}
export default ModalContainer
