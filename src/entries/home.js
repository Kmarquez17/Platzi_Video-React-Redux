import React from 'react' //Sirve para crear componentes
import ReactDom, {render} from 'react-dom' //Sirve para poner los componentes en cualquier lugar y renderizarlos
import Home from '../pages/containers/home'
//A la hora de importar un Componente tienen que ir en Mayuscula igual al componente de referencia.
// import Playlist from './src/playlist/components/playlist.js'
import data from '../api.json';
import {Provider} from 'react-redux'
import reducer from '../reducers/data'

import {createStore} from 'redux'

const initialState = {
    data:{
        ...data,
    },
    search: []
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enhancer
)

console.log(store.getState())

const homeContainer = document.getElementById('home-container')


render( 
    //Un Provider es un componente de orden superior que sirve para heredar elementos a los componentes hijos.
<Provider store={store}>
    <Home/>        
    {/* <p>Hoola Kevin Márquez</p>  */}
</Provider>
, homeContainer);
