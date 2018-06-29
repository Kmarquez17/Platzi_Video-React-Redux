
import {createStore} from 'redux'
// Store = Es la parte más importante de entender cuando estamos haciendo algo en Redux.

// Datos importantes del Store:

// Contiene el estado de la aplicación.
// Se puede acceder al estado con el método getState()
// Se puede actualizar el estado con el método dispatch(action)
// Escucha cambios con el método **subscribe(listener)
// Deja de escuchar cambios retornando la función del método subscribe(listener)

const initialState = [
    {
        "title":"Despacito"
    },
    {
        "title":"One more time"
    },
    {
        "title":"Echame la culpa"
    },
]

// Reducer => Función pura que retorna el próximo estado.
// PreloadState / InitialState => Es el estado inicial de la aplicación, la primera carga, el llamado a una data. Puede ser cualquier tipo de dato.
// Enhancer => Función que puede extender redux con capacidades añadidas por librerías externas. Es opcional. Eg. Añadir las dev-tools

const reducer = function(state,action){
    switch(action.type){
        case 'ADD_SONG':
            return [...state,action.payload]
        default:
            return state
    }
}

const store = createStore(
    reducer, //Reducer
    initialState, // PreloadState / InitialState
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enhancer
)

const form = document.getElementById('form')
const container = document.getElementById('playlist')
const playlist = store.getState()

playlist.forEach((item) => {
    const template = document.createElement('p')
    template.textContent = item.title

    container.appendChild(template)
});

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    const data = new FormData(form)
    const title = data.get('title')
    console.log(title)

    store.dispatch({
        type :'ADD_SONG',
        payload : {
            title,
        },
    })
}