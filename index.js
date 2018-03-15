import React from 'react' //Sirve para crear componentes
import ReactDom, {render} from 'react-dom' //Sirve para poner los componentes en cualquier lugar y renderizarlos
//A la hora de importar un Componente tienen que ir en Mayuscula igual al componente de referencia.
import Media from './src/playlist/components/media.js'

const app = document.getElementById('app')
const HolaMundo = <h1>Hola Mundo Kevin</h1>
//ReactDom.render(que voy a renderizar (sintaxis html)y donde se hara(body en el html))
render(
  <Media
    //Lo que se espera renderizar en la web
    title="Qué es Response Desing...!"
    author="KevinMárquez"
    image="./images/covers/bitcoin.jpg"
    type="video"
  />
  //en que elemento se va a introducir(div,h1,section etc)
    ,app
)
