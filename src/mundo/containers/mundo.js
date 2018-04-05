import React, {Component} from 'react'
import MundoLayout from '../components/mundo-layout'
import Nombre from '../components/nombre'

function Mundo (props){
  return(
    <MundoLayout>
      <Nombre
        nombre="Kevin Marquez R"
      />
    </MundoLayout>
  )
}

export default Mundo
