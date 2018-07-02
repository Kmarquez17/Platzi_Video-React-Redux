import React from 'react' //Sirve para crear componentes
import ReactDom, {render} from 'react-dom' //Sirve para poner los componentes en cualquier lugar y renderizarlos
import Home from '../pages/containers/home'
//A la hora de importar un Componente tienen que ir en Mayuscula igual al componente de referencia.
// import Playlist from './src/playlist/components/playlist.js'
import data from '../api.json';
import {Provider} from 'react-redux'

import {createStore} from 'redux'

const initialState = {
    data:{
        ...data
    }
}

const store = createStore(
    (state) => state,
    initialState,
    //reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enhancer
)

console.log(store.getState())

const homeContainer = document.getElementById('home-container')
//ReactDom.render(que voy a renderizar (sintaxis html)y donde se hara(body en el html))


render( 
<Provider store={store}>
    {/* <Home/>         */}
    <p>Hoola Kevin Márquez</p> 
</Provider>
, homeContainer);
