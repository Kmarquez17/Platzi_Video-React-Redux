import React from 'react' //Sirve para crear componentes
import ReactDom, {render} from 'react-dom' //Sirve para poner los componentes en cualquier lugar y renderizarlos
import Home from '../pages/containers/home'
//A la hora de importar un Componente tienen que ir en Mayuscula igual al componente de referencia.
// import Playlist from './src/playlist/components/playlist.js'
import data from '../api.json';

const app = document.getElementById('app')
//ReactDom.render(que voy a renderizar (sintaxis html)y donde se hara(body en el html))
render( <Home data={data} />, app);
